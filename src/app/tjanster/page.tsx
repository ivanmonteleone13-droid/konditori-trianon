import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Utbud",
  description: `Tårtor, bullar och bakverk hos ${business.name} i Uppsala.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3d2914] to-[#6f4e37] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Utbud</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Vi tillverkar tårtor, bullar, bakverk och färskt bröd på plats i konditoriet. Ring för beställningar.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6">
            {business.services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col gap-4 rounded-2xl border border-[#6f4e37]/10 bg-[#faf7f2] p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-[#3d2914]">{service.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#6f4e37]/70">{service.description}</p>
                  <p className="mt-2 text-xs text-[#6f4e37]/60">{service.note}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 space-y-4 rounded-2xl border border-[#d4a574]/30 bg-[#faf7f2] p-6 text-sm text-[#3d2914]">
            <p>
              <strong>Ring för beställning:</strong> {business.phone}
            </p>
            <p>
              <strong>Webbplats:</strong>{" "}
              <a href={business.websiteUrl!} target="_blank" rel="noopener noreferrer" className="underline">
                trianonuppsala.se
              </a>
            </p>
          </div>
          <div className="mt-10 text-center">
            <a
              href={business.bookingUrl}
              className="inline-flex rounded-full bg-[#6f4e37] px-8 py-4 font-semibold text-white transition hover:bg-[#3d2914]"
            >
              {business.bookingLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
