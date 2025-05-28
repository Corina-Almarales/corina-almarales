'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import './sobreMi.css'; 

export default function SobreMi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="sobre-mi-page">
      <section className="perfil-container">
        <div className="foto-bio" data-aos="fade-right">
          <Image src="/tu-foto.jpg" alt="Foto Corina" width={250} height={250} className="foto-cv" />
        </div>
        <div className="bio-info" data-aos="fade-left">
          <h1>Sobre Mí</h1>
          <p>🌸 Trabajadora Social | Diseñadora Empírica | Emprendedora</p>
          <p>
            Soy apasionada por el desarrollo personal, el bienestar, el diseño emocional y la creación de soluciones funcionales con sentido social.
            Me especializo en transformar ideas en experiencias visuales auténticas, humanas y profesionales.
          </p>
        </div>
      </section>

      <section className="linea-tiempo" data-aos="fade-up">
        <h2>Experiencia</h2>
        <div className="item-linea">
          <span className="circulo"></span>
          <div className="contenido-linea">
            <h3>PANI (Asistente Ejecutiva)</h3>
            <p>Apoyo a equipos técnicos en proyectos sociales, documentación y atención ciudadana.</p>
          </div>
        </div>
        <div className="item-linea">
          <span className="circulo"></span>
          <div className="contenido-linea">
            <h3>INCOPESCA (Voluntaria)</h3>
            <p>Colaboración administrativa en procesos institucionales de impacto comunitario.</p>
          </div>
        </div>
      </section>

      <section className="educacion" data-aos="fade-up">
        <h2>Educación</h2>
        <ul>
          <li>Licenciatura en Trabajo Social - UCR (en curso)</li>
          <li>Certificaciones en diseño gráfico, Canva, ventas y redes sociales</li>
        </ul>
      </section>
    </main>
  );
}
