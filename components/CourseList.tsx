import React from 'react';
import { Star, Clock, User } from 'lucide-react';
import { Course } from '../types';

const courses: Course[] = [
  { id: '1', title: 'Master en React 19', instructor: 'Miguel Ángel', level: 'Avanzado', image: 'https://picsum.photos/400/250?random=10', rating: 4.9, badge: 'Tendencia' },
  { id: '2', title: 'Python para Data Science', instructor: 'Laura G.', level: 'Básico', image: 'https://picsum.photos/400/250?random=11', rating: 4.8 },
  { id: '3', title: 'Sistemas de Diseño UI', instructor: 'Carlos Design', level: 'Intermedio', image: 'https://picsum.photos/400/250?random=12', rating: 4.9 },
  { id: '4', title: 'Arquitectura en AWS', instructor: 'Cloud Ninja', level: 'Avanzado', image: 'https://picsum.photos/400/250?random=13', rating: 5.0, badge: 'Nuevo' },
];

const CourseList: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            Lanzamientos de la semana
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group glass-card rounded-2xl overflow-hidden hover:border-brand-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                {course.badge && (
                    <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                        {course.badge}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c2054] via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                     <span className={`text-[10px] font-bold px-2 py-1 rounded bg-black/40 backdrop-blur-md ${
                        course.level === 'Básico' ? 'text-green-400 border border-green-400/30' :
                        course.level === 'Intermedio' ? 'text-yellow-400 border border-yellow-400/30' :
                        'text-red-400 border border-red-400/30'
                    }`}>
                        {course.level}
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-yellow-400 text-xs font-bold">
                        <Star className="w-3 h-3 fill-current" />
                        {course.rating}
                    </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {course.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-brand-light/20 flex items-center justify-center">
                        <User className="w-3 h-3 text-brand-light" />
                    </div>
                    <span className="text-brand-light text-sm font-medium">{course.instructor}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                     <div className="flex items-center text-brand-light text-xs font-medium">
                        <Clock className="w-3 h-3 mr-1.5" />
                        <span>12h 45m</span>
                     </div>
                     <button className="text-white text-xs font-bold uppercase tracking-wider hover:text-brand-primary transition-colors">
                        Ver Curso &rarr;
                     </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;