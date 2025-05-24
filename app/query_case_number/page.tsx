"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaRegListAlt } from "react-icons/fa";
<<<<<<< HEAD
import ConsultaTabla from "@/components/query-table";

// Define la interfaz de 'Parte'
interface Parte {
  tipo: string;
  nombre: string;
}

// Define la interfaz de 'Proceso'
interface Proceso {
  id: string;
  radicado: string;
  fechaRadicacion: string;
  fechaUltimaActuacion: string;
  juzgado: string;
  partes: Parte[];
}
=======
import { useRouter } from "next/navigation"; // 👈 esto es para el router en app/


>>>>>>> 665b2b4421fe9d71461505079d43693e7750981f

export default function QueryCaseNumber() {

  const [numero, setNumero] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const [modoActivo, setModoActivo] = useState(true);
  const [datosDeProcesos, setDatosDeProcesos] = useState<Proceso[]>([]); // Aquí se especifica el tipo 'Proceso[]'
  const [consultaRealizada, setConsultaRealizada] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numero.length !== 23) {
      setMostrarError(true);
      return;
    }

    setMostrarError(false);
<<<<<<< HEAD
    setConsultaRealizada(true);

    // Simulación de resultados: dejar vacío para probar el mensaje
    const datosSimulados: Proceso[] = [
    {
        id: "1",
        radicado: "11001234500020230012345",
        fechaRadicacion: "2023-04-12",
        fechaUltimaActuacion: "2024-10-05",
        juzgado: "Juzgado 10 Civil del Circuito de Bogotá - Cundinamarca",
        partes: [
        { tipo: "Demandante", nombre: "Juan Pérez" },
        { tipo: "Demandado", nombre: "Empresa XYZ S.A.S" },
        ],
    },
    {
        id: "2",
        radicado: "11001234500020220067890",
        fechaRadicacion: "2022-01-22",
        fechaUltimaActuacion: "2023-12-01",
        juzgado: "Juzgado 4 Laboral del Circuito de Medellín - Antioquia",
        partes: [
        { tipo: "Demandante", nombre: "María Rodríguez" },
        { tipo: "Demandado", nombre: "Compañía ABC Ltda." },
        ],
    },
    ];
 // Aquí defines el tipo de datos correctamente

    setDatosDeProcesos(datosSimulados);

    setTimeout(() => {
      const seccion = document.getElementById("resultado-consulta");
      seccion?.scrollIntoView({ behavior: "smooth" });
    }, 200);
=======
    // Aquí puedes redirigir o ejecutar la lógica
    console.log({ numero, modoActivo });
      // Redirigir a la vista con los datos como query string
    router.push(
      `/viewNumberCase?numero=${numero}&soloActivos=${modoActivo}&pagina=1`
    );
>>>>>>> 665b2b4421fe9d71461505079d43693e7750981f
  };
  

  return (
    <main className="min-h-screen bg-[#003057] text-white px-4 py-10 flex flex-col items-center">
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
                maxLength={23}
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ingrese los 23 dígitos del número de Radicación"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-[#003057] text-sm placeholder-gray-400"
              />
              <div className="text-sm text-right text-gray-500">
                {numero.length} / 23
              </div>
              {mostrarError && (
                <p className="text-red-600 text-sm font-medium">
                  Debes ingresar exactamente 23 dígitos.
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
                  onClick={() => {
                    setNumero("");
                    setMostrarError(false);
                    setConsultaRealizada(false);
                    setDatosDeProcesos([]);
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

      {/* Sección de resultados */}
      <div id="resultado-consulta" className="w-full max-w-5xl mt-32 px-4">
        {consultaRealizada && datosDeProcesos.length === 0 && (
          <div className="bg-white text-[#003057] p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-xl font-semibold mb-2">No se encontraron resultados</h2>
            <p className="text-sm text-gray-600">
              Verifica que el número de radicación esté correcto o intenta de nuevo.
            </p>
          </div>
        )}

        {datosDeProcesos.length > 0 && (
            <div>
          <ConsultaTabla procesos={datosDeProcesos} />
          </div>
        )}
      </div>
    </main>
  );
}
