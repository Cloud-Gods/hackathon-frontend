
export interface NumberCaseType {
  numero: string
  SoloActivos: 'true' | 'false'
  pagina: number
}

export function getNumberCaseParams(searchParams: URLSearchParams): NumberCaseType {
  const numero = searchParams.get("numero") || "";
  const SoloActivos = (searchParams.get("SoloActivos") === "true") ? 'true' : 'false';
  const pagina = parseInt(searchParams.get("pagina") || "1", 10);

  return {
    numero,
    SoloActivos,
    pagina,
  };
}
