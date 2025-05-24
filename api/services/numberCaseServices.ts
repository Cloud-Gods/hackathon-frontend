import { NumberCaseType } from '../types/numberCase'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export async function fetchNumberCase(params: NumberCaseType) {
  const query = new URLSearchParams(params as unknown as Record<string, string>).toString()

  const res = await fetch(
    `${baseUrl}/GET/CaseNumber?${query}`
  )

  if (!res.ok) throw new Error('Error al consultar número de radicación')

  return res.json()
}