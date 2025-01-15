import React from 'react';
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