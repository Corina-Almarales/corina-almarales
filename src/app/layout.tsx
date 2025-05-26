import './global.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const metadata: Metadata = {
  title: 'Corina Almarales | Portfolio',
  description: 'Servicios Creativos y Académicos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ paddingTop: '100px' }}>
          {children}
        </main>
        <footer className="footer">
          <p className="text-sm text-center text-gray-500 mt-8">
            © {new Date().getFullYear()} Corina Almarales. Todos los derechos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
