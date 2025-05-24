import { useQuery } from '@tanstack/react-query'
import { fetchSummary } from '@/api/services/summaryServices'
import { SummaryType } from '@/api/types/summaryType'

export function useSummary(params: SummaryType) {
  return useQuery({
    queryKey: ['summary', params],
    queryFn: () => fetchSummary(params),
    enabled: !!params // evita fetch en undefined
  })
}