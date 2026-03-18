"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Plane,
  Ship,
  MapPinned,
  Phone,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const viewportOpts = { amount: 0.12, once: true };
const ease = [0.22, 1, 0.36, 1] as const;

const MAP_ZOOM_MIN = 0.5;
const MAP_ZOOM_MAX = 4;
const MAP_ZOOM_STEP = 0.2;

/** Encoded paths for filenames with spaces */
const IMG = {
  fly: "/images/travel/fly/plane%202.jpg",
  catamaran: "/images/travel/ship/catamaran%202.jpeg",
  meisExpress: "/images/travel/ship/meis%20express.jpg",
  kahramanlar: "/images/travel/ship/kahramanlar.jpg",
  ferryScene: "/images/travel/ship/DSC00027.JPG",
  mapIsland: "/images/travel/map/Kastelorizo%20map.png",
  mapDodecanese: "/images/travel/map/map%20of%20Dodecanese.jpg",
} as const;

function Block({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, viewportOpts);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MapViewState = {
  src: string;
  alt: string;
  title: string;
};

export default function HowToGetHere() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, viewportOpts);
  const [mapView, setMapView] = useState<MapViewState | null>(null);
  const [mapZoom, setMapZoom] = useState(1);

  useEffect(() => {
    if (mapView) setMapZoom(1);
  }, [mapView?.src]);

  const onMapWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setMapZoom((z) => {
      const next = z + (e.deltaY < 0 ? MAP_ZOOM_STEP : -MAP_ZOOM_STEP);
      return Math.min(MAP_ZOOM_MAX, Math.max(MAP_ZOOM_MIN, next));
    });
  }, []);

  const zoomIn = useCallback(() => {
    setMapZoom((z) => Math.min(MAP_ZOOM_MAX, z + MAP_ZOOM_STEP));
  }, []);
  const zoomOut = useCallback(() => {
    setMapZoom((z) => Math.max(MAP_ZOOM_MIN, z - MAP_ZOOM_STEP));
  }, []);
  const zoomReset = useCallback(() => setMapZoom(1), []);

  return (
    <section
      id="travel"
      className="py-28 bg-[#fff] relative overflow-hidden"
    >
      {/* subtle decorative wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, #1A3A5C, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14 lg:mb-20"
        >
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] font-medium mb-4">
            Plan your journey
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[#1A3A5C] leading-tight">
            How to get{" "}
            <span className="italic font-normal text-[#1A3A5C]/70">here</span>
          </h2>
          <p className="text-[#8A8680] mt-5 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            Kastellorizo (Megisti) is Greece&apos;s easternmost island — reachable
            by air from Rhodes, by ferry from Rhodes or Turkey, with daily
            connections in season.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-10 lg:mb-14">
          {/* Fly */}
          <Block delay={0.05} className="group">
            <div className="h-full bg-white border border-[#E5E0D8] rounded-sm shadow-sm hover:shadow-md hover:border-[#C9A84C]/25 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E0D8]">
                <Image
                  src={IMG.fly}
                  alt="Olympic Air flight route to Kastellorizo airport from Rhodes, Greece"
                  title="Flying to Kastellorizo Dodecanese"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#1A3A5C]/90 text-white px-3 py-1.5 rounded-sm text-xs uppercase tracking-widest backdrop-blur-sm">
                  <Plane className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden />
                  By air
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-[#1A3A5C] mb-3">
                  Olympic Air from Rhodes
                </h3>
                <p className="text-[#5A5650] text-sm leading-relaxed flex-1">
                  You can fly to the island from{" "}
                  <strong className="text-[#1A3A5C] font-medium">
                    Rhodes Airport
                  </strong>{" "}
                  with Olympic Air. During the summer season there are{" "}
                  <strong className="text-[#1A3A5C] font-medium">
                    6 flights per week
                  </strong>
                  ; the flight takes about{" "}
                  <strong className="text-[#1A3A5C] font-medium">
                    25 minutes
                  </strong>
                  .
                </p>
              </div>
            </div>
          </Block>

          {/* Sea */}
          <Block delay={0.12} className="group">
            <div className="h-full bg-white border border-[#E5E0D8] rounded-sm shadow-sm hover:shadow-md hover:border-[#C9A84C]/25 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="grid grid-cols-3 gap-0.5 bg-[#E5E0D8]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG.catamaran}
                    alt="Dodecanisos Seaways catamaran ferry to Kastellorizo Greece"
                    title="Catamaran Rhodes to Kastellorizo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG.meisExpress}
                    alt="Meis Express ferry Kaş Turkey to Kastellorizo Megisti"
                    title="Meis Express sea connection"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    loading="lazy"
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={IMG.kahramanlar}
                    alt="Kahramanlar Kalimera ferry Turkey to Kastellorizo island"
                    title="Kahramanlar ferry to Greece"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative h-36 -mt-px overflow-hidden hidden sm:block border-t border-[#E5E0D8]">
                <Image
                  src={IMG.ferryScene}
                  alt="Ferry approaching Kastellorizo harbour — Dodecanese travel"
                  title="Sea approach to Kastellorizo"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 text-[#1A3A5C] px-3 py-1.5 rounded-sm text-xs uppercase tracking-widest shadow-sm">
                  <Ship className="w-3.5 h-3.5 text-[#C9A84C]" aria-hidden />
                  By sea
                </div>
              </div>
              <div className="sm:hidden px-4 pt-4 flex items-center gap-2 text-[#1A3A5C]">
                <Ship className="w-4 h-4 text-[#C9A84C]" aria-hidden />
                <span className="text-xs uppercase tracking-widest font-medium">
                  By sea
                </span>
              </div>
              <div className="p-6 lg:p-8 space-y-5 flex-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1A3A5C] mb-2">
                    From Rhodes
                  </h3>
                  <p className="text-[#5A5650] text-sm leading-relaxed">
                    Each week:{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      2 Blue Star
                    </strong>{" "}
                    sailings (just over 3 hours),{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      3 SAOS
                    </strong>{" "}
                    ferries (just under 5 hours), and{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      2 Dodecanisos Seaways catamarans
                    </strong>{" "}
                    (about 2.5 hours).
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E0D8]">
                  <h3 className="font-serif text-lg font-bold text-[#1A3A5C] mb-2">
                    From Kaş, Turkey
                  </h3>
                  <p className="text-[#5A5650] text-sm leading-relaxed">
                    Two companies run{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      daily trips
                    </strong>
                    :{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      Meis Express Kastellorizo
                    </strong>{" "}
                    and{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      Kahramanlar Kalimera
                    </strong>{" "}
                    — about{" "}
                    <strong className="text-[#1A3A5C] font-medium">
                      30 minutes
                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </Block>
        </div>

        {/* Maps row */}
        <Block delay={0.08} className="mb-12 lg:mb-14">
          <div className="bg-white border border-[#E5E0D8] rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-[#E5E0D8] bg-[#FAF8F4]/80">
              <MapPinned className="w-4 h-4 text-[#C9A84C]" aria-hidden />
              <span className="text-xs uppercase tracking-[0.25em] text-[#1A3A5C] font-semibold">
                Maps & context
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-[#E5E0D8]">
              <button
                type="button"
                onClick={() =>
                  setMapView({
                    src: IMG.mapIsland,
                    alt: "Map of Kastellorizo — open to zoom",
                    title: "Kastellorizo map",
                  })
                }
                className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-[#E8E4DC] group overflow-hidden text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-inset"
                aria-label="Open Kastellorizo map — zoom in the viewer"
              >
                <Image
                  src={IMG.mapIsland}
                  alt="Map of Kastellorizo island — open viewer to zoom"
                  title="Kastellorizo island map"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A3A5C]/0 group-hover:bg-[#1A3A5C]/35 transition-colors duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/95 text-[#1A3A5C] text-xs uppercase tracking-widest font-semibold shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <ZoomIn className="w-4 h-4 text-[#C9A84C]" aria-hidden />
                    Open & zoom
                  </span>
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-center text-[10px] sm:text-xs uppercase tracking-widest text-white drop-shadow-md font-medium pointer-events-none">
                  Kastellorizo
                </p>
              </button>
              <button
                type="button"
                onClick={() =>
                  setMapView({
                    src: IMG.mapDodecanese,
                    alt: "Dodecanese islands map — open to zoom",
                    title: "Dodecanese map",
                  })
                }
                className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] bg-[#E8E4DC] group overflow-hidden text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-inset"
                aria-label="Open Dodecanese map — zoom in the viewer"
              >
                <Image
                  src={IMG.mapDodecanese}
                  alt="Dodecanese islands map including Kastellorizo — open to zoom"
                  title="Dodecanese Greece map"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1A3A5C]/0 group-hover:bg-[#1A3A5C]/35 transition-colors duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/95 text-[#1A3A5C] text-xs uppercase tracking-widest font-semibold shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                    <ZoomIn className="w-4 h-4 text-[#C9A84C]" aria-hidden />
                    Open & zoom
                  </span>
                </div>
                <p className="absolute bottom-3 left-3 right-3 text-center text-[10px] sm:text-xs uppercase tracking-widest text-white drop-shadow-md font-medium pointer-events-none">
                  Dodecanese
                </p>
              </button>
            </div>
          </div>
        </Block>

        {/* Papoutsis CTA */}
        <Block delay={0.06}>
          <div className="max-w-2xl mx-auto rounded-sm bg-[#1A3A5C] text-white p-8 lg:p-10 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #C9A84C, transparent 50%)`,
              }}
            />
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.35em] font-medium mb-3 relative">
              Bookings & information
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4 relative">
              Papoutsis Travel
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-6 relative">
              For tickets, timetables, and the latest ferry and flight options,
              contact Papoutsis Travel — they know every connection to
              Kastellorizo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
              <a
                href="https://www.papoutsistravel.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white text-sm font-semibold uppercase tracking-widest rounded-sm hover:bg-[#b8934a] transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden />
                papoutsistravel.gr
              </a>
              <a
                href="tel:+302246049356"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A84C]" aria-hidden />
                +30 22460 49356
              </a>
            </div>
          </div>
        </Block>
      </div>

      {/* Map viewer: zoom with buttons + scroll wheel, pan by scrolling */}
      <Dialog
        open={!!mapView}
        onOpenChange={(open) => !open && setMapView(null)}
      >
        <DialogContent
          showCloseButton={false}
          className="max-w-[min(96vw,1100px)] w-full gap-0 p-0 bg-[#0c1520] border border-[#1A3A5C]/50 shadow-2xl rounded-sm overflow-hidden max-h-[min(92vh,900px)] flex flex-col text-white sm:max-w-[min(96vw,1100px)]"
        >
          {mapView && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-[#1A3A5C]/90 shrink-0">
                <p className="font-serif text-lg font-semibold text-white pr-2">
                  {mapView.title}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 hidden md:inline mr-1">
                    Wheel to zoom
                  </span>
                  <span className="text-xs tabular-nums text-[#C9A84C] font-medium min-w-[3rem] text-center">
                    {Math.round(mapZoom * 100)}%
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                    onClick={zoomOut}
                    disabled={mapZoom <= MAP_ZOOM_MIN}
                    aria-label="Zoom out"
                  >
                    <ZoomOut className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                    onClick={zoomIn}
                    disabled={mapZoom >= MAP_ZOOM_MAX}
                    aria-label="Zoom in"
                  >
                    <ZoomIn className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white text-xs uppercase tracking-wider"
                    onClick={zoomReset}
                    disabled={mapZoom === 1}
                    aria-label="Reset zoom"
                  >
                    Reset
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 ml-1"
                    onClick={() => setMapView(null)}
                    aria-label="Close map"
                  >
                    <X className="size-5" />
                  </Button>
                </div>
              </div>
              <div
                className="overflow-auto flex-1 min-h-[min(65vh,560px)] max-h-[min(75vh,720px)] w-full overscroll-contain bg-[#1a2332]"
                onWheel={onMapWheel}
              >
                <div
                  className="inline-block p-3 sm:p-6 mx-auto"
                  style={{ width: `${mapZoom * 100}%` }}
                >
                  <Image
                    src={mapView.src}
                    alt={mapView.alt}
                    width={2400}
                    height={1800}
                    className="w-full h-auto block select-none"
                    draggable={false}
                    priority
                  />
                </div>
              </div>
              <p className="text-center text-[10px] text-white/45 py-2 px-4 border-t border-white/5 bg-[#0c1520]">
                Zoom with + / − or the mouse wheel (desktop) · scroll the image area to pan when zoomed in
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
