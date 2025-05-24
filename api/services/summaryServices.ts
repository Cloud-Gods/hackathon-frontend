import { SummaryType } from '@/api/types/summaryType'


export async function fetchSummary(params: SummaryType) {
  const query = new URLSearchParams(params as unknown as Record<string, string>).toString()
  const res = await fetch(`/api/summary?${query}`)

  if (!res.ok) throw new Error('Error fetching summary')
  return res.json()
}