'use client';

import { useState } from "react";
import { FaArrowLeft, FaRegListAlt } from "react-icons/fa";
import Link from "next/link";

export default function ConsultaNombre() {
  const [tipoConsulta, setTipoConsulta] = useState("recientes");
  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [persona, setPersona] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [entidad, setEntidad] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre) {
      setError(true);
      return;
    }
    setError(false);
    // Aquí iría la lógica de consulta
    alert("Consulta enviada");
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
              Consultar por Nombre o Razón Social
            </h1>
          </div>

          <div className="bg-white text-[#003057] mt-10 p-6 rounded-2xl shadow-xl w-full max-w-xl flex flex-col items-center gap-6">
            <div className="w-full">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Sujeto Procesal
              </h2>
              <div className="bg-[#f4f8fc] border-2 border-[#003057] rounded-xl p-4 mb-6">
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
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Tipo de persona</label>
                <select
                  value={persona}
                  onChange={(e) => setPersona(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm"
                >
                  <option value="">Seleccione ...</option>
                  <option value="natural">Natural</option>
                  <option value="juridica">Jurídica</option>
                  {/* Agrega más opciones según necesidad */}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">
                  <span className="text-red-600">*</span> Nombre(s) Apellido o Razón Social
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese el nombre o razón social"
                  className={`w-full border ${error ? "border-red-600" : "border-gray-300"} rounded-md px-4 py-3 text-[#003057] text-sm placeholder-gray-400`}
                />
                {error && (
                  <p className="text-red-600 text-sm font-medium mt-1">
                    Nombre(s) Apellido o Razón Social es requerido.
                  </p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Departamento</label>
                <select
                  value={departamento}
                  onChange={(e) => setDepartamento(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm"
                >
                  <option value="">Seleccione ...</option>
                  <option value="antioquia">Antioquia</option>
                  <option value="cundinamarca">Cundinamarca</option>
                  {/* Agrega más opciones según necesidad */}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Ciudad</label>
                <select
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm"
                >
                  <option value="">Seleccione ...</option>
                  {/* Opciones de ciudad */}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Entidad</label>
                <select
                  value={entidad}
                  onChange={(e) => setEntidad(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm"
                >
                  <option value="">Seleccione ...</option>
                  {/* Opciones de entidad */}
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Especialidad</label>
                <select
                  value={especialidad}
                  onChange={(e) => setEspecialidad(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm"
                >
                  <option value="">Seleccione ...</option>
                  {/* Opciones de especialidad */}
                </select>
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
                    setDepartamento("");
                    setCiudad("");
                    setEntidad("");
                    setEspecialidad("");
                    setError(false);
                  }}
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
