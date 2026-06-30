import { Link } from "@tanstack/react-router";
import { Heart, Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { HOSPITAL } from "@/lib/hospital-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Heart className="h-5 w-5" strokeWidth={2.5} aria-hidden />
            </span>
            <span className="font-display text-lg font-bold">Raheem Surgical Hospital</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A multi-specialty surgical hospital serving Sambrial and Sialkot with compassionate, modern, and affordable medical care.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Departments" },
              { to: "/doctors", label: "Our Doctors" },
              { to: "/appointment", label: "Book Appointment" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{HOSPITAL.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`tel:${HOSPITAL.phone}`} className="hover:text-primary">
                {HOSPITAL.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <a href={`mailto:${HOSPITAL.email}`} className="hover:text-primary break-all">
                {HOSPITAL.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{HOSPITAL.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
            Emergency
          </h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Open 24 hours, every day of the year.
          </p>
          <a
            href={`tel:${HOSPITAL.emergency}`}
            className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-emergency px-4 font-semibold text-emergency-foreground shadow-soft hover:brightness-110"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {HOSPITAL.emergency}
          </a>
          <div className="mt-5 flex gap-2">
            <a
              href={HOSPITAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Facebook className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-background/60">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Raheem Surgical Hospital. All rights reserved.</p>
          <p>Sambrial, Sialkot, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
