
export interface NumberCaseNameType {
  name: string,
  Activos: 'true' | 'false'
  //pagina: number
}

export function getNumberCaseParams(searchParams: URLSearchParams): NumberCaseNameType {
  const name = searchParams.get("name") || "";
  const Activos = (searchParams.get("Activos") === "true") ? 'true' : 'false';
  //const pagina = parseInt(searchParams.get("pagina") || "1", 10);

  return {
    name,
    Activos
    //pagina,
  };
}
