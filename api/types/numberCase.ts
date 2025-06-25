
export interface NumberCaseType {
  numero: string,
  Activos: 'true' | 'false'
  //pagina: number
}

export function getNumberCaseParams(searchParams: URLSearchParams): NumberCaseType {
  const numero = searchParams.get("numero") || "";
  const Activos = (searchParams.get("Activos") === "true") ? 'true' : 'false';
  //const pagina = parseInt(searchParams.get("pagina") || "1", 10);

  return {
    numero,
    Activos
    //pagina,
  };
}
