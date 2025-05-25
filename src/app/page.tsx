import React from 'react';

export default function HomePage() {
  return (
    <>
      <section id="inicio" className="hero">
        <h1>Bienvenid@ a mi Portfolio</h1>
        <p>Servicios Creativos y Académicos</p>
        <a href="#sobre-mi" className="btn">Conóceme más</a>
      </section>

      <section id="sobre-mi" className="preview-section">
        <h2>Sobre mí</h2>
        <p>Breve resumen sobre quién soy y qué hago...</p>
        <a href="#servicios" className="btn">Ver servicios</a>
      </section>

      <section id="servicios" className="preview-section">
        <h2>Servicios</h2>
        <p>Descripción breve de los servicios que ofrezco...</p>
      </section>

      <section id="tarifas-contacto" className="preview-section">
        <h2>Tarifas y Contacto</h2>
        <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
