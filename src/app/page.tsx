'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar'; 
import Image from 'next/image';
import './global.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section id="inicio" className="hero">
          <h1 className="nombre" data-aos="fade-up">Corina Almarales</h1>
          <p className="etiquetas" data-aos="fade-up" data-aos-delay="200">Freelancer • Trabajo Social • RRHH</p>
          <h2 className="titulo-principal" data-aos="fade-right" data-aos-delay="400">Servicios Creativos y Académicos</h2>
          <p className="subtitulo" data-aos="fade-left" data-aos-delay="100">Impulsa tu esencia con soluciones creativas y funcionales</p>
        </section>

        <section id="preview-sobre-mi" className="preview-section" data-aos="zoom-in">
          <h2>Sobre mí</h2>
          <div className="sobre-mi-flex">
            <div className="sobre-mi-img">
              <Image 
                src="/tu-foto.jpg" 
                alt="Foto de Corina" 
                width={250} 
                height={350} 
                className="foto-sobre-mi"
              />
            </div>
            <div className="sobre-mi-texto">
              <p>Apasionada por diseñar experiencias digitales que florecen combinando creatividad, sensibilidad social y atención al detalle. Siempre en evolución, equilibrando estética, funcionalidad y propósito para transformar ideas en soluciones significativas.</p>
              <a href="#sobre-mi" className="btn" data-aos="fade-up" data-aos-delay="200">Conóceme más</a>
            </div>
          </div>
        </section>
<section id="sobre-mi" className="sobre-mi-section" data-aos="fade-up">
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
      <p>Soy una profesional comprometida con el crecimiento personal, la creatividad y el impacto social. Desde el trabajo social hasta el diseño y los proyectos académicos, mi enfoque es siempre conectar con la esencia de las personas y darles soluciones auténticas, bellas y útiles.</p>
      <p>Me encanta aprender, enseñar, crear y acompañar procesos. Actualmente combino mi experiencia en RRHH, el diseño gráfico, las asesorías académicas y mi emprendimiento <strong>Constante Florecer</strong>.</p>
      <p>¡Gracias por visitar mi espacio creativo! 🌷</p>
    </div>
  </div>
</section>

        <section id="preview-servicios" className="preview-section servicios-preview">
          <h2 data-aos="fade-up">Mis Servicios</h2>
          <p data-aos="fade-up" data-aos-delay="200">Soluciones personalizadas que conectan con tu propósito.</p>
          <div className="servicios-grid">
            <div className="servicio-item" data-aos="flip-left">
              <img src="/icons/academico.png" alt="Contenido Académico" />
              <h4>Contenido Académico</h4>
            </div>
            <div className="servicio-item" data-aos="flip-right" data-aos-delay="100">
              <img src="/icons/asesoria.png" alt="Asesorías/Tutorías" />
              <h4>Asesorías y Tutorías</h4>
            </div>
            <div className="servicio-item" data-aos="flip-left" data-aos-delay="200">
              <img src="/icons/diseno.png" alt="Diseño Gráfico" />
              <h4>Diseño Gráfico</h4>
            </div>
            <div className="servicio-item" data-aos="flip-right" data-aos-delay="300">
              <img src="/icons/ppt.png" alt="Presentaciones" />
              <h4>Presentaciones</h4>
            </div>
          </div>
          <a href="#servicios" className="btn" data-aos="fade-up" data-aos-delay="400">Ver servicios</a>
        </section>

        <section id="cotiza" className="cotiza-section" data-aos="fade-up">
          <div className="cotiza-container">
            <h2>Cotiza tu servicio personalizado</h2>
            <p className="frase-motivacional" data-aos="fade-up" data-aos-delay="200">¿Tienes una idea y no sabes cómo empezar? ¡Agendá conmigo y empecemos a crear algo especial juntos!</p>
            <form className="contact-form" data-aos="zoom-in" data-aos-delay="400">
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo" required />
              <textarea placeholder="¿En qué puedo ayudarte?" required></textarea>
              <button type="submit">Agendar</button>
            </form>
          </div>
        </section>

        <section id="contacto" data-aos="fade-in">
          {/* Aquí podrías agregar tu sección de contacto con links a redes, WhatsApp, etc. */}
        </section>
      </main>
    </>
  );
}
