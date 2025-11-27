import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1235]/50 border-t border-white/5 pt-20 pb-10 mt-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Shield className="w-8 h-8 text-brand-primary fill-current" />
                    <span className="font-extrabold text-2xl text-white tracking-tight">FULLSTACK</span>
                </div>
                <p className="text-brand-light text-sm leading-relaxed">
                    La escuela de tecnología que te conecta con tu mejor versión profesional. Aprende a tu ritmo, desde cualquier lugar.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:text-brand-primary hover:bg-white/10 transition-all"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:text-brand-primary hover:bg-white/10 transition-all"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-light hover:text-brand-primary hover:bg-white/10 transition-all"><Linkedin className="w-5 h-5" /></a>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6">Explora</h4>
                <ul className="space-y-3 text-sm text-brand-light">
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Desarrollo Web</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Ciencia de Datos</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Diseño de Producto</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Cloud Computing</a></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-white mb-6">Comunidad</h4>
                <ul className="space-y-3 text-sm text-brand-light">
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Discord Oficial</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Blog Tech</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Eventos Live</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Historias de Éxito</a></li>
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-white mb-6">Soporte</h4>
                <ul className="space-y-3 text-sm text-brand-light">
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Centro de Ayuda</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Términos y Condiciones</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Política de Privacidad</a></li>
                    <li><a href="#" className="hover:text-brand-primary transition-colors">Libro de Reclamaciones</a></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-light text-sm">© 2024 Fullstack Academy SAC. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Sistemas Operativos</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;