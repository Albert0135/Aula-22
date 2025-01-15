import React from 'react';
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
      {/* Outlet para renderizar as sub-rotas */}
      <Outlet />
    </div>
  );
}

export default About;