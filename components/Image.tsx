interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export default function Image({ src, alt, fill, className }: ImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className || ''}`}
      />
    );
  }

  return <img src={src} alt={alt} className={className} />;
}
