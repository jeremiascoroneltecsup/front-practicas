import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black border-t border-white/5 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Escuelas */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Escuelas</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Desarrollo Web</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Implementación Odoo</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Backend con Odoo</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Odoo Funcional</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Desarrollo Móvil</a></li>
                </ul>
            </div>

            {/* Platzi y comunidad */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">FULLSTACK y comunidad</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">FULLSTACK Business</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Live Classes</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Lanzamientos</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Trabaja con nosotros</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Podcast</a></li>
                </ul>
            </div>
            
            {/* Recursos */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Recursos</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Manual de Marca</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Tutoriales</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Documentación Odoo</a></li>
                </ul>
            </div>

            {/* Soporte */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider">Soporte</h4>
                <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Preguntas Frecuentes</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Contáctanos</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Términos y Condiciones</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacidad</a></li>
                    <li>
                        <div className="flex items-center gap-2 text-gray-400 mt-4">
                            <Phone className="w-4 h-4 text-orange-400" />
                            <span className="text-sm">(+51) 952528752</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <p className="text-gray-500 text-sm">De LATAM <span className="text-orange-400">🧡</span> para el mundo</p>
                
                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex justify-center items-center gap-6 flex-wrap mb-8">
                <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                    <span className="text-blue-900 font-bold text-xl">VISA</span>
                </div>
                <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                    <div className="flex">
                        <div className="w-7 h-7 rounded-full bg-red-600"></div>
                        <div className="w-7 h-7 rounded-full bg-orange-400 -ml-3"></div>
                    </div>
                </div>
                <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                    <span className="text-blue-900 font-bold">AMEX</span>
                </div>
                <div className="h-12 bg-blue-600 rounded-lg flex items-center justify-center px-6 shadow-lg">
                    <span className="text-white font-bold">PayPal</span>
                </div>
                <div className="h-12 bg-purple-700 rounded-lg flex items-center justify-center px-6 shadow-lg">
                    <span className="text-white font-bold">Diners</span>
                </div>
            </div>

            <p className="text-center text-gray-500 text-xs">
                Copyright © Escuela FULLSTACK 2020 · Todos los derechos reservados
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;