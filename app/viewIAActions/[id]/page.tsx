"use client"

import { useParams } from "next/navigation"
import { useActuaciones } from "@/api/hooks/useActions"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const clasificacionColor: Record<string, string> = {
  Alta: "border-red-500",
  Media: "border-yellow-500",
  Baja: "border-blue-400",
  Nula: "border-gray-400",
}

export default function Componente() {
  const params = useParams()
  const llaveProceso = params.id as string

  const { data: actuaciones, isLoading, isError } = useActuaciones(llaveProceso)

  const actuacionesOrdenadas = actuaciones
    ? [...actuaciones].sort((a, b) => {
        const orden: Record<string, number> = {
          Alta: 4,
          Media: 3,
          Baja: 2,
          Nula: 1,
        }
        return orden[b.clasificacion] - orden[a.clasificacion]
      })
    : []

  return (
    <main className="min-h-screen bg-[#003057] text-white px-4 py-28 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Actuaciones del Proceso</h1>

      {isLoading && <p className="text-lg">Cargando...</p>}
      {isError && <p className="text-red-400">Error al cargar los datos</p>}

      {actuacionesOrdenadas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {actuacionesOrdenadas.map((a) => (
            <Card
              key={a.actuacion}
              className={`text-[#003057] border-l-8 ${clasificacionColor[a.clasificacion] || "border-gray-300"}`}
            >
              <CardHeader>
                <CardTitle>Actuación #{a.actuacion}</CardTitle>
                <CardDescription className="text-sm">
                  Clasificación: <strong>{a.clasificacion}</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{a.resumen}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        !isLoading && <p className="text-lg mt-4">No hay actuaciones para este radicado.</p>
      )}
    </main>
  )
}
