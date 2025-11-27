import React from 'react';
import { FileText, Calculator, Package, Globe, ShoppingBag, GraduationCap, Box, Wrench, Receipt, Heart, Users as UsersIcon, Mail, Search, BarChart3, FileSignature, CheckSquare, ShoppingCart, Headphones, Clock, DollarSign } from 'lucide-react';

const OdooModules = () => {
  const modules = [
    { icon: <FileText className="w-8 h-8" />, name: "Facturación", color: "from-blue-500 to-blue-600" },
    { icon: <Calculator className="w-8 h-8" />, name: "Contabilidad", color: "from-pink-500 to-pink-600" },
    { icon: <Package className="w-8 h-8" />, name: "Inventario", color: "from-purple-500 to-purple-600" },
    { icon: <Globe className="w-8 h-8" />, name: "Sitio web", color: "from-cyan-500 to-cyan-600" },
    { icon: <ShoppingBag className="w-8 h-8" />, name: "Compra", color: "from-indigo-500 to-indigo-600" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "eLearning", color: "from-teal-500 to-teal-600" },
    { icon: <Box className="w-8 h-8" />, name: "Fabricación", color: "from-emerald-500 to-emerald-600" },
    { icon: <Wrench className="w-8 h-8" />, name: "Studio", color: "from-orange-500 to-orange-600" },
    { icon: <Receipt className="w-8 h-8" />, name: "Punto de venta", color: "from-yellow-500 to-yellow-600" },
    { icon: <Heart className="w-8 h-8" />, name: "CRM", color: "from-red-500 to-red-600" },
    { icon: <UsersIcon className="w-8 h-8" />, name: "Empleados", color: "from-violet-500 to-violet-600" },
    { icon: <Mail className="w-8 h-8" />, name: "Marketing por correo", color: "from-fuchsia-500 to-fuchsia-600" },
    { icon: <Search className="w-8 h-8" />, name: "Reclutamiento", color: "from-lime-500 to-lime-600" },
    { icon: <BarChart3 className="w-8 h-8" />, name: "Ventas", color: "from-amber-500 to-amber-600" },
    { icon: <FileSignature className="w-8 h-8" />, name: "Firma", color: "from-sky-500 to-sky-600" },
    { icon: <CheckSquare className="w-8 h-8" />, name: "Proyecto", color: "from-rose-500 to-rose-600" },
    { icon: <ShoppingCart className="w-8 h-8" />, name: "Comercio electrónico", color: "from-purple-600 to-purple-700" },
    { icon: <Headphones className="w-8 h-8" />, name: "Servicio de asistencia", color: "from-teal-600 to-teal-700" },
    { icon: <Clock className="w-8 h-8" />, name: "Hoja de horas", color: "from-blue-600 to-blue-700" },
    { icon: <DollarSign className="w-8 h-8" />, name: "Gastos", color: "from-green-500 to-green-600" }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Módulos del <span className="text-brand-primary">Plan completo Odoo</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/5"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {module.icon}
              </div>
              <h3 className="text-white font-bold text-sm">{module.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OdooModules;
