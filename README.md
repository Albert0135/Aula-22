# Configuração de Rotas com React Router

Este guia explica como configurar rotas básicas e sub-rotas em uma aplicação React usando o React Router.

Objetivos:

 - Configurar rotas básicas (página inicial e sobre).
 - Adicionar sub-rotas em páginas específicas.
 - Passos para Configuração.

## 1. Instalar o React Router

Primeiro, instale o React Router no seu projeto:

```bash
npx create-react-app react-router-basico
cd react-router-basico
npm install react-router-dom
```

## 2.  Configuração das Rotas Básicas
Componente App.js
Configure as rotas principais para as páginas Home e About:

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

## Componente Home.js

Exibe a página inicial:

```jsx
function Home() {
  return <h1>Página Inicial</h1>;
}
export default Home;
```

## Componente About.js

Exibe a página "Sobre":

```jsx
function About() {
  return <h1>Sobre</h1>;
}
export default About;
```
## 3. Configuração de Sub-Rotas.

- Agora, adicione sub-rotas dentro das páginas "Home" e "About".

## Componente App.js Atualizado

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Section1 from './Section1';
import Section2 from './Section2';
import History from './History';
import Team from './Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="section1" element={<Section1 />} />
          <Route path="section2" element={<Section2 />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
```
## Componente Home.js com Sub-Rotas

```jsx
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li><Link to="section1">Seção 1</Link></li>
          <li><Link to="section2">Seção 2</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Home;
```

## Componente About.js com Sub-Rotas

```jsx
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Sobre</h1>
      <nav>
        <ul>
          <li><Link to="history">História</Link></li>
          <li><Link to="team">Equipe</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default About;
```

## Componente Section1.js

```jsx
function Section1() {
  return <h2>Seção 1</h2>;
}
export default Section1;
```

## Componente Section2.js

```jsx
function Section2() {
  return <h2>Seção 2</h2>;
}
export default Section2;
```

## Componente History.js

```jsx
function History() {
  return <h2>História</h2>;
}
export default History;
```

## Componente Team.js

```jsx
function Team() {
  return <h2>Equipe</h2>;
}
export default Team;
```


## 4. Acessando as Sub-Rotas

As rotas e sub-rotas configuradas são:

 - Página Inicial: /
    - Seção 1: /home/section1
    - Seção 2: /home/section2
 - Sobre: /about

    - História: /about/history
    - Equipe: /about/team
