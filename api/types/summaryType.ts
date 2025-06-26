export type SummaryType = {
  total_casos: number
  por_despacho: Record<string, number>
  por_departamento: Record<string, number>
  casos_recientes: {
    llaveProceso: string
    fechaUltimaActuacion: string
    despacho: string
    departamento: string
  }[]
}