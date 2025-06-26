"use client";

import ChartResumenProcesos from "@/components/bar-chart";
import { useParams } from "next/dist/client/components/navigation";

export default function ConsultPage() {
  const params = useParams();
  const name = params.name as string;
  return (
    <div className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-white text-center">
        Informes de los Procesos Judiciales
      </h1>
      <ChartResumenProcesos nombre={name} />      
    </div>
  );
}
