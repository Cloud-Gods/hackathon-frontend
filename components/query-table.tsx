'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Proceso } from '@/api/types/processType';

interface ConsultaTablaProps {
  procesos: Proceso[];
}

export default function ConsultaTabla({ procesos }: ConsultaTablaProps) {
  const router = useRouter();

  return (
    <div className="w-full mt-10 overflow-x-auto sm:overflow-visible">
      <table className="w-full table-fixed border-collapse bg-gray-100">
        <thead className="bg-gray-200">
          <tr>
            <th className="w-[10%] px-4 py-2 text-left text-xs font-semibold text-gray-600">Importante</th>
            <th className="w-[25%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Llave del Proceso</th>
            <th className="w-[20%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Fecha del Proceso / Última actuación</th>
            <th className="w-[20%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Despacho / Departamento</th>
            <th className="w-[35%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Sujetos Procesales</th>
          </tr>
        </thead>
        <tbody>
          {procesos.map((proceso) => (
            <tr key={proceso.idProceso} className="border-t hover:bg-gray-200">
              <td className="content-center px-4 py-3 text-sm text-gray-800">
                <button
                  onClick={() => router.push(`/viewIAActions?id=${proceso.idProceso}`)}
                  className="bg-[#008BFF] text-white px-2 py-0.5 text-xs rounded-md font-medium hover:bg-[#0000CD] transition"
                >
                  Detalles
                </button>
              </td>

              <td className="px-4 py-3 text-sm text-blue-500 break-words">
                <span className="hover:underline cursor-pointer">
                  {proceso.llaveProceso}
                </span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-800">
                <div>{proceso.fechaProceso}</div>
                <div className="text-blue-500">{proceso.fechaUltimaActuacion}</div>
              </td>

              <td className="px-4 py-3 text-sm text-gray-800 break-words">
                {proceso.despacho} <br />
                <span className="text-gray-500">{proceso.departamento}</span>
              </td>

              <td className="px-4 py-3 text-sm text-gray-800 break-words">
                {proceso.sujetosProcesales}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
