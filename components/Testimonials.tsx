import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kuai-mare Orion",
      text: "El material es práctico y directo al grano. Antes veía Odoo como algo complicado, ahora lo manejo con facilidad gracias a su excelente metodología.",
      image: "https://picsum.photos/60/60?random=1"
    },
    {
      name: "Jorge Casas",
      text: "Gracias a este plan, logré implementar Odoo en mi empresa sin depender de terceros. Muy recomendado.",
      image: "https://picsum.photos/60/60?random=2"
    },
    {
      name: "Jorge Blanco",
      text: "No imaginé que en tan poco tiempo iba a entender el backend de Odoo. Los bootcamps en vivo son clave.",
      image: "https://picsum.photos/60/60?random=3"
    },
    {
      name: "Héctor Contreras",
      text: "Excelente plataforma para aprender Odoo. Los proyectos reales me ayudaron muchísimo en mi carrera profesional.",
      image: "https://picsum.photos/60/60?random=4"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          ¿Qué opinan <span className="text-brand-primary">nuestros alumnos?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-2xl hover:bg-brand-secondary transition-all duration-300 border border-white/5"
            >
              <Quote className="w-10 h-10 text-brand-primary mb-4 opacity-50" />
              <p className="text-brand-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-brand-primary/30"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-brand-light text-sm">Alumno FULLSTACK</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
