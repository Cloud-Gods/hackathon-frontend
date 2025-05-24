"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Parte {
  tipo: string;
  nombre: string;
}

interface Proceso {
  id: string;
  radicado: string;
  fechaRadicacion: string;
  fechaUltimaActuacion: string;
  juzgado: string;
  partes: Parte[];
}

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
            <th className="w-[25%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Número de Radicación</th>
            <th className="w-[20%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Fecha de Radicación y última actuación</th>
            <th className="w-[20%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Despacho y Departamento</th>
            <th className="w-[35%] px-4 py-2 text-left text-xs font-semibold text-gray-600 break-words">Sujetos Procesales</th>
          </tr>
        </thead>
        <tbody>
          {procesos.map((proceso) => (
            <tr key={proceso.id} className="border-t hover:bg-gray-200">
              <td className="content-center px-4 py-3 text-sm text-gray-800">
                <button
                  type="submit"
                  onClick={() => router.push('/viewIAActions')}
                  className="bg-[#008BFF] text-white px-2 py-0.5 text-xs rounded-md font-medium hover:bg-[#0000CD] transition"
                >
                  Detalles
                </button>
              </td>
              
              <td className="px-4 py-3 text-sm text-blue-500 break-words">
                <a href="#" className="hover:underline">{proceso.radicado}</a>
              </td>
              <td className="px-4 py-3 text-sm text-gray-800">
                <div>{proceso.fechaRadicacion}</div>
                <div className="text-blue-500">
                  <a href="#" className="hover:underline">{proceso.fechaUltimaActuacion}</a>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 break-words">
                {proceso.juzgado}
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 space-y-1 break-words">
                {proceso.partes.map((parte, idx) => (
                  <div key={idx}>
                    <strong>{parte.tipo}:</strong> {parte.nombre}
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
