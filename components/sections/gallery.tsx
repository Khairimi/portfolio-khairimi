"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Expand,
  Megaphone,
  Palette,
  ShieldCheck,
  Trophy,
  UserRound,
} from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { galleryCategories, gallery, type GalleryCategory, type GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = (typeof galleryCategories)[number];

const accentText = { emerald: "text-emerald-soft", cyber: "text-cyber-soft", gold: "text-gold-soft" };
const accentGrad = {
  emerald: "from-emerald/25 via-emerald-deep/10 to-ink-800",
  cyber: "from-cyber/25 via-cyber-deep/10 to-ink-800",
  gold: "from-gold/25 via-gold/5 to-ink-800",
};
const categoryIcon: Record<GalleryCategory, React.ElementType> = {
  "MPP & Leadership": Megaphone,
  "JPK & Cultural": Palette,
  "Innovation & Competitions": Trophy,
  Certificates: BadgeCheck,
};

/** Bento spans. Tall items become standard when a filter leaves them alone in the grid. */
function span(size: GalleryItem["size"], filtered: boolean) {
  switch (size) {
    case "hero":
      return "col-span-2 row-span-2";
    case "tall":
      return filtered ? "col-span-1" : "col-span-1 row-span-2";
    case "wide":
      return "col-span-2";
    default:
      return "col-span-1";
  }
}

/** Designed stand-in used while a photo is pending (or if it fails to load). */
function Fallback({ item, large }: { item: GalleryItem; large?: boolean }) {
  const Icon = categoryIcon[item.category];
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-gradient-to-br", accentGrad[item.accent])}>
      <div className="grid-lines absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <Icon className={cn(large ? "h-16 w-16" : "h-10 w-10", accentText[item.accent])} strokeWidth={1.2} />
          <span className={cn("font-mono tracking-wide", large ? "text-lg" : "text-xs", accentText[item.accent])}>
            {item.metrics[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

function Frame({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (!item.image || failed) return <Fallback item={item} large={large} />;
  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-900">
      <Image
        src={`/gallery/${item.image}.jpg`}
        alt={item.alt}
        fill
        quality={large ? 90 : 75}
        sizes={large ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        onError={() => setFailed(true)}
        className={cn(
          "transition-transform duration-700",
          large ? "object-contain" : "object-cover object-top group-hover:scale-[1.05]"
        )}
      />
    </div>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const visible = gallery.filter((g) => filter === "All" || g.category === filter);
  const index = visible.findIndex((g) => g.slug === openSlug);
  const current = index >= 0 ? visible[index] : null;
  const step = (d: number) => setOpenSlug(visible[(index + d + visible.length) % visible.length].slug);
  const count = (f: Filter) => (f === "All" ? gallery.length : gallery.filter((g) => g.category === f).length);

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          label="Evidence & Leadership Gallery"
          title={
            <>
              Receipts, not <span className="text-gold-soft">résumé lines</span>.
            </>
          }
          description="Every claim on this page has a moment behind it. Filter by theme, then open any frame for its receipt: role, date and the verified figure."
        />

        <Tabs value={filter} onValueChange={(v) => setFilter(v as Filter)} className="mb-8">
          <TabsList aria-label="Filter gallery" className="max-w-full overflow-x-auto">
            {galleryCategories.map((c) => (
              <TabsTrigger key={c} value={c} className="shrink-0 whitespace-nowrap">
                {filter === c && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-emerald to-cyan-400 shadow-[0_0_22px_rgba(34,211,238,0.55)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
                <span className="relative z-10 ml-1.5 opacity-60">{count(c)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <motion.div
          layout
          className="grid auto-rows-[190px] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[210px] sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((g, i) => (
              <motion.div
                key={g.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                className={span(g.size, filter !== "All")}
              >
                <button
                  onClick={() => setOpenSlug(g.slug)}
                  aria-label={`Open receipt: ${g.title}`}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-emerald/30 bg-slate-900/80 text-left outline-none backdrop-blur-md transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_0_32px_-8px_rgba(34,211,238,0.55)] focus-visible:border-cyan-300/70"
                >
                  <Frame item={g} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

                  {/* glowing hover edges */}
                  <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-y-6 left-0 w-px bg-gradient-to-b from-transparent via-emerald to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-sand/15 bg-ink/60 text-sand opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className={cn("font-mono text-[10px] uppercase tracking-[0.18em]", accentText[g.accent])}>
                      {g.tag}
                    </span>
                    <p
                      className={cn(
                        "mt-1 font-semibold leading-snug text-white",
                        g.size === "hero" ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
                      )}
                    >
                      {g.title}
                    </p>
                    {(g.size === "hero" || g.size === "wide" || g.size === "tall") && (
                      <p className="mt-1 text-xs text-sand-muted sm:text-sm">{g.caption}</p>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Receipt lightbox */}
      <Dialog open={current !== null} onOpenChange={(o) => !o && setOpenSlug(null)}>
        {current && (
          <DialogContent
            className="max-w-4xl border border-emerald/30 bg-slate-900/90 shadow-[0_0_60px_-15px_rgba(16,185,129,0.5)] backdrop-blur-md"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
          >
            <motion.div key={current.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-ink">
                <Frame item={current} large />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="emerald" glow>
                    <ShieldCheck className="h-3 w-3" /> Verified Campus Record
                  </Badge>
                  <Badge tone={current.accent}>{current.category}</Badge>
                </div>

                <DialogTitle className="mt-4 text-2xl font-semibold text-white">{current.title}</DialogTitle>
                <p className={cn("mt-1 font-mono text-sm", accentText[current.accent])}>{current.caption}</p>

                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-sand/[0.08] bg-ink/60 p-4">
                    <dt className="eyebrow flex items-center gap-1.5">
                      <UserRound className="h-3 w-3" /> Role
                    </dt>
                    <dd className="mt-1.5 text-sm text-white">{current.role}</dd>
                  </div>
                  <div className="rounded-xl border border-sand/[0.08] bg-ink/60 p-4">
                    <dt className="eyebrow flex items-center gap-1.5">
                      <CalendarDays className="h-3 w-3" /> Date
                    </dt>
                    <dd className="mt-1.5 text-sm text-white">{current.date}</dd>
                  </div>
                </dl>

                <div className="mt-4">
                  <p className="eyebrow mb-2">Verified metric</p>
                  <div className="flex flex-wrap gap-2">
                    {current.metrics.map((m) => (
                      <Badge key={m} tone={current.accent} glow>
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>

                <DialogDescription className="mt-5 max-w-2xl text-sand-muted">{current.context}</DialogDescription>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <button
                    onClick={() => step(-1)}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-sand/15 text-sand transition hover:border-emerald/50 hover:text-emerald hover:shadow-[0_0_16px_-4px_rgba(16,185,129,0.7)]"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-mono text-xs text-sand-dim">
                    {index + 1}/{visible.length}
                  </span>
                  <button
                    onClick={() => step(1)}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-sand/15 text-sand transition hover:border-emerald/50 hover:text-emerald hover:shadow-[0_0_16px_-4px_rgba(16,185,129,0.7)]"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
