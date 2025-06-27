'use client';

import { useState } from "react";
import { FaArrowLeft, FaRegListAlt } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ConsultaNombre() {
  const [tipoConsulta, setTipoConsulta] = useState("recientes");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {   
    e.preventDefault();
    if (!nombre.trim()) {
      setError(true);
      return;
    }
    setError(false);
    if (nombre.length > 0 ) {

    localStorage.setItem("name", nombre);
    router.push(`/viewIAActionsName`);
    }
    // Aquí va la lógica de envío
    //alert(`Consulta enviada con nombre: ${nombre} (${tipoConsulta})`);
  };

  return (
    <main className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <Link href="/queries">
          <button className="text-sm text-gray-300 flex items-center gap-2 mb-6 hover:text-white">
            <FaArrowLeft />
            Regresar a opciones de consulta
          </button>
        </Link>

        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <FaRegListAlt className="text-4xl text-white" />
          <h1 className="text-3xl md:text-4xl font-bold">
            Consultar por Nombre o Razón Social
          </h1>
        </div>

        <div className="bg-white text-[#003057] p-6 rounded-2xl shadow-xl flex flex-col items-center gap-6">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div className="bg-[#f4f8fc] border-2 border-[#003057] rounded-xl p-4">
              <label className="flex items-center gap-2 mb-2">
                <input
                  type="radio"
                  name="tipoConsulta"
                  value="recientes"
                  checked={tipoConsulta === "recientes"}
                  onChange={() => setTipoConsulta("recientes")}
                  className="accent-[#003057]"
                />
                Procesos con Actuaciones Recientes (últimos 30 días)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tipoConsulta"
                  value="todos"
                  checked={tipoConsulta === "todos"}
                  onChange={() => setTipoConsulta("todos")}
                  className="accent-[#003057]"
                />
                Todos los Procesos (consulta completa, menos rápida)
              </label>
            </div>

            <div>
              <label className="block font-medium mb-1">
                <span className="text-red-600">*</span> Nombre(s), Apellido o Razón Social
              </label>

              <input
                type="text"
                value={nombre}
                required
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese el nombre o razón social"
                className={`w-full border ${
                  error ? "border-red-600" : "border-gray-300"
                } rounded-md px-4 py-3 text-[#003057] text-sm placeholder-gray-400`}
              />
              <p className="text-sm text-gray-500">
                Consulta con este nombre: BANCO FALABELLA SA
              </p>
              {error && (
                <p className="text-red-600 text-sm font-medium mt-1">
                  Este campo es obligatorio.
                </p>
              )}
            </div>

            <div className="flex gap-4 justify-center mt-2">
              <button
                type="submit"
                className="bg-[#007BFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0000CD] transition"
              >
                CONSULTAR
              </button>
              <button
                type="button"
                onClick={() => {
                  setNombre("");
                  setError(false);
                  setTipoConsulta("recientes");
                }}
                className="bg-white text-[#003057] border border-[#003057] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                NUEVA CONSULTA
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
