// src/api/hooks/useNumberCase.ts

import { useQuery } from '@tanstack/react-query'
import { fetchNumberCaseName } from '@/api/services/numberCaseNameServices'
import { NumberCaseNameType } from '../types/numberCaseName'


export function useNumberCaseName(params: NumberCaseNameType) {
  return useQuery({
    queryKey: ['nameCase', params],
    queryFn: () => fetchNumberCaseName(params),
    enabled: !!params.name // evita ejecutar si no hay nombre
  })
}
