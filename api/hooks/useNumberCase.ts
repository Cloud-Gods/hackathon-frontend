// src/api/hooks/useNumberCase.ts

import { useQuery } from '@tanstack/react-query'
import { fetchNumberCase } from '@/api/services/numberCaseServices'
import { NumberCaseType } from '../types/numberCase'


export function useNumberCase(params: NumberCaseType) {
  return useQuery({
    queryKey: ['numberCase', params],
    queryFn: () => fetchNumberCase(params),
    enabled: !!params.numero // evita ejecutar si no hay número
  })
}
