import { NumberCaseType } from '../types/numberCase'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export async function fetchNumberCase(params: NumberCaseType) {
  const query = new URLSearchParams(params as unknown as Record<string, string>)
  const res = await fetch(
    `${baseUrl}/procesos/by_llaveProceso/${query.get('numero')?.toString()}`,
  )

  if (!res.ok) throw new Error('Error al consultar número de radicación')
  return await res.json()
}