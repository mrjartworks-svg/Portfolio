/** Canonical site URL for metadata and OG tags. Set in production via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://mraduljain.vercel.app";
}
