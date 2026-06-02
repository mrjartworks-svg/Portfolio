import { cn } from "@/lib/utils";
import Image from "next/image";

interface AboutPortraitSignature {
  light: string;
  dark: string;
  alt?: string;
}

interface AboutPortraitProps {
  src?: string;
  alt?: string;
  signature?: AboutPortraitSignature;
  className?: string;
}

export function AboutPortrait({
  src,
  alt = "Mradul Jain",
  signature,
  className,
}: AboutPortraitProps) {
  const signatureAlt = signature?.alt ?? "Signature";

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <figure
        className={cn(
          "relative w-full overflow-hidden rounded-md border border-[color-mix(in_srgb,var(--text)_8%,transparent)] bg-[var(--bg-secondary)] shadow-[0_1px_3px_rgba(17,17,17,0.04)]"
        )}
      >
        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          ) : (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6"
              aria-hidden
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--text)_10%,transparent)] bg-[var(--bg)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[var(--text-muted)]"
                >
                  <circle
                    cx="12"
                    cy="9"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  />
                  <path
                    d="M5 19c0-2.8 3.1-5 7-5s7 2.2 7 5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-center text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                Portrait
              </span>
            </div>
          )}
        </div>
        {!src && (
          <figcaption className="sr-only">Portrait placeholder — add your photo</figcaption>
        )}
      </figure>

      {signature && (
        <div className="mt-4 flex justify-center px-2 lg:justify-start">
          <Image
            src={signature.light}
            alt={signatureAlt}
            width={506}
            height={172}
            unoptimized
            className="h-auto w-full max-w-[min(100%,14rem)] dark:hidden"
            priority
          />
          <Image
            src={signature.dark}
            alt={signatureAlt}
            width={506}
            height={172}
            unoptimized
            className="hidden h-auto w-full max-w-[min(100%,14rem)] dark:block"
            priority
          />
        </div>
      )}
    </div>
  );
}
