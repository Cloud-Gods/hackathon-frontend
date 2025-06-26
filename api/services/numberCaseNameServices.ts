import { NumberCaseNameType } from '../types/numberCaseName';
const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export async function fetchNumberCaseName(params: NumberCaseNameType) {
  const query = new URLSearchParams(params as unknown as Record<string, string>)
  const res = await fetch(
    `${baseUrl}/procesos/by_nombre/${query.get('name')?.toString()}`,
  )

  console.log('respuesta desde fetchNumberCaseName:', res)

  if (!res.ok) throw new Error('Error al consultar número de radicación')
  return await res.json()
}