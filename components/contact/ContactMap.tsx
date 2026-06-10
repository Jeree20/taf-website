import Link from "next/link";
import { MapPin, Navigation, Clock, Bus } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

const DIRECTIONS = [
  {
    icon: Bus,
    title: "By Matatu from CBD",
    steps: [
      "Take Route 58 or 60 from Archives bus stop in Nairobi CBD",
      "Alight at Kayole Stage on Kangundo Road",
      "Walk approximately 10 minutes into Kayole Soweto",
      "Look for the Home of Transformation signage",
    ],
  },
  {
    icon: Navigation,
    title: "By Boda Boda or Car",
    steps: [
      "Head east on Kangundo Road from the city centre",
      "Turn into Kayole Soweto at the main junction",
      "GPS coordinates: -1.23931, 36.81621",
      "The centre is well-known locally — ask any resident for TAF",
    ],
  },
];

export function ContactMap() {
  return (
    <section
      className="bg-white py-20 lg:py-24"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          <FadeUp>
            <p className="text-xs font-semibold tracking-widest uppercase text-maroon mb-3">
              Find Us
            </p>
            <h2
              id="location-heading"
              className="font-display font-black text-maroon-deep text-4xl sm:text-5xl leading-tight mb-6"
            >
              Visit the{" "}
              <em className="text-sky-dark not-italic">
                #HomeOfTransformation
              </em>
            </h2>

            {/* Address card */}
            <address className="not-italic bg-cream border border-cream-dark rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-10 h-10 bg-maroon rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-white" aria-hidden />
                </div>
                <div>
                  <p className="font-display font-bold text-maroon-deep text-lg">Tumaini African Foundation</p>
                  <p className="text-neutral-600 text-sm leading-relaxed mt-1">
                    Kayole Soweto<br />
                    Nairobi, Kenya · 1242 00100<br />
                    <span className="text-neutral-400 text-xs">GPS: -1.23931, 36.81621</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pb-5 mb-5 border-b border-cream-dark">
                <div className="w-10 h-10 bg-gold-taf/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-gold-dark" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-maroon-deep text-sm mb-1">Opening Hours</p>
                  <dl className="text-sm text-neutral-600 space-y-0.5">
                    <div className="flex gap-4">
                      <dt className="font-medium text-neutral-700 w-32 flex-shrink-0">Monday – Friday</dt>
                      <dd>8:00am – 5:00pm</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium text-neutral-700 w-32 flex-shrink-0">Saturday</dt>
                      <dd>9:00am – 1:00pm</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="font-medium text-neutral-700 w-32 flex-shrink-0">Sunday</dt>
                      <dd className="text-neutral-400">Closed</dd>
                    </div>
                  </dl>
                  <p className="text-neutral-400 text-xs mt-2">All times East Africa Time (EAT · UTC+3)</p>
                </div>
              </div>

              <Link
                href="https://maps.google.com/?q=-1.23931,36.81621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sky-taf text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-sky-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-taf focus-visible:ring-offset-2"
                aria-label="Open TAF location in Google Maps — opens in new tab"
              >
                <Navigation size={15} aria-hidden />
                Open in Google Maps
              </Link>
            </address>

            {/* Directions */}
            <div className="flex flex-col gap-4">
              {DIRECTIONS.map(({ icon: Icon, title, steps }) => (
                <div key={title} className="bg-maroon-deep rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={18} className="text-gold-taf" aria-hidden />
                    <h3 className="font-display font-bold text-white text-base">{title}</h3>
                  </div>
                  <ol className="flex flex-col gap-2" aria-label={`Directions: ${title}`}>
                    {steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/60 font-light">
                        <span className="font-display font-black text-gold-taf/60 text-sm w-4 flex-shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Map embed */}
          <FadeUp delay={150}>
            <div className="rounded-3xl overflow-hidden border border-cream-dark shadow-lg h-full min-h-[500px] flex flex-col">
              {/* Map header */}
              <div className="bg-maroon-deep px-5 py-4 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gold-taf animate-pulse-slow" aria-hidden />
                <p className="text-white text-sm font-semibold">Kayole Soweto, Nairobi</p>
                <p className="text-white/40 text-xs ml-auto">Home of Transformation</p>
              </div>

              {/* Embedded OpenStreetMap — no API key required */}
              <div className="flex-1 relative bg-sky-pale">
                <iframe
                  title="Tumaini African Foundation location — Kayole Soweto, Nairobi"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.7962%2C-1.2493%2C36.8362%2C-1.2293&layer=mapnik&marker=-1.23931%2C36.81621"
                  className="w-full h-full min-h-[400px] border-0"
                  loading="lazy"
                  allowFullScreen
                  aria-label="Map showing the location of Tumaini African Foundation in Kayole Soweto, Nairobi"
                />
              </div>

              {/* Map footer */}
              <div className="bg-cream px-5 py-3 flex items-center justify-between gap-3 border-t border-cream-dark">
                <p className="text-xs text-neutral-500">
                  <span className="font-medium text-maroon-deep">GPS:</span> -1.23931, 36.81621
                </p>
                <Link
                  href="https://www.openstreetmap.org/?mlat=-1.23931&mlon=36.81621#map=16/-1.23931/36.81621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-dark font-semibold hover:underline focus-visible:outline-none focus-visible:underline"
                  aria-label="View larger map on OpenStreetMap — opens in new tab"
                >
                  View larger map ↗
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
