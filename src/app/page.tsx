'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      {/* HERO / PORTADA */}
      <section id="inicio" className="hero">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Corina Almarales
        </motion.h1>

        <motion.p 
          className="etiquetas"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
        >
          Freelancer · Trabajo Social · RRHH
        </motion.p>

        <motion.h2 
          className="subtitulo"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }}
        >
          Servicios Creativos y Académicos
        </motion.h2>

        <motion.p 
          className="frase"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.8 }}
        >
          Impulsa tu esencia con soluciones creativas y funcionales
        </motion.p>
      </section>
      
       {/* PREVIEW SOBRE MÍ */}
      <section id="preview-sobre-mi" className="preview-section">
        <h2>Sobre mí</h2>
        <p>
          Apasionada por diseñar experiencias digitales que florecen, combinando creatividad, sensibilidad social y atención al detalle. Siempre en evolución, logro equilibrar estética, funcionalidad y propósito para transformar ideas en soluciones significativas.
        </p>
        <a href="#sobre-mi" className="btn">Conóceme más</a>
      </section>

      {/* PREVIEW SERVICIOS CON ICONOS */}
        <section className="preview-section servicios-preview">
  <h2>Mis Servicios</h2>
  <p>Soluciones funcionales para cada necesidad</p>
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
     


        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href="#servicios" className="btn">Ver servicios</a>
        </div>
      </section>

      {/* FORMULARIO COTIZACIÓN */}
      <section id="cotizar" className="preview-section">
        <h2>Cotiza tu servicio personalizado</h2>
        <p>
          ¿Tienes una idea y no sabes cómo empezar? 
          ¡Agendá conmigo y empecemos a crear algo especial juntos!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="¿Qué servicio necesitas?" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>
    </>
  );
}