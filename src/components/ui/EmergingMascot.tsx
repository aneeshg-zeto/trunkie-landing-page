'use client';

import Image from 'next/image';

interface EmergingMascotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  emerge?: number;
  className?: string;
}

export function EmergingMascot({
  src,
  alt,
  width,
  height,
  emerge = 44,
  className = 'absolute bottom-0',
}: EmergingMascotProps) {
  return (
    <div
      className={`pointer-events-none ${className}`}
      style={{transform: `translateY(${emerge}%)`}}
    >
      <Image src={src} alt={alt} width={width} height={height} style={{objectFit: 'contain'}} />
    </div>
  );
}
