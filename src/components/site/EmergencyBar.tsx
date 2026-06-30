import { Phone, MapPin, Clock } from "lucide-react";
import { HOSPITAL } from "@/lib/hospital-data";

export function EmergencyBar() {
  return (
    <div className="border-y border-border bg-card">
      <div className="container-page grid gap-4 py-5 sm:grid-cols-3">
        <a
          href={`tel:${HOSPITAL.emergency}`}
          className="group flex items-center gap-3 rounded-lg"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emergency/10 text-emergency animate-pulse-ring">
            <Phone className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Emergency 24/7
            </span>
            <span className="block truncate font-display text-base font-bold text-foreground group-hover:text-primary">
              {HOSPITAL.emergency}
            </span>
          </span>
        </a>
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
            <MapPin className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Location
            </span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {HOSPITAL.city}, Pakistan
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-foreground">
            <Clock className="h-5 w-5" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Hours
            </span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {HOSPITAL.hours}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
