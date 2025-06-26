export type Proceso = {
  idProceso: number;
  idConexion: number;
  llaveProceso: string;
  fechaProceso: string;
  fechaUltimaActuacion: string;
  despacho: string;
  departamento: string;
  sujetosProcesales: string;
  esPrivado: boolean;
};

export interface PersonaParticipante {
  rol: string;
  nombre: string;
}

export interface ProcesoLocal {
  idProceso: number;
  llaveProceso: string;
  despacho: string;
  departamento: string;
  fechaProceso: string;
  fechaUltimaActuacion: string;
  sujetosProcesales: string;
  cantFilas?: PersonaParticipante[];
}
  // otras