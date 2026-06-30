import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Heart } from "lucide-react";
import { HOSPITAL } from "@/lib/hospital-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      {/* Top emergency strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-page flex items-center justify-between gap-4 py-1.5 text-xs sm:text-sm">
          <div className="flex min-w-0 items-center gap-2">
            <span className="relative inline-flex h-2 w-2 shrink-0 rounded-full bg-accent animate-pulse-ring" />
            <span className="truncate font-medium">24/7 Emergency Open</span>
          </div>
          <a
            href={`tel:${HOSPITAL.emergency}`}
            className="flex shrink-0 items-center gap-1.5 font-semibold hover:underline"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Emergency:</span>
            <span>{HOSPITAL.emergency}</span>
          </a>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3 group">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
            <Heart className="h-6 w-6" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight text-foreground sm:text-lg">
              Raheem Surgical Hospital
            </span>
            <span className="block truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
              {HOSPITAL.city}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary [&.active]:bg-primary-soft [&.active]:text-primary"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            className="ml-2 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated hover:brightness-105"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border bg-background lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-primary-soft hover:text-primary [&.active]:bg-primary-soft [&.active]:text-primary"
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-5 text-base font-semibold text-accent-foreground shadow-soft"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
