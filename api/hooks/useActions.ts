// src/api/hooks/useActuaciones.ts

import { useQuery } from '@tanstack/react-query';
import { getActuaciones } from '@/api/services/actionServices';
import { ResponseActionsIAType } from '@/api/types/actionsIAResponse';

export function useActuaciones(params: string) {    
  return useQuery<ResponseActionsIAType[]>({
    queryKey: ['actuaciones', params],
    queryFn: () => getActuaciones(params)
  });
}
