'use client'

import { ChartBarStacked } from "@/components/bar-chart";
import { ChartLineLinear } from "@/components/line-chart";
import { ChartPieInteractive } from "@/components/pie-chart";





export default function ConsultPage() {
  return (
    <div className="flex items-center justify-center py-28">
      <ChartBarStacked />
      <ChartLineLinear />
      <ChartPieInteractive />
    </div>
  );
}