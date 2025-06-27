'use client';

import { useState } from "react";
import React from "react";
import Link from "next/link"; 
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaRegListAlt } from "react-icons/fa";

export default function QueryCaseNumber() {

  const [numero, setNumero] = useState('');
  const [modoActivo, setModoActivo] = useState(true);
  const [mostrarError, setMostrarError] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (numero.length !== 22 && numero.length !== 0) {
      setMostrarError(true);
      return;
    }
    setMostrarError(false);
    if (numero.length === 22) {
      localStorage.setItem("numero", numero);
      router.push(`/viewNumberCase`);
    }
  };


  return (    
    <main className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <Link href="/queries">
          <button className="text-sm text-gray-300 flex items-center gap-2 mb-6 hover:text-white">
            <FaArrowLeft />
            Regresar a opciones de consulta
          </button>
        </Link>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 mb-4 mt-8">
            <FaRegListAlt className="text-4xl text-white" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Número de Radicación
            </h1>
          </div>
          

          <div className="bg-white text-[#003057] mt-10 p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center gap-6">
            {/* Switch */}
            <div className="flex items-center justify-between w-full">
              <span className="font-medium text-md">
                Procesos con actuaciones activas o inactivas
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={modoActivo}
                  onChange={() => setModoActivo(!modoActivo)}
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#007BFF] transition-colors duration-300"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300 peer-checked:translate-x-full"></div>
              </label>
            </div>

            {/* Input y botones */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                maxLength={22}
                value={numero}
                required
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ingrese los 23 dígitos del número de Radicación"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm placeholder-gray-400"
              />
              <p className="text-sm text-gray-500">
                Consulta con este número de radicado: 5001418900320250000000
              </p>
              <div className="text-sm text-right text-gray-500">
                {numero.length} / 22
              </div>
              {mostrarError && (
                <p className="text-red-600 text-sm font-medium" aria-required="true">
                  Debes ingresar exactamente 22 dígitos.
                </p>
              )}

              <div className="flex gap-4 justify-center mt-2">
                <button
                  type="submit"                 
                  className="bg-[#007BFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0000CD] transition" 
                 
                >
                  CONSULTAR
                </button>
                <button
                  type="button"                  
                  className="bg-white text-[#003057] border border-[#003057] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  NUEVA CONSULTA
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
