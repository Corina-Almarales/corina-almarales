import './global.css';

import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Corina Almarales - Portfolio</title>
        <meta name="description" content="Servicios Creativos y Académicos" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="navbar">
          <div className="container">
            <a href="#inicio" className="logo">Corina Almarales</a>
            <ul className="nav-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-mi">Sobre mí</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#tarifas">Tarifas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </nav>

        <main>
          {children}
        </main>

        <footer className="footer">
          © 2025 Corina Almarales. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
