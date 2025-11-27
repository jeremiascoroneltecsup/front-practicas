import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Main Title */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Elige tu Plan y <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">empieza hoy</span>
            </h2>
            <p className="text-gray-400 text-lg">Plan Individual (1 estudiante)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Plan Basic - 1 Año */}
            <div className="relative group h-full">
                <div className="relative bg-[#1a1d2e] border border-gray-800 hover:border-purple-500/50 p-8 rounded-2xl transition-all h-full flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className="text-gray-500 text-xs mb-2">Para 1 estudiante</p>
                            <h3 className="text-2xl font-bold text-white">Plan Basic</h3>
                        </div>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                            Mensual
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-white text-4xl font-black">S/149</span>
                            <span className="text-gray-400 text-lg">/mes</span>
                        </div>
                        <p className="text-gray-500 text-sm">Cobro mensual recurrente</p>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm leading-relaxed">Contenido profesional y actualizado con certificados digitales</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-600 text-lg">×</span>
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">Certificados físicos para las rutas de aprendizaje profesional</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-600 text-lg">×</span>
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">Acceso a las escuelas de Startups, Inglés y liderazgo</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-600 text-lg">×</span>
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">Eventos exclusivos como FULLSTACK Conf</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-gray-600 text-lg">×</span>
                            </div>
                            <span className="text-gray-600 text-sm leading-relaxed">Descarga contenido en la app móvil</span>
                        </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg">
                        Suscríbete a Plan Basic
                    </button>
                </div>
            </div>

            {/* Plan Expert - 2 Años (Featured) */}
            <div className="relative group h-full">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-75"></div>
                <div className="relative bg-[#1a1d2e] p-8 rounded-2xl h-full flex flex-col">
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1.5 rounded-full font-black text-xs uppercase shadow-lg">
                        PRECIO ESPECIAL
                    </div>
                    
                    <div className="flex justify-between items-start mb-6 mt-2">
                        <div>
                            <p className="text-orange-300 text-xs mb-2">Para 1 estudiante</p>
                            <h3 className="text-2xl font-bold text-white">Plan Expert</h3>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
                            Anual
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-gray-500 text-lg line-through">S/890</span>
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-2 py-0.5 rounded-md text-xs font-bold">Ahorras S/221</span>
                        </div>
                        <div className="flex items-baseline gap-1 mb-2">
                            <span className="text-white text-4xl font-black">S/669</span>
                            <span className="text-orange-300 text-lg">/año</span>
                        </div>
                        <p className="text-orange-300 text-sm flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange-500/20 text-[10px]">ℹ</span>
                            Paga a 4 cuotas sin intereses de S/168
                        </p>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm font-medium leading-relaxed">Contenido profesional y actualizado con certificados digitales</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm font-medium leading-relaxed">Certificados físicos para las rutas de aprendizaje profesional</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm font-medium leading-relaxed">Acceso a las escuelas de Startups, Inglés y liderazgo</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm font-medium leading-relaxed">Eventos exclusivos como FULLSTACK Conf</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                            <span className="text-white text-sm font-medium leading-relaxed">Descarga contenido en la app móvil</span>
                        </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-3.5 rounded-xl transition-all shadow-xl">
                        Suscríbete a Plan Expert
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