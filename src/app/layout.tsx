import './global.css';
import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Corina Almarales | Portfolio',
  description: 'Servicios Creativos y Académicos para potenciar tu crecimiento',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={playfair.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer style={{ 
          textAlign: 'center', 
          padding: '1rem', 
          marginTop: '2rem',
          color: '#8B008B', // morado oscuro
          fontSize: '0.9rem'
        }}>

        <footer className="footer">
          © 2025 Corina Almarales. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
