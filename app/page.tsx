
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
        
          <h1 className="font-bold text-center mb-6 text-sm sm:text-2xl md:text-4xl">
            Monitoreo de Procesos Judiciales
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-8 px-4">
            Automatiza la consulta, seguimiento y análisis de procesos judiciales con IA Generativa.
          </p>
          <div className="relative inset-0 bg-gradient-to-b from-[#003057] to-[#001f2d] hover:opacity-40">
          <Link
            href="/queries"
            className="bg-[#00B0F0] hover:bg-[#009cd1] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-colors w-full sm:w-auto text-center block"
          >
            Consulta de Procesos Nacional Unificada
          </Link>

        </div>
        
  
      
    </main>
  );
}
