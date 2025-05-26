'use client';
import React from 'react';

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center px-6 py-4"
      style={{ fontFamily: 'Playfair Display' }}
    >
      <div className="text-purple-800 text-xl font-bold">Corina Almarales</div>
      <ul className="flex flex-row gap-6 text-fuchsia-600 font-semibold text-sm m-0 p-0 list-none">
        <li><a href="#inicio" className="hover:text-purple-600 transition">Inicio</a></li>
        <li><a href="#sobre-mi" className="hover:text-purple-600 transition">Sobre mí</a></li>
        <li><a href="#servicios" className="hover:text-purple-600 transition">Servicios</a></li>
        <li><a href="#tarifas-contacto" className="hover:text-purple-600 transition">Tarifas</a></li>
        <li><a href="#tarifas-contacto" className="hover:text-purple-600 transition">Contacto</a></li>
      </ul>
    </nav>
  );
}
