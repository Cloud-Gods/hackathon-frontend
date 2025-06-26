// api/services/resumenService.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getResumenPorSujeto = async (nombre: string) => {
  const response = await fetch(`${API_URL}/resumenes/sujeto/${nombre}`);
  if (!response.ok) {
    throw new Error("Error al obtener resumen del sujeto");
  }
  return await response.json();
};
