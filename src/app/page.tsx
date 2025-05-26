'use client';
import React from 'react';
import Navbar from './components/Navbar'; 
import Image from 'next/image';
import './global.css';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section id="inicio" className="hero">
          <h1 className="nombre">Corina Almarales</h1>
          <p className="etiquetas">Freelancer • Trabajo Social • RRHH</p>
          <h2 className="titulo-principal">Servicios Creativos y Académicos</h2>
          <p className="subtitulo">Impulsa tu esencia con soluciones creativas y funcionales</p>
        </section>

        <section id="preview-sobre-mi" className="preview-section">
          <h2>Sobre mí</h2>
          <p>Apasionada por diseñar experiencias digitales que florecen, combinando creatividad, sensibilidad social y atención al detalle. Siempre en evolución, logro equilibrar estética, funcionalidad y propósito para transformar ideas en soluciones significativas.</p>
          <a href="#sobre-mi" className="btn">Conóceme más</a>
        </section>

        <section id="preview-servicios" className="preview-section servicios-preview">
          <h2>Mis Servicios</h2>
          <p>Soluciones personalizadas que conectan con tu propósito.</p>
          <div className="servicios-grid">
            <div className="servicio-item">
              <img src="/icons/academico.png" alt="Contenido Académico" />
              <h4>Contenido Académico</h4>
            </div>
            <div className="servicio-item">
              <img src="/icons/asesoria.png" alt="Asesorías/Tutorías" />
              <h4>Asesorías y Tutorías</h4>
            </div>
            <div className="servicio-item">
              <img src="/icons/diseno.png" alt="Diseño Gráfico" />
              <h4>Diseño Gráfico</h4>
            </div>
            <div className="servicio-item">
              <img src="/icons/ppt.png" alt="Presentaciones" />
              <h4>Presentaciones</h4>
            </div>
          </div>
          <a href="#servicios" className="btn">Ver servicios</a>
        </section>

        <section id="cotiza" className="cotiza-section">
          <div className="cotiza-container">
            <h2>Cotiza tu servicio personalizado</h2>
            <p className="frase-motivacional">¿Tienes una idea y no sabes cómo empezar? ¡Agendá conmigo y empecemos a crear algo especial juntos!</p>
            <form className="contact-form">
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo" required />
              <textarea placeholder="¿En qué puedo ayudarte?" required></textarea>
              <button type="submit">Agendar</button>
            </form>
          </div>
        </section>

        <section id="contacto">
          {/* Aquí podrías agregar tu sección de contacto con links a redes, WhatsApp, etc. */}
        </section>
      </main>
    </>
  );
}
