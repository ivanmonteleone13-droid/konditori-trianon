import type { Metadata } from "next";
import Link from "next/link";
import { business, getFullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Om oss",
  description: `Lär känna ${business.name} — konditori på Svartbäcksgatan 83B, Uppsala.`,
};

export default function AboutPage() {
  const aboutImage = "aboutImage" in business ? business.aboutImage : null;

  return (
    <>
      <section className="bg-gradient-to-br from-[#3d2914] to-[#6f4e37] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Om {business.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">{business.about.headline}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            {aboutImage ? (
              <img
                src={aboutImage}
                alt={`${business.name} — ${getFullAddress()}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : null}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#3d2914]">{business.about.headline}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-[#6f4e37]/80">
              {business.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-[#3d2914]">Vill du veta mer?</h2>
          <p className="mt-4 text-[#6f4e37]/70">Ring {business.phone} eller besök oss på Svartbäcksgatan 83B.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt"
              className="rounded-full bg-[#6f4e37] px-8 py-4 font-semibold text-white transition hover:bg-[#3d2914]"
            >
              Kontakta oss
            </Link>
            <a
              href={business.bookingUrl}
              className="rounded-full border border-[#6f4e37] px-8 py-4 font-semibold text-[#6f4e37] transition hover:bg-white"
            >
              {business.bookingLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
