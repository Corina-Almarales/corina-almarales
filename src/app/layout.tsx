import '@/once-ui/styles/global.scss';
import Link from 'next/link';

export const metadata = {
  title: 'Corina Almarales - Portafolio',
  description: 'Servicios creativos y académicos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">Corina Almarales</Link>
            <ul className="nav-links">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/sobre-mi">Sobre mí</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/tarifas-contacto">Tarifas y Contacto</Link></li>
            </ul>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="footer">
          © 2025 Corina Almarales. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
