'use client';
import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">Corina Almarales</Link>
      </div>
      <ul className="navbar-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="/sobre-mi">Sobre mí</a></li>
        <li><a href="#preview-servicios">Servicios</a></li>
        <li><a href="#cotiza">Tarifas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
