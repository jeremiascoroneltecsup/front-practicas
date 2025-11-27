import React from 'react';
import { FileText, Calculator, Package, Globe, ShoppingBag, GraduationCap, Box, Wrench, Receipt, Heart, Users as UsersIcon, Mail, Search, BarChart3, FileSignature, CheckSquare, ShoppingCart, Headphones, Clock, DollarSign } from 'lucide-react';

const OdooModules = () => {
  const modules = [
    { icon: <FileText className="w-8 h-8" />, name: "Facturación", color: "from-blue-500 to-blue-600", bg: "bg-blue-500/10" },
    { icon: <Calculator className="w-8 h-8" />, name: "Contabilidad", color: "from-pink-500 to-pink-600", bg: "bg-pink-500/10" },
    { icon: <Package className="w-8 h-8" />, name: "Inventario", color: "from-purple-500 to-purple-600", bg: "bg-purple-500/10" },
    { icon: <Globe className="w-8 h-8" />, name: "Sitio web", color: "from-cyan-500 to-cyan-600", bg: "bg-cyan-500/10" },
    { icon: <ShoppingBag className="w-8 h-8" />, name: "Compra", color: "from-indigo-500 to-indigo-600", bg: "bg-indigo-500/10" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "eLearning", color: "from-teal-500 to-teal-600", bg: "bg-teal-500/10" },
    { icon: <Box className="w-8 h-8" />, name: "Fabricación", color: "from-emerald-500 to-emerald-600", bg: "bg-emerald-500/10" },
    { icon: <Wrench className="w-8 h-8" />, name: "Studio", color: "from-orange-500 to-orange-600", bg: "bg-orange-500/10" },
    { icon: <Receipt className="w-8 h-8" />, name: "Punto de venta", color: "from-yellow-500 to-yellow-600", bg: "bg-yellow-500/10" },
    { icon: <Heart className="w-8 h-8" />, name: "CRM", color: "from-red-500 to-red-600", bg: "bg-red-500/10" },
    { icon: <UsersIcon className="w-8 h-8" />, name: "Empleados", color: "from-violet-500 to-violet-600", bg: "bg-violet-500/10" },
    { icon: <Mail className="w-8 h-8" />, name: "Marketing por correo", color: "from-fuchsia-500 to-fuchsia-600", bg: "bg-fuchsia-500/10" },
    { icon: <Search className="w-8 h-8" />, name: "Reclutamiento", color: "from-lime-500 to-lime-600", bg: "bg-lime-500/10" },
    { icon: <BarChart3 className="w-8 h-8" />, name: "Ventas", color: "from-amber-500 to-amber-600", bg: "bg-amber-500/10" },
    { icon: <FileSignature className="w-8 h-8" />, name: "Firma", color: "from-sky-500 to-sky-600", bg: "bg-sky-500/10" },
    { icon: <CheckSquare className="w-8 h-8" />, name: "Proyecto", color: "from-rose-500 to-rose-600", bg: "bg-rose-500/10" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "Comercio electrónico", color: "from-purple-600 to-purple-700", bg: "bg-purple-600/10" },
    { icon: <Headphones className="w-8 h-8" />, name: "Servicio de asistencia", color: "from-teal-600 to-teal-700", bg: "bg-teal-600/10" },
    { icon: <Clock className="w-8 h-8" />, name: "Hoja de horas", color: "from-blue-600 to-blue-700", bg: "bg-blue-600/10" },
    { icon: <DollarSign className="w-8 h-8" />, name: "Gastos", color: "from-green-500 to-green-600", bg: "bg-green-500/10" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-4">
          Módulos del <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Plan completo Odoo</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">Domina las herramientas más demandadas del mercado</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modules.map((module, index) => (
            <div 
              key={index}
              className={`${module.bg} backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer group text-center`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} text-white group-hover:scale-110 transition-transform shadow-xl`}>
                  {module.icon}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">{module.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OdooModules;
