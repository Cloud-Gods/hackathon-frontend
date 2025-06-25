import Image from 'next/image';

type NavbarImageIconProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function NavbarImageIcon({ src, alt, size = 25 }: NavbarImageIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
      unoptimized // importante si estás usando export estático
    />
  );
}
