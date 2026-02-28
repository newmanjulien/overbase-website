import type { ComponentPropsWithoutRef } from "react";

type FullBleedImageProps = {
  src: string;
  alt: string;
  id?: string;
  caption?: string;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"img">, "src" | "alt">;

export function FullBleedImage({
  src,
  alt,
  id,
  caption,
  className,
  ...imgProps
}: FullBleedImageProps) {
  const imageClassName = ["w-full h-auto rounded-xl scroll-mt-28", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="mt-18 mb-24">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="mx-auto w-full max-w-4xl px-6">
          <img
            id={id}
            src={src}
            alt={alt}
            className={imageClassName}
            {...imgProps}
          />
          {caption && (
            <p className="mt-6 text-sm text-gray-900 text-center">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
