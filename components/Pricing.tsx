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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {/* 1 Year Plan */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className="bg-purple-600 text-white text-center py-3 rounded-2xl mb-6 font-bold text-lg">
                    1 Año
                </div>
                <div className="text-center mb-6">
                    <div className="text-5xl font-black text-white mb-2">USD 190</div>
                    <p className="text-purple-400 font-bold uppercase tracking-wider text-sm">ÚNICO PAGO</p>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg">
                    ¡INSCRÍBETE YA!
                </button>
            </div>

            {/* 2 Years Plan - Featured */}
            <div className="glass-card p-8 rounded-3xl border-2 border-purple-500 hover:border-purple-400 transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-yellow-400 text-purple-900 px-4 py-1 font-black text-xs rounded-bl-2xl">
                    OFERTA LIMITADA
                </div>
                <div className="bg-purple-600 text-white text-center py-3 rounded-2xl mb-6 font-bold text-lg">
                    2 Años
                </div>
                <div className="text-center mb-6">
                    <div className="bg-yellow-400 text-purple-900 inline-block px-6 py-2 rounded-xl mb-3">
                        <span className="text-2xl font-black">¡Aprovecha el 40% de descuento!</span>
                    </div>
                    <div className="bg-red-600 text-white inline-block px-6 py-2 rounded-xl mb-3">
                        <span className="text-xl font-bold">Paga solo USD 220</span>
                    </div>
                    <div className="text-purple-400 font-bold text-lg mb-2">¡Ahorra USD 147!</div>
                    <div className="text-gray-400 line-through text-sm">Valor real USD 367</div>
                    <p className="text-purple-400 font-bold uppercase tracking-wider text-sm mt-2">ÚNICO PAGO</p>
                    <p className="text-yellow-400 font-bold text-sm italic mt-2">Oferta exclusiva por tiempo limitado</p>
                </div>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-2xl transition-all transform hover:scale-105 shadow-lg">
                    ¡INSCRÍBETE YA!
                </button>
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