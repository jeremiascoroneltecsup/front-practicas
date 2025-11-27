import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      name: "Alexander Sánchez",
      role: "CEO & Odoo Expert",
      course: "Plan Completo Odoo",
      image: "https://picsum.photos/400/500?random=10",
      bgColor: "from-purple-400 via-purple-500 to-purple-600"
    },
    {
      name: "María González",
      role: "Senior Backend Developer",
      course: "Odoo Backend Avanzado",
      image: "https://picsum.photos/400/500?random=11",
      bgColor: "from-orange-400 via-orange-500 to-orange-600"
    },
    {
      name: "Carlos Mendoza",
      role: "Odoo Functional Consultant",
      course: "Implementación Odoo",
      image: "https://picsum.photos/400/500?random=12",
      bgColor: "from-cyan-400 via-cyan-500 to-cyan-600"
    },
    {
      name: "Ana Rodríguez",
      role: "Full Stack Developer",
      course: "Desarrollo de Módulos",
      image: "https://picsum.photos/400/500?random=13",
      bgColor: "from-pink-400 via-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-green-900/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Nuestros profesores son <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">expertos de la industria</span>
          </h2>
          <p className="text-gray-400 text-lg">Aprende de quienes trabajan con Odoo todos los días</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${instructor.bgColor} opacity-90`}></div>
              
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 bg-gradient-to-t from-black/80 to-transparent -mt-32">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{instructor.name}</h3>
                <p className="text-gray-200 text-sm mb-3">{instructor.role}</p>
                
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <span className="text-lg">🎓</span>
                    </div>
                    <span className="text-white text-xs font-medium">{instructor.course}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
