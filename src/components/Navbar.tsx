'use client';
import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="#inicio">Corina Almarales</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link href="#inicio">Inicio</Link>
        <Link href="#sobre-mi">Sobre mí</Link>
        <Link href="#servicios">Servicios</Link>
        <Link href="#tarifas-contacto">Tarifas</Link>
        <Link href="#tarifas-contacto">Contacto</Link>
      </div>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}
