
'use client';

import { FaSearch, FaIdCard, FaRegListAlt } from "react-icons/fa";
import Link from "next/link";
import React from "react";

import TransitionPage from "@/components/transition-page";
import Particles from "@/components/cover-particles";


export default function ConsultPage() {
  
  return (
    <>
    <TransitionPage />
    <Particles/>

   
    <div className="min-h-screen bg-[#003057] text-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Consulta de Procesos Nacional Unificada
      </h1>
      <p className="text-lg text-gray-200 mb-10 text-center">
        Selecciona una opción de consulta
      </p>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Número de radicación */}
        <Link href="/query_case_number" className="block">
          <div className="cursor-pointer bg-white text-[#003057] rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-blue-100 text-[#007BFF] p-3 rounded-full">
              <FaRegListAlt className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Número de Radicación</h2>
              <p className="text-sm text-gray-600">
                Consulta usando el número completo de radicación.
              </p>
            </div>
          </div>
        </Link>

        {/* Nombre o razón social */}
        <Link href="/query_name" className="block">
          <div className="cursor-pointer bg-white text-[#003057] rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-blue-100 text-[#007BFF] p-3 rounded-full">
              <FaSearch className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Nombre o Razón Social</h2>
              <p className="text-sm text-gray-600">
                Busca procesos por el nombre del demandante o demandado.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Consulta por NIT */}
      <div className="mt-7 w-full max-w-md">
        <Link href="/query_nit" className="block">
          <div className="cursor-pointer bg-white text-[#003057] rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition">
            <div className="bg-blue-100 text-[#007BFF] p-3 rounded-full">
              <FaIdCard className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Consulta por NIT</h2>
              <p className="text-sm text-gray-600">
                Encuentra procesos asociados a un número de identificación tributaria.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
   
    </>
  );
}
