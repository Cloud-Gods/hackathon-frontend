import { ResponseActionsIAType } from '@/api/types/actionsIAResponse';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getActuaciones = async (numero: string): Promise<ResponseActionsIAType[]> => {
  const response = await fetch(`${API_URL}/GET/ActuacionesProcess?numero=${numero}`);

  console.log('Fetching actuaciones for numero:', response);

  if (!response.ok) {
    throw new Error('Error al obtener las actuaciones');
  }

  return response.json();
};
