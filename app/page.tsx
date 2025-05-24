
import React from 'react';
import Link from 'next/link';
import CoverParticles from '@/components/cover-particles';
import TransitionPage from '@/components/transition-page';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#003057] text-white flex flex-col items-center justify-center px-4">
      <TransitionPage />
      <CoverParticles />  
      <div className="absolute inset-0 bg-gradient-to-b from-[#001f2d] to-[#003057] opacity-50"></div>
        
          <h1 className="text-4xl font-bold text-center mb-6">
            Monitoreo de Procesos Judiciales
          </h1>
          <p className="text-lg text-center max-w-xl mb-8">
            Automatiza la consulta, seguimiento y análisis de procesos judiciales con IA Generativa.
          </p>
          <div className="relative inset-0 bg-gradient-to-b from-[#003057] to-[#001f2d] hover:opacity-40">
          <Link
            href="/queries"
            className="bg-[#00B0F0] hover:bg-[#009cd1] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Consulta de Procesos Nacional Unificada
        </Link>
        </div>
        
  
      
    </main>
  );
}
