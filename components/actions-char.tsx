'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export interface Actuacion {
  actuacion: number;
  clasificacion: 'Alta' | 'Media' | 'Baja' | 'Nula';
  resumen: string;
}

interface Props {
  data: Actuacion[];
}

const clasificacionNumerica = {
  'Alta': 4,
  'Media': 3,
  'Baja': 2,
  'Nula': 1,
};

export default function ActuacionesChart({ data }: Props) {
  const chartData = data.map((item) => ({
    actuacion: item.actuacion.toString(),
    clasificacionValor: clasificacionNumerica[item.clasificacion],
    resumen: item.resumen,
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="actuacion" />
          <YAxis domain={[0, 5]} />
          <Tooltip 
            formatter={(value: number, name: string, props) => [`${value} (${props.payload.resumen})`, 'Clasificación']}
          />
          <Bar dataKey="clasificacionValor" fill="#008BFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
