import { NumberCaseType } from '../types/numberCase'
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function fetchNumberCase(params: NumberCaseType) {
  const query = new URLSearchParams(params as unknown as Record<string, string>).toString()

  const res = await fetch(
    `${baseUrl}/Procesos/Consulta/NumeroRadicacion?${query}`
  )

  if (!res.ok) throw new Error('Error al consultar número de radicación')

  return res.json()
}