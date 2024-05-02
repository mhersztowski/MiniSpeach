import express, { Request, Response, NextFunction } from 'express';
import * as http from 'http';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const server = express();
const server2 = http.createServer(server);

const port = 3000;

interface User {
  username: string;
  password: string;
}

const users: User[] = [];

server.use(express.json());
server.use(cookieParser());

server.use('/', express.static('server/static'));
server.use('/www/', express.static('server/www'));

server.get('/', (req: Request, res: Response) => {
  res.send('Witaj świecie!');
});

// Rejestracja nowego użytkownika
server.post('/register', async (req: Request, res: Response) => {
  try {
      // Hashuj hasło
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Dodaj nowego użytkownika do bazy danych
      users.push({ username: req.body.username, password: hashedPassword });
      res.status(201).send('Użytkownik został zarejestrowany pomyślnie.');
  } catch {
      res.status(500).send('Wystąpił błąd podczas rejestracji użytkownika.');
  }
});

// Logowanie użytkownika
server.post('/login', async (req: Request, res: Response) => {
  const user = users.find(user => user.username === req.body.username);
  if (user == null) {
      return res.status(400).send('Nie znaleziono użytkownika.');
  }
  try {
      if (await bcrypt.compare(req.body.password, user.password)) {
          // Utwórz token JWT
          const token = jwt.sign({ username: user.username }, 'secret');
          res.cookie('token', token, { httpOnly: true });
          res.json({ token: token });
      } else {
          res.status(401).send('Nieprawidłowe hasło.');
      }
  } catch {
      res.status(500).send('Wystąpił błąd podczas logowania użytkownika.');
  }
});

// Autoryzacja żądań za pomocą tokena JWT
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization')?.split(' ')[1];
  if (token == null) {
      return res.status(401).send('Brak tokena autoryzacyjnego.');
  }
  jwt.verify(token, 'secret', (err, user) => {
      if (err) {
          return res.status(403).send('Nieprawidłowy token autoryzacyjny.');
      }
      req.user = user;
      next();
  });
}

// Przykładowy chroniony endpoint
server.get('/protected', authenticateToken, (req: Request, res: Response) => {
  res.send('Dostęp do chronionego zasobu został udzielony.');
});

server.get('/protectedwww', (req: Request, res: Response) => {
  const token = req.cookies.token;
  // Sprawdź, czy ciasteczko z tokenem JWT istnieje
  if (!token) return res.status(401).send('Brak autoryzacji.');
  // Weryfikuj token JWT
  jwt.verify(token, 'secret', (err, user) => {
      if (err) return res.status(403).send('Nieprawidłowa autoryzacja.');
      // Jeśli token jest poprawny, udziel dostępu do chronionego zasobu
      res.send('Dostęp do chronionego zasobu został udzielony.');
  });
});

server2.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});
