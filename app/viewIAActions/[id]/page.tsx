'use client';

import { useActuaciones } from '@/api/hooks/useActions';

export default function Componente() {
  const numero = '198167821';
  const { data: actuaciones, isLoading, isError } = useActuaciones(numero);

console.log('actuaciones', actuaciones);

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error al cargar datos</p>;

  return (
    <ul>
      {actuaciones?.map((a) => (
        <li key={a.actuacion}>{a.resumen}</li>
      ))}
    </ul>
  );
}
