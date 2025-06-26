// api/hooks/useResumenPorSujeto.ts
import { useQuery } from "@tanstack/react-query";
import { getResumenPorSujeto } from "@/api/services/resumeService";

export function useResumenPorSujeto(nombre: string) {
  return useQuery({
    queryKey: ["resumen", nombre],
    queryFn: () => getResumenPorSujeto(nombre),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}
