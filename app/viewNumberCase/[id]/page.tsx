'use client';

import { useParams, useRouter } from "next/navigation";
import { useNumberCase } from "@/api/hooks/useNumberCase";
import { getNumberCaseParams } from "@/api/types/numberCase";
import { Proceso } from "@/api/types/processType";

export default function ViewNumberCase() {
  const params = useParams();
  const router = useRouter();
  const numero = params.id as string;

  const searchParams = new URLSearchParams({ numero });
  const { data, isLoading, error } = useNumberCase(getNumberCaseParams(searchParams));

  if (isLoading) return <div className="p-10 text-center text-gray-600">Cargando...</div>;
  if (error) return <div className="p-10 text-red-600">Ocurrió un error al consultar.</div>;
  if (!data || !data.procesos?.length)
    return <div className="p-10 text-gray-600">No se encontraron procesos.</div>;

  return (
    
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#003057] text-center">
        Resultado de la Consulta
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {data.procesos.map((proceso: Proceso) => (
          <div key={proceso.idProceso} className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#003057] mb-2">
              Radicación: {proceso.llaveProceso}
            </h2>
            <p><span className="font-semibold">Despacho:</span> {proceso.despacho}</p>
            <p><span className="font-semibold">Departamento:</span> {proceso.departamento}</p>
            <p><span className="font-semibold">Sujetos Procesales:</span> {proceso.sujetosProcesales}</p>
            <p><span className="font-semibold">Fecha del Proceso:</span> {new Date(proceso.fechaProceso).toLocaleDateString()}</p>
            <p><span className="font-semibold">Última Actuación:</span> {new Date(proceso.fechaUltimaActuacion).toLocaleDateString()}</p>

            <button
              onClick={() => router.push(`/viewIAActions/${proceso.idProceso}`)}
              className="mt-4 bg-[#008BFF] text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-[#0000CD] transition"
            >
              Ver Actuaciones
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}