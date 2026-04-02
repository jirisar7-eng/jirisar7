import React from 'react';

export default function SynthesisHome() {
  return (
    <main className="min-h-screen bg-[#300a24] p-6 text-white font-sans flex flex-col gap-6">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-[#e95420] text-2xl font-black tracking-tighter">SYNTHESIS</h1>
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center animate-pulse">📡</div>
      </header>

      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10">
        <h2 className="text-3xl font-bold mb-2">Chytrý Jídelníček</h2>
        <p className="text-white/40 text-sm">Systém AISS-OS v.2026 je online.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#e95420] p-6 rounded-[2rem] shadow-lg shadow-[#e95420]/20">
          <span className="text-[10px] font-bold uppercase">Status</span>
          <p className="text-xl font-black">AKTIVNÍ</p>
        </div>
        <div className="bg-[#772953] p-6 rounded-[2rem] shadow-lg shadow-[#772953]/20">
          <span className="text-[10px] font-bold uppercase">Nutri-Score</span>
          <p className="text-xl font-black">A+</p>
        </div>
      </div>
    </main>
  );
}
