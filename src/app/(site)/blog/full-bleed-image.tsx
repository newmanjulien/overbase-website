import Image, { type ImageProps } from "next/image";

type FullBleedImageProps = {
  src: string;
  alt: string;
  id?: string;
  caption?: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
} & Pick<ImageProps, "priority" | "quality">;

export function FullBleedImage({
  src,
  alt,
  id,
  caption,
  className,
  width = 1600,
  height = 900,
  sizes = "(min-width: 1024px) 896px, 100vw",
  priority,
  quality,
}: FullBleedImageProps) {
  const imageClassName = ["w-full h-auto rounded-xl scroll-mt-28", className]
    .filter(Boolean)
    .join(" ");
  const shouldBypassOptimization =
    !src.startsWith("/") && !src.startsWith("data:");

  return (
    <div className="mt-18 mb-24">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="mx-auto w-full max-w-4xl px-6">
          <Image
            id={id}
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            quality={quality}
            unoptimized={shouldBypassOptimization}
            className={imageClassName}
          />
          {caption && (
            <p className="mt-6 text-sm text-gray-900 text-center">{caption}</p>
          )}
        </div>
      </div>
    </div>
  );
}
