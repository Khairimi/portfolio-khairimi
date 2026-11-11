"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profileData } from "@/lib/data";

const links = [
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Evidence" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-[1240px] items-center justify-between rounded-2xl border px-4 transition-all duration-300",
          scrolled ? "glass border-sand/10 shadow-lg shadow-black/30" : "border-transparent"
        )}
      >
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm text-white">
          <span className="grid h-7 w-7 place-items-center rounded-lg border border-emerald/40 bg-emerald/10 text-[11px] font-bold text-emerald">
            KR
          </span>
          <span className="hidden sm:inline">
            {profileData.handle}
            <span className="text-sand-dim">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-sand-muted transition-colors hover:bg-sand/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profileData.email}`}
          className="hidden rounded-lg border border-emerald/40 bg-emerald/10 px-3.5 py-1.5 font-mono text-xs text-emerald-soft transition hover:bg-emerald/20 md:inline-flex"
        >
          hire --consult
        </a>

        <button
          className="rounded-lg p-2 text-sand md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-[1240px] rounded-2xl p-2 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sand transition hover:bg-sand/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
