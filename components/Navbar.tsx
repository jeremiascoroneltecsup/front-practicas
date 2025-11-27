import React, { useState } from 'react';
import { Search, Menu, X, Bell, Shield } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0f1235]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-12">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                 <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                   <span className="text-white font-black text-2xl">FS</span>
                 </div>
              </div>
              <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight leading-none">
                    <span className="text-white">FULL</span><span className="text-yellow-400">STACK</span>
                  </span>
                  <span className="text-[9px] tracking-[0.15em] text-yellow-400 uppercase font-bold">Technology School</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-6">
                <a href="#hero" className="text-gray-200 hover:text-yellow-400 font-medium text-sm transition-colors">Inicio</a>
                <a href="#modulos" className="text-gray-200 hover:text-yellow-400 font-medium text-sm transition-colors">Plan Completo Odoo</a>
                <a href="#pricing" className="text-gray-200 hover:text-yellow-400 font-medium text-sm transition-colors">Precios</a>
                <a href="#cursos" className="text-gray-200 hover:text-yellow-400 font-medium text-sm transition-colors">Cursos</a>
              </div>
            </div>
          </div>

          {/* Search & Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-brand-light group-focus-within:text-brand-primary transition-colors" />
              </div>
              <input
                type="text"
                className="bg-brand-secondary/50 border border-white/10 text-sm rounded-full pl-10 pr-4 py-2.5 w-64 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary/50 text-white placeholder-brand-light transition-all"
                placeholder="Buscar cursos..."
              />
            </div>
            <button className="text-brand-light hover:text-white relative transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-[#0f1235] bg-brand-primary transform translate-x-1/2 -translate-y-1/2"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                <button className="text-sm font-bold text-white hover:text-brand-primary transition-colors">
                    Ingresar
                </button>
                <button className="bg-brand-primary hover:bg-red-500 text-white text-sm font-bold py-2 px-5 rounded-full transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transform hover:-translate-y-0.5">
                    Regístrate
                </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white/5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f1235] border-b border-white/10 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#" className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold">Cursos</a>
            <a href="#" className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold">Rutas</a>
            <a href="#" className="text-gray-300 hover:text-brand-primary block px-3 py-3 rounded-md text-base font-bold">Comunidad</a>
             <div className="pt-4 pb-2">
                <input
                    type="text"
                    className="bg-white/5 text-sm rounded-lg pl-4 pr-4 py-3 w-full focus:outline-none text-white border border-white/10"
                    placeholder="Buscar curso..."
                />
             </div>
             <div className="grid grid-cols-2 gap-4 mt-4">
                 <button className="text-white font-bold py-3 border border-white/10 rounded-lg">Ingresar</button>
                 <button className="bg-brand-primary text-white font-bold py-3 rounded-lg">Regístrate</button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;