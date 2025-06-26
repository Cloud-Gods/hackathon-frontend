'use client'

import ChartResumenProcesos from "@/components/bar-chart";
import { ChartLineLinear } from "@/components/line-chart";
import { ChartPieInteractive } from "@/components/pie-chart";

export default function ConsultPage() {
  return (
    <div className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6  text-white text-center">
        Informes de los Procesos Judiciales
      </h1>
      <ChartResumenProcesos nombre="fala" />
      <div className="my-8">
      <ChartLineLinear />
      </div>
      <ChartPieInteractive />
    </div>
  );
}