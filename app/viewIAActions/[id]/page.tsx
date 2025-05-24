'use client';

import { useParams } from "next/navigation";
import { useActuaciones } from "@/api/hooks/useActions";

const clasificacionTexto: Record<number, string> = {
  4: 'Alta',
  3: 'Media',
  2: 'Baja',
  1: 'Nula',
};

const clasificacionColor: Record<number, string> = {
  4: 'bg-red-500',
  3: 'bg-yellow-500',
  2: 'bg-blue-400',
  1: 'bg-gray-400',
};

export default function Componente() {
  const params = useParams();
  const idProceso = params.id as string;

  const { data: actuaciones, isLoading, isError } = useActuaciones(idProceso);

  const actuacionesOrdenadas = actuaciones
    ? [...actuaciones].sort((a, b) => Number(b.clasificacion) - Number(a.clasificacion))
    : [];

  return (
    <main className="min-h-screen bg-[#003057] text-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Actuaciones del Proceso</h1>

      {isLoading && <p className="text-lg">Cargando...</p>}
      {isError && <p className="text-red-400">Error al cargar los datos</p>}

      {actuacionesOrdenadas.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {actuacionesOrdenadas.map((a) => {
            const clasificacionNum = Number(a.clasificacion);
            return (
              <li
                key={a.actuacion}
                className={`p-4 rounded-xl shadow-lg text-[#003057] bg-white border-l-8 ${clasificacionColor[clasificacionNum]}`}
              >
                <h2 className="font-bold text-lg mb-2">
                  Actuación #{a.actuacion}
                </h2>
                <p className="mb-2">{a.resumen}</p>
                <p className="font-semibold">
                  Clasificación: {clasificacionTexto[clasificacionNum]}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        !isLoading && <p className="text-lg mt-4">No hay actuaciones para este radicado.</p>
      )}
    </main>
  );
}
