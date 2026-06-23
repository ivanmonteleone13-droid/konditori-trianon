import type { Metadata } from "next";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Galleri",
  description: `Bilder från ${business.name} på Svartbäcksgatan, Uppsala.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3d2914] to-[#6f4e37] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">Galleri</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            Riktiga bilder från {business.name} — källa trianonuppsala.se.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.gallery.map((item) => (
              <figure key={item.id} className="overflow-hidden rounded-2xl shadow-md">
                <img src={item.image} alt={item.label} className="aspect-square w-full object-cover" loading="lazy" />
                <figcaption className="bg-[#faf7f2] px-4 py-3 text-center text-sm font-medium text-[#3d2914]">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
