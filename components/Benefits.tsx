import React from 'react';
import { Rocket, Zap, Users, Trophy, Target, DollarSign, BookOpen, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Ruta efectiva de aprendizaje",
      description: "Estudia Odoo siguiendo una ruta efectiva de cursos, diseñada para optimizar tu aprendizaje y dominio del sistema.",
      color: "from-purple-500 to-purple-600",
      lightBg: "bg-purple-500/10"
    },
    {
      icon: "⚡",
      title: "Trabaja a corto plazo",
      description: "Aprende Odoo, uno de los cursos más demandados, y encuentra trabajo de inmediato.",
      color: "from-blue-500 to-blue-600",
      lightBg: "bg-blue-500/10"
    },
    {
      icon: "🎓",
      title: "Mejores oportunidades laborales",
      description: "Capacítate en Odoo y accede a nuevas oportunidades laborales.",
      color: "from-pink-500 to-pink-600",
      lightBg: "bg-pink-500/10"
    },
    {
      icon: "💰",
      title: "Aumenta tus ingresos",
      description: "Odoo optimiza tu negocio y te ayuda a incrementar tus ingresos de manera eficiente.",
      color: "from-green-500 to-green-600",
      lightBg: "bg-green-500/10"
    }
  ];

  const additionalBenefits = [
    {
      icon: "📚",
      title: "Cursos de Odoo",
      description: "Cursos de Odoo, el ERP líder a nivel mundial.",
      color: "border-purple-500/30"
    },
    {
      icon: "⭐",
      title: "Cursos Recomendados",
      description: "Hemos capacitado a más de 3000 alumnos que nos recomiendan",
      color: "border-blue-500/30"
    },
    {
      icon: "🎥",
      title: "Acceso a sesiones en vivo",
      description: "Solo para los estudiantes donde expondremos proyectos, experiencias y conocimientos.",
      color: "border-green-500/30"
    },
    {
      icon: "🚀",
      title: "Metodología con enfoque práctico",
      description: "Cursos desarrollados y aplicados en proyectos reales y casos prácticos.",
      color: "border-pink-500/30"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ruta del <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">éxito para ti</span>
          </h2>
          <p className="text-gray-400 text-lg">Transforma tu carrera profesional con Odoo</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`${benefit.lightBg} backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:scale-105 hover:border-white/30 transition-all duration-300 group cursor-pointer`}
            >
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
            Beneficios <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">para ti</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Todo lo que necesitas para dominar Odoo</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className={`glass-card border-2 ${benefit.color} p-8 rounded-3xl text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
