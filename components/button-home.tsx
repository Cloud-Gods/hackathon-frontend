'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ButtonHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="flex items-center gap-2 bg-white text-[#003057] px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
    >
      <Image
        src="cloudgods-logo.jpeg" // con slash al inicio
        alt="Inicio"
        width={36}
        height={36}
        unoptimized // necesario si usas output: 'export'
      />
      <span className="font-medium">Inicio</span>
    </button>
  );
}
