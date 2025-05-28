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
        <li><Link href="/">Inicio</Link></li> {/* CAMBIADO */}
        <li><Link href="/sobre-mi">Sobre mí</Link></li>
        <li><a href="#preview-servicios">Servicios</a></li>
        <li><a href="#cotiza">Tarifas</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
