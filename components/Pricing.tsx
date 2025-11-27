import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background glow for pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Main Title */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Elige tu Plan y <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">empieza hoy</span>
            </h2>
            <p className="text-brand-light text-lg">Plan Individual (1 estudiante)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            {/* 1 Year Plan */}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-500/30 p-8 rounded-3xl hover:border-purple-500/60 transition-all">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-gray-400 text-sm mb-1">Para 1 estudiante</p>
                            <h3 className="text-2xl font-black text-white">1 Año</h3>
                        </div>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Mensual
                        </div>
                    </div>
                    
                    <div className="mb-8">
                        <div className="flex items-baseline gap-2">
                            <span className="text-gray-400 text-xl">S/</span>
                            <span className="text-6xl font-black text-white">149</span>
                            <span className="text-gray-400">/mes</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2">Cobro mensual recurrente</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-300 text-sm">Contenido profesional y actualizado con certificados digitales</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">✕</span>
                            </div>
                            <span className="text-gray-500 text-sm">Certificados físicos para las rutas de aprendizaje profesional</span>
                        </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg">
                        Suscríbete a Plan Basic
                    </button>
                </div>
            </div>

            {/* 2 Years Plan - Featured */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-950 to-emerald-950 border-2 border-green-400 p-8 rounded-3xl">
                    <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full font-black text-xs uppercase shadow-lg">
                        PRECIO ESPECIAL
                    </div>
                    
                    <div className="flex justify-between items-start mb-6 mt-4">
                        <div>
                            <p className="text-green-300 text-sm mb-1">Para 1 estudiante</p>
                            <h3 className="text-2xl font-black text-white">2 Años</h3>
                        </div>
                        <div className="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                            Anual
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-gray-400 text-xl line-through">S/669</span>
                            <span className="bg-green-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">Ahorras S/221</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-green-400 text-xl">S/</span>
                            <span className="text-6xl font-black text-white">899</span>
                            <span className="text-green-300">/año</span>
                        </div>
                        <p className="text-green-300 text-sm mt-2">Paga a 4 cuotas sin intereses de S/168</p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-200 text-sm font-medium">Contenido profesional y actualizado con certificados digitales</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-200 text-sm font-medium">Certificados físicos para las rutas de aprendizaje profesional</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-3 h-3 text-green-400" />
                            </div>
                            <span className="text-gray-200 text-sm font-medium">Eventos exclusivos como Platzi Conf</span>
                        </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-green-400 to-emerald-400 hover:from-green-500 hover:to-emerald-500 text-gray-900 font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl">
                        Suscríbete a Plan Expert Duo
                    </button>
                </div>
            </div>
        </div>

        {/* Team Plans Section */}
        <div className="text-center mb-12 mt-20">
            <h3 className="text-3xl font-bold text-white mb-8">
              Plan Team y <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Plan para empresas</span>
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                    ¡CLIC AQUÍ!
                </button>
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                    ¡MÁS INFORMACIÓN!
                </button>
            </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-16">
            <div className="flex justify-center items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                    <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                        <span className="text-blue-800 font-bold italic text-2xl">VISA</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                        <div className="flex">
                            <div className="w-7 h-7 rounded-full bg-red-600 opacity-80"></div>
                            <div className="w-7 h-7 rounded-full bg-orange-400 opacity-80 -ml-3"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-12 bg-white rounded-lg flex items-center justify-center px-6 shadow-lg">
                        <span className="text-blue-700 font-bold text-xl">AMERICAN EXPRESS</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-12 bg-orange-500 rounded-lg flex items-center justify-center px-6 shadow-lg">
                        <span className="text-white font-bold text-xl">PayPal</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-12 bg-purple-600 rounded-lg flex items-center justify-center px-6 shadow-lg">
                        <span className="text-white font-bold text-xl">Diners Club</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;