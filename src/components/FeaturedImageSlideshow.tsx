"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function FeaturedImageSlideshow({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-out-soft ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}
    </>
  );
}
