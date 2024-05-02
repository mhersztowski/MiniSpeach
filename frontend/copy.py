import shutil
import os

# Lista katalogów do skopiowania
directories_to_copy = ['dist', 'static']

# Ścieżka do katalogu docelowego
output_directory = '../backend/server/static'

if os.path.exists(output_directory):
    shutil.rmtree(output_directory)

# Utworzenie katalogu 'output'
os.makedirs(output_directory)

# Kopiowanie zawartości katalogów do katalogu docelowego
for directory in directories_to_copy:
    source = os.path.join(os.getcwd(), directory)  # Pełna ścieżka do katalogu źródłowego
    destination = os.path.join(os.getcwd(), output_directory)  # Pełna ścieżka docelowa
    source_contents = os.listdir(source)  # Pobranie zawartości katalogu źródłowego
    # Kopiowanie plików i katalogów z katalogu źródłowego do katalogu docelowego
    for item in source_contents:
        source_item = os.path.join(source, item)
        if os.path.isdir(source_item):
            shutil.copytree(source_item, os.path.join(destination, item), dirs_exist_ok=True)
        else:
            shutil.copy2(source_item, destination)
            