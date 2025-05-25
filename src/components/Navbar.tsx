import React from 'react';
import Link from 'next/link';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Corina Almarales</div>
      <ul className="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre-mi">Sobre mí</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#tarifas-contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
