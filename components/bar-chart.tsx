'use client'

import { useState } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useResumenPorSujeto } from '@/api/hooks/useResumenPorSujeto'

interface Props {
  nombre: string
}

export default function ChartResumenProcesos({ nombre }: Props) {
  const { data, isLoading, isError } = useResumenPorSujeto(nombre)
  const [selectedDepartamento, setSelectedDepartamento] = useState('all')
  const [selectedDespacho, setSelectedDespacho] = useState('all')

  const chartData = data
    ? Object.entries(data.por_despacho)
        .map(([despacho, count]) => {
          const departamento = data.casos_recientes.find((c: { despacho: string }) => c.despacho === despacho)?.departamento || 'N/D'
          return { despacho, count, departamento }
        })
        .filter((item) =>
          (selectedDepartamento === 'all' || item.departamento === selectedDepartamento) &&
          (selectedDespacho === 'all' || item.despacho === selectedDespacho)
        )
    : []

  const departamentos = data
    ? Array.from(new Set(Object.keys(data.por_departamento)))
    : []

  const despachos = data
    ? Array.from(new Set(Object.keys(data.por_despacho)))
    : []

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader>
        <CardTitle className="text-[#003057] text-center py-3 font-bold" >Resumen de Procesos</CardTitle>
        <CardDescription>Casos por despacho y departamento</CardDescription>
        <div className="flex flex-wrap gap-4 mt-4">
          <Select value={selectedDepartamento} onValueChange={setSelectedDepartamento}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Departamento" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Departamentos</SelectItem>
              {departamentos.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedDespacho} onValueChange={setSelectedDespacho}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Juzgado/Despacho" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los Juzgados</SelectItem>
              {despachos.map((d) => (
                <SelectItem key={d} value={d}>{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="h-[400px]">
        {isLoading && <p className="text-center text-gray-500">Cargando datos...</p>}
        {isError && <p className="text-center text-red-500">Error al cargar los datos</p>}
        {!isLoading && !chartData.length && <p className="text-center text-gray-500">No hay datos disponibles</p>}

        {chartData.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="despacho"
                angle={-30}
                textAnchor="end"
                tickFormatter={(val) =>
                  typeof val === "string" ? val.slice(0, 15) + (val.length > 15 ? "..." : "") : String(val)
                }
                interval={0}
              />

              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Casos" fill="#003057" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
