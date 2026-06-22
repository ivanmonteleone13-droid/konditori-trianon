/** Production URL — update after first Vercel deploy if the slug differs. */
export const PRODUCTION_URL = "https://business-2-skotjanst.vercel.app";

const DEV_URL = "http://localhost:3002";

/** Resolves the canonical site URL at build/runtime (Vercel-aware). */
export function getSiteUrl(): string {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_URL;
  }
  return DEV_URL;
}
