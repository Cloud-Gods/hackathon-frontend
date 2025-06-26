import { ResponseActionsIAType } from '@/api/types/actionsIAResponse';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getActuaciones = async (numero: string): Promise<ResponseActionsIAType[]> => {
  const response = await fetch(`${API_URL}/ia/acciones_ia/${numero}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idProceso: numero }),
  });

  if (!response.ok) {
    throw new Error('Error al obtener las actuaciones');
  }

  // Check if the response is empty
  if (response.status === 204) {
    return [];
  }
  console.log('Response from API:', response);

  return await response.json();
};

