import { createFileRoute } from "@tanstack/react-router";
import receptionImg from "@/assets/reception.jpg";
import otImg from "@/assets/operating-theater.jpg";
import icuImg from "@/assets/icu.jpg";
import physioImg from "@/assets/physiotherapy.jpg";
import labImg from "@/assets/laboratory.jpg";
import heroImg from "@/assets/hero-hospital.jpg";

const PHOTOS = [
  { src: heroImg, alt: "Hospital exterior", label: "Hospital Building" },
  { src: receptionImg, alt: "Hospital reception", label: "Reception & Lobby" },
  { src: otImg, alt: "Operating theatre", label: "Operation Theatre" },
  { src: icuImg, alt: "ICU room", label: "Intensive Care Unit" },
  { src: physioImg, alt: "Physiotherapy treatment", label: "Physiotherapy" },
  { src: labImg, alt: "Laboratory", label: "Laboratory" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Raheem Surgical Hospital" },
      {
        name: "description",
        content: "Photos of Raheem Surgical Hospital — operation theatre, ICU, reception, physiotherapy and laboratory.",
      },
      { property: "og:title", content: "Gallery" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container-page py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Gallery
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
              Inside Raheem Surgical Hospital
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A glimpse of our facility — wards, operation theatres, ICU, physiotherapy wing, lab and more.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure
              key={p.label}
              className={`group overflow-hidden rounded-2xl border border-border bg-card ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden bg-muted ${i === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 font-display font-semibold">{p.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
