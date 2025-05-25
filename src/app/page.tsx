'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por contactarte, ${form.nombre}!`);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <>
      <section className="hero">
        <h1>Hola, soy Corina Almarales</h1>
        <p>Servicios creativos y académicos para potenciar tu proyecto</p>
      </section>

      <section className="preview-section">
        <h2>Sobre mí</h2>
        <p>Soy diseñadora y creadora con pasión por la creatividad y el aprendizaje constante.</p>
        <Link href="/sobre-mi" className="btn">Conóceme más</Link>
      </section>

      <section className="preview-section">
        <h2>Servicios</h2>
        <p>Ofrezco diseño gráfico, asesorías académicas y consultoría creativa para proyectos personales y empresariales.</p>
        <Link href="/servicios" className="btn">Ver más</Link>
      </section>

      <section className="contact-form-section">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}
