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
          Servicios reativos y académicos
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
      <section id="preview-servicios" className="preview-section">
        <h2>Mis Servicios</h2>
        <p>Soluciones personalizadas que conectan con tu propósito.</p>

        <div className="iconos-servicios">
          <div className="servicio">
            <img src="/academico.png" alt="Contenido Académico" />
            <h3>Contenido Académico</h3>
          </div>
          <div className="servicio">
            <img src="/asesoria.png" alt="Asesorías y Tutorías" />
            <h3>Asesorías / Tutorías</h3>
          </div>
          <div className="servicio">
            <img src="/diseno.png" alt="Diseño Gráfico" />
            <h3>Diseño Gráfico</h3>
          </div>
          <div className="servicio">
            <img src="/ppt.png" alt="Presentaciones" />
            <h3>Presentaciones</h3>
          </div>
        </div>

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