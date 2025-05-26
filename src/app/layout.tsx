'use client';

import './global.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'Corina Almarales | Creativa',
  description: 'Portafolio de servicios de diseño y creatividad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación
      once: true,      // Solo se anima una vez al hacer scroll
    });
  }, []);

  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="footer">
          <p className="text-sm text-center text-gray-500 mt-8">
            © {new Date().getFullYear()} Corina Almarales. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
