'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../components/Navbar'; 
import Image from 'next/image';
import '../global.css';

export default function SobreMiPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <section className="sobre-mi-section" data-aos="fade-up">
          <div className="sobre-mi-container">
            <Image 
              src="/tu-foto.jpg" 
              alt="Corina Almarales" 
              width={300} 
              height={400} 
              className="foto-sobre-mi-grande"
            />
            <div className="sobre-mi-texto-detallado">
              <h2>Más sobre mí</h2>
              <p>Soy una profesional comprometida con el crecimiento personal, la creatividad y el impacto social. Desde el trabajo social hasta el diseño y los proyectos académicos, mi enfoque es siempre conectar con la esencia de las personas y darles soluciones auténticas, mágicas y útiles.</p>
              <p>Me encanta aprender, enseñar, crear y acompañar procesos. Actualmente combino mi experiencia en RRHH, el diseño gráfico, las asesorías académicas y mi emprendimiento <strong>Constante Florecer</strong>.</p>
              <p>¡Gracias por visitar mi espacio creativo! 🌷</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
