import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-900 to-purple-950 border-t border-white/5 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Novedades */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-6">Novedades</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                    <li><a href="#" className="hover:text-yellow-400 transition-colors">Inicio</a></li>
                    <li>
                        <a href="#" className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg uppercase text-sm">
                            Nuestros Planes
                        </a>
                    </li>
                </ul>
            </div>
            
            {/* Contacto */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-6">Contacte con nosotros</h4>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                        <span className="text-green-400 text-sm">● WhatsApp</span>
                        <a href="tel:+51952528752" className="hover:text-yellow-400 transition-colors">(+51) 952528752</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                        <Mail className="w-4 h-4 text-yellow-400" />
                        <a href="mailto:fullstackis@gmail.com" className="hover:text-yellow-400 transition-colors">fullstackis@gmail.com</a>
                    </div>
                </div>
                <div className="pt-4">
                    <a href="#" className="text-purple-300 hover:text-yellow-400 transition-colors text-sm underline">
                        Regresar arriba
                    </a>
                </div>
            </div>

            {/* Escuela FULLSTACK */}
            <div className="space-y-4">
                <h4 className="font-bold text-white text-lg mb-6">Escuela FULLSTACK</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                    Somos una institución líder en la formación de expertos en tecnologías digitales, con un enfoque especial en Odoo, uno de los sistemas ERP más avanzados del mercado. Nos dedicamos a capacitar a nuestros estudiantes en el desarrollo, implementación y personalización de esta potente herramienta empresarial.
                </p>
            </div>
        </div>
        
        {/* Social and Share */}
        <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-400 text-sm">Copyright © Escuela FULLSTACK 2020 - Todos los derechos reservados</p>
                
                <div className="flex items-center gap-4">
                    <span className="text-white font-medium">Compartir</span>
                    <div className="flex gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all transform hover:scale-110">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center text-white transition-all transform hover:scale-110">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center text-white transition-all transform hover:scale-110">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
                <div className="h-10 bg-white rounded flex items-center justify-center px-4"><span className="text-blue-800 font-bold italic text-lg">VISA</span></div>
                <div className="h-10 bg-white rounded flex items-center justify-center px-4"><div className="flex"><div className="w-6 h-6 rounded-full bg-red-600 opacity-80"></div><div className="w-6 h-6 rounded-full bg-orange-400 opacity-80 -ml-3"></div></div></div>
                <div className="h-10 bg-white rounded flex items-center justify-center px-4"><span className="text-blue-700 font-bold text-sm">AMERICAN EXPRESS</span></div>
                <div className="h-10 bg-orange-500 rounded flex items-center justify-center px-4"><span className="text-white font-bold">PayPal</span></div>
                <div className="h-10 bg-purple-600 rounded flex items-center justify-center px-4"><span className="text-white font-bold text-sm">Diners Club</span></div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;