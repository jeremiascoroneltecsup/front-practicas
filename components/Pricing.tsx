import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 relative">
      {/* Background glow for pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        
        {/* Main Title Box */}
        <div className="flex justify-center mb-12">
            <div className="inline-block relative">
                <div className="absolute inset-0 border-2 border-brand-primary rounded-2xl blur-sm opacity-50"></div>
                <div className="glass-card border-2 border-brand-primary/50 px-12 py-4 rounded-2xl relative shadow-[0_0_30px_rgba(255,69,32,0.3)]">
                    <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-wide drop-shadow-lg">
                        Inversión
                    </h2>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Single Person Plan */}
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-200 uppercase tracking-wider mb-4">UNA PERSONA</h3>
                <div className="w-full relative group transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-1 bg-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-brand-primary rounded-2xl p-6 border-b-4 border-red-700 shadow-xl flex justify-center items-baseline text-white">
                        <span className="text-3xl font-bold mr-2">S/</span>
                        <span className="text-7xl font-extrabold tracking-tighter">300</span>
                        <span className="text-3xl font-bold align-top ml-1">.00</span>
                    </div>
                </div>
            </div>

            {/* Group Plan */}
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-200 uppercase tracking-wider mb-4">PARA GRUPOS DE DOS PERSONAS A MÁS</h3>
                <div className="w-full relative group transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -inset-1 bg-brand-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-brand-primary rounded-2xl p-6 border-b-4 border-red-700 shadow-xl flex justify-center items-baseline text-white">
                        <span className="text-3xl font-bold mr-2">S/</span>
                        <span className="text-7xl font-extrabold tracking-tighter">280</span>
                        <span className="text-3xl font-bold align-top ml-1">.00</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="text-center mb-8">
            <p className="text-lg text-gray-300 mb-4 font-medium">Aceptamos todos los medios de pago:</p>
            <div className="flex justify-center gap-4">
                <div className="h-10 bg-white rounded flex items-center justify-center px-4 shadow-lg"><span className="text-blue-800 font-bold italic text-xl">VISA</span></div>
                <div className="h-10 bg-white rounded flex items-center justify-center px-4 shadow-lg"><div className="flex"><div className="w-6 h-6 rounded-full bg-red-600 opacity-80"></div><div className="w-6 h-6 rounded-full bg-yellow-500 opacity-80 -ml-3"></div></div></div>
                <div className="h-10 bg-[#742284] rounded flex items-center justify-center px-4 text-white font-bold italic shadow-lg">yape</div>
            </div>
        </div>

        {/* Bank Details Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-brand-primary/30 shadow-2xl relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-3xl"></div>
             
             <div className="grid grid-cols-1 md:grid-cols-2">
                 <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                    <div className="mb-2 text-brand-light text-sm uppercase font-bold tracking-wider">Yape</div>
                    <div className="text-3xl font-bold text-white mb-4">942 839 699</div>
                    <div className="text-gray-300">
                        <span className="block text-sm text-brand-light mb-1">A nombre del CEO:</span>
                        <span className="font-semibold text-white text-lg">Alexandr Sánchez Bravo</span>
                    </div>
                 </div>
                 
                 <div className="p-8 space-y-4 bg-black/20">
                    <div>
                        <div className="text-brand-primary font-bold mb-1">Depósito: BCP (Soles)</div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl text-white font-mono tracking-wide">193-2564960-0-85</span>
                            <button className="text-brand-light hover:text-white"><Copy size={14}/></button>
                        </div>
                    </div>
                    <div>
                        <div className="text-brand-light text-sm font-bold mb-1">CCI:</div>
                        <div className="flex items-center gap-2">
                            <span className="text-lg text-gray-300 font-mono">00219300256496008512</span>
                             <button className="text-brand-light hover:text-white"><Copy size={14}/></button>
                        </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-brand-light text-sm">Empresa:</span>
                            <span className="font-bold text-white">FULLSTACK SAC</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="text-brand-light text-sm">RUC:</span>
                            <span className="font-bold text-white">20603443030</span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 flex justify-center">
             <div className="border border-white py-3 px-8 rounded-lg">
                <p className="text-white font-bold text-lg text-center uppercase">
                    Para factura, se aplica el 18% adicional
                </p>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;