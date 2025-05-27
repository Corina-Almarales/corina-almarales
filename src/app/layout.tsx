import './global.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import AOSProvider from './components/AOSProvider';
import { ToastProvider } from './once-ui/components/ToastProvider';


export const metadata: Metadata = {
  title: 'Corina Almarales | Creativa',
  description: 'Portafolio de servicios de diseño y creatividad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AOSProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="footer">
            <p className="text-sm text-center text-gray-500 mt-8">
              © {new Date().getFullYear()} Corina Almarales. Todos los derechos reservados.
            </p>
          </footer>
        </AOSProvider>
      </body>
    </html>
  );
}
