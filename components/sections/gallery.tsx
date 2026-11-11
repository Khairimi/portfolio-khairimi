"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { gallery, type GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const text = { emerald: "text-emerald-soft", cyber: "text-cyber-soft", gold: "text-gold-soft" };

function Photo({ item, large = false }: { item: GalleryItem; large?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink-800">
      <Image
        src={`/gallery/${item.slug}.jpg`}
        alt={item.alt}
        fill
        sizes={large ? "(min-width: 1024px) 896px, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        className={cn(
          "transition-transform duration-700",
          large ? "object-contain" : "object-cover object-top group-hover:scale-[1.04]"
        )}
      />
    </div>
  );
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const current = index !== null ? gallery[index] : null;
  const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length));

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
          description="Every claim on this page has a moment behind it. Tap any frame for the source context."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => {
            const layout = [
              "col-span-2 row-span-2 lg:col-span-2",
              "col-span-1",
              "col-span-1",
              "col-span-1",
              "col-span-1",
            ][i];
            return (
              <Reveal key={g.slug} delay={i * 0.06} className={layout}>
                <button
                  onClick={() => setIndex(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-sand/10 text-left outline-none transition hover:border-sand/25"
                  aria-label={`Open ${g.title}`}
                >
                  <Photo item={g} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg border border-sand/15 bg-ink/60 text-sand opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <Expand className="h-3.5 w-3.5" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className={cn("font-mono text-[10px] uppercase tracking-[0.18em]", text[g.accent])}>
                      {String(i + 1).padStart(2, "0")} · {g.tag}
                    </span>
                    <p className={cn("mt-1 font-semibold leading-snug text-white", i === 0 ? "text-xl sm:text-2xl" : "text-sm sm:text-base")}>
                      {g.title}
                    </p>
                    {i === 0 && <p className="mt-1 text-sm text-sand-muted">{g.caption}</p>}
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        {current && index !== null && (
          <DialogContent
            className="max-w-4xl"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
          >
            <motion.div key={current.slug} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl">
                <Photo item={current} large />
              </div>
              <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:items-end sm:p-8">
                <div>
                  <Badge tone={current.accent}>{current.tag}</Badge>
                  <DialogTitle className="mt-3 text-2xl font-semibold text-white">{current.title}</DialogTitle>
                  <p className={cn("mt-1 font-mono text-sm", text[current.accent])}>{current.caption}</p>
                  <DialogDescription className="mt-4 max-w-2xl text-sand-muted">{current.context}</DialogDescription>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => step(-1)}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-sand/15 text-sand transition hover:border-emerald/50 hover:text-emerald"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-mono text-xs text-sand-dim">
                    {index + 1}/{gallery.length}
                  </span>
                  <button
                    onClick={() => step(1)}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-sand/15 text-sand transition hover:border-emerald/50 hover:text-emerald"
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
