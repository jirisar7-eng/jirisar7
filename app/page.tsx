import React from 'react';

export default function SynthesisHome() {
  return (
    <div className="min-h-screen bg-ubuntu-dark p-6 text-white flex flex-col gap-6">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-apple border border-white/10 shadow-2xl">
        <h1 className="text-ubuntu-orange text-3xl font-black tracking-tighter">SYNTHESIS</h1>
        <p className="text-white/60 text-sm mt-2">AISS-OS v.2026: UI RECONSTRUCTED</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-ubuntu-orange/20 border border-ubuntu-orange/30 p-6 rounded-[2rem]">
          <p className="text-[10px] uppercase font-bold text-ubuntu-orange">Status</p>
          <p className="text-xl font-black">OPRAVENO</p>
        </div>
        <div className="bg-ubuntu-aubergine/40 border border-ubuntu-aubergine/30 p-6 rounded-[2rem]">
          <p className="text-[10px] uppercase font-bold text-pink-400">Nutri-Score</p>
          <p className="text-xl font-black">A+</p>
        </div>
      </div>
    </div>
  );
}
