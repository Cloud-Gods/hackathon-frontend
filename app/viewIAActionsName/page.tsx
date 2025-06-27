"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useNumberCaseName } from "@/api/hooks/useNumberCaseName";
import { getNumberCaseParams } from "@/api/types/numberCaseName";
import { ProcesoLocal } from "@/api/types/processType";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ViewNumberCase() {
  const router = useRouter();

  const [numero, setNumero] = useState("");
  const [searchParams, setSearchParams] = useState<URLSearchParams | null>(
    null
  );

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) {
      setNumero(stored);
      setSearchParams(new URLSearchParams({ numero: stored }));
    }
  }, []);

  const { data, isLoading, error } = useNumberCaseName(
    searchParams
      ? getNumberCaseParams(searchParams)
      : { name: "", Activos: "false" }
  );

  if (!numero) {
    return <div className="p-10 text-gray-500">Esperando parámetro...</div>;
  }

  if (isLoading)
    return <div className="p-10 text-center text-gray-600">Cargando...</div>;
  if (error)
    return (
      <div className="p-10 text-red-600">Ocurrió un error al consultar.</div>
    );
  if (!data || !data.length)
    return (
      <div className="p-10 text-gray-600">No se encontraron procesos.</div>
    );

  return (
    <main className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        Resultado de la Consulta
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {data.map((proceso: ProcesoLocal) => (
          <Card
            key={proceso.idProceso}
            className="border border-gray-200 shadow-sm"
          >
            <CardHeader>
              <CardTitle className="text-[#003057]">
                Radicación: {proceso.llaveProceso}
              </CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold">Despacho:</span>{" "}
                {proceso.despacho}
              </p>
              <p>
                <span className="font-semibold">Departamento:</span>{" "}
                {proceso.departamento}
              </p>
              <p>
                <span className="font-semibold">Sujetos Procesales:</span>{" "}
                {proceso.sujetosProcesales}
              </p>
              <p>
                <span className="font-semibold">Fecha del Proceso:</span>{" "}
                {new Date(proceso.fechaProceso).toLocaleDateString()}
              </p>
              <p>
                <span className="font-semibold">Última Actuación:</span>{" "}
                {new Date(proceso.fechaUltimaActuacion).toLocaleDateString()}
              </p>
            </CardContent>

            <CardFooter>
              <Button
                variant="default"
                className="bg-[#008BFF] hover:bg-[#0000CD]"
                onClick={() => {
                  localStorage.setItem("llaveProceso", proceso.llaveProceso);
                  router.push("/viewIAActions");
                }}
              >
                Ver Actuaciones
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
