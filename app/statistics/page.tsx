"use client";

import { useEffect, useState } from "react";
import ChartResumenProcesos from "@/components/bar-chart";

export default function ConsultPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("nameStatistics");
    if (storedName) setName(storedName);
  }, []);

  return (
    <div className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Informes de los Procesos Judiciales
      </h1>
      {/* Solo renderizar cuando name ya esté disponible */}
      {name && <ChartResumenProcesos nombre={name} />}
    </div>
  );
}

