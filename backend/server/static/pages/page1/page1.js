var rt=Object.defineProperty;var ot=(f,u,l)=>u in f?rt(f,u,{enumerable:!0,configurable:!0,writable:!0,value:l}):f[u]=l;var C=(f,u,l)=>(ot(f,typeof u!="symbol"?u+"":u,l),l);(function(){"use strict";function f(){}function u(t){return t()}function l(){return Object.create(null)}function $(t){t.forEach(u)}function N(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function O(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function S(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function T(){return x(" ")}function U(t){return Array.from(t.childNodes)}function V(t,e){e=""+e,t.data!==e&&(t.data=e)}let w;function p(t){w=t}const h=[],j=[];let _=[];const P=[],q=Promise.resolve();let k=!1;function z(){k||(k=!0,q.then(B))}function v(t){_.push(t)}const E=new Set;let m=0;function B(){if(m!==0)return;const t=w;do{try{for(;m<h.length;){const e=h[m];m++,p(e),D(e.$$)}}catch(e){throw h.length=0,m=0,e}for(p(null),h.length=0,m=0;j.length;)j.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];E.has(n)||(E.add(n),n())}_.length=0}while(h.length);for(;P.length;)P.pop()();k=!1,E.clear(),p(t)}function D(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}function F(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}const G=new Set;function J(t,e){t&&t.i&&(G.delete(t),t.i(e))}function K(t,e,n){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),v(()=>{const s=t.$$.on_mount.map(u).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),c.forEach(v)}function Q(t,e){const n=t.$$;n.fragment!==null&&(F(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,r,c,s,i=null,d=[-1]){const y=w;p(t);const o=t.$$={fragment:null,ctx:[],props:s,update:f,not_equal:c,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(y?y.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:e.target||y.$$.root};i&&i(o.root);let I=!1;if(o.ctx=n?n(t,e.props||{},(a,A,...H)=>{const L=H.length?H[0]:A;return o.ctx&&c(o.ctx[a],o.ctx[a]=L)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](L),I&&W(t,a)),A}):[],o.update(),I=!0,$(o.before_update),o.fragment=r?r(o.ctx):!1,e.target){if(e.hydrate){const a=U(e.target);o.fragment&&o.fragment.l(a),a.forEach(g)}else o.fragment&&o.fragment.c();e.intro&&J(t.$$.fragment),K(t,e.target,e.anchor),B()}p(y)}class Y{constructor(){C(this,"$$");C(this,"$$set")}$destroy(){Q(this,1),this.$destroy=f}$on(e,n){if(!N(n))return f;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Z="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Z);function tt(t){let e,n,r,c,s;return{c(){e=S("h1"),e.textContent="Page1",n=T(),r=S("p"),c=x("Hello from hell, "),s=x(t[0])},m(i,d){b(i,e,d),b(i,n,d),b(i,r,d),O(r,c),O(r,s)},p(i,[d]){d&1&&V(s,i[0])},i:f,o:f,d(i){i&&(g(e),g(n),g(r))}}}function et(t,e,n){let{name:r}=e;return t.$$set=c=>{"name"in c&&n(0,r=c.name)},[r]}class nt extends Y{constructor(e){super(),X(this,e,et,tt,M,{name:0})}}new nt({target:document.getElementById("app")})})();
