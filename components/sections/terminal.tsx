"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { asciiBanner, dobiSutera, profile, skills } from "@/lib/data";

type Line = { id: number; kind: "cmd" | "out"; node: ReactNode };

const COMMANDS = ["cat bio.txt", "fetch mpp-stats", "list tech-stack", "whoami", "help", "clear", "sudo hire"] as const;
const QUICK = ["cat bio.txt", "fetch mpp-stats", "list tech-stack", "clear"] as const;

const Key = ({ children }: { children: ReactNode }) => <span className="text-cyber-soft">{children}</span>;
const Ok = ({ children }: { children: ReactNode }) => <span className="text-emerald-soft">{children}</span>;
const Warn = ({ children }: { children: ReactNode }) => <span className="text-gold-soft">{children}</span>;
const Dim = ({ children }: { children: ReactNode }) => <span className="text-sand-dim">{children}</span>;

function bar(pct: number, width = 20) {
  const filled = Math.round((pct / 100) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}

function Banner() {
  return (
    <div>
      <pre className="whitespace-pre text-[11px] leading-[1.25] text-emerald sm:text-[13px]">{asciiBanner}</pre>
      <p className="mt-2">
        <Dim>khairi-os v2026.11 · </Dim>
        <Ok>MPP Sesi 2025/2026</Ok>
        <Dim> · type </Dim>
        <Key>help</Key>
        <Dim> or tap a command below</Dim>
      </p>
    </div>
  );
}

function run(cmd: string): ReactNode | "clear" {
  const c = cmd.trim().toLowerCase().replace(/\s+/g, " ");
  switch (c) {
    case "help":
      return (
        <div className="space-y-0.5">
          <p><Dim>available commands:</Dim></p>
          {[
            ["cat bio.txt", "who I am, in plain text"],
            ["fetch mpp-stats", "live advocacy numbers"],
            ["list tech-stack", "tools I ship with"],
            ["whoami", "one-liner identity"],
            ["clear", "wipe the screen"],
          ].map(([k, v]) => (
            <p key={k}>
              <Key>{k.padEnd(16, " ")}</Key>
              <Dim>{v}</Dim>
            </p>
          ))}
        </div>
      );
    case "whoami":
      return (
        <p>
          <Ok>{profile.handle}</Ok> <Dim>—</Dim> CS student · MPP · future tech consultant
        </p>
      );
    case "cat bio.txt":
      return (
        <div className="space-y-1">
          <p><Dim># bio.txt</Dim></p>
          <p><Key>name     </Key> {profile.fullName}</p>
          <p><Key>study    </Key> {profile.programme} ({profile.programmeCode})</p>
          <p><Key>campus   </Key> {profile.institutionShort} · {profile.location}</p>
          <p><Key>award    </Key> <Warn>★ {profile.award}</Warn></p>
          <p><Key>role     </Key> MPP 2025/2026 — {profile.portfolios.join(" · ")}</p>
          <p><Key>target   </Key> <Ok>{profile.target}</Ok></p>
          <p className="pt-1 text-sand-muted">
            &gt; I build mobile & web systems, read the data behind student problems, and carry it to the people who
            can fix them.
          </p>
        </div>
      );
    case "fetch mpp-stats": {
      const pct = (dobiSutera.responses / dobiSutera.target) * 100;
      return (
        <div className="space-y-1">
          <p><Dim>GET</Dim> /api/mpp/dobi-sutera <Ok>200 OK</Ok> <Dim>· 38ms</Dim></p>
          <p className="whitespace-pre">
            <Key>{"responses".padEnd(12)}</Key>
            <Ok>{bar(pct)}</Ok> {dobiSutera.responses}/{dobiSutera.target}
          </p>
          <p className="whitespace-pre">
            <Key>{"hygiene".padEnd(12)}</Key>
            <Warn>{bar(dobiSutera.hygieneFlagged)}</Warn> {dobiSutera.hygieneFlagged}% flagged
          </p>
          <p className="whitespace-pre">
            <Key>{"siswi".padEnd(12)}</Key>
            <span className="text-cyber-soft">{bar(dobiSutera.siswiShare)}</span> {dobiSutera.siswiShare}%
          </p>
          <p className="whitespace-pre">
            <Key>{"breakfast".padEnd(12)}</Key>
            <Ok>{bar(100)}</Ok> 100 packs
          </p>
          <p className="pt-1">
            <Dim>report →</Dim>{" "}
            <a href={dobiSutera.reportUrl} target="_blank" rel="noreferrer" className="text-emerald underline underline-offset-2">
              dobi-sutera-mpp.vercel.app
            </a>
          </p>
        </div>
      );
    }
    case "list tech-stack":
    case "ls tech-stack":
      return (
        <div className="space-y-0.5">
          <p><Dim>tech-stack/</Dim></p>
          {skills.map((s, i) => (
            <p key={s.group} className="whitespace-pre-wrap">
              <Dim>{i === skills.length - 1 ? "└── " : "├── "}</Dim>
              <Key>{s.group.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/</Key>{" "}
              <span className="text-sand">{s.items.join(", ")}</span>
            </p>
          ))}
        </div>
      );
    case "sudo hire":
      return (
        <div className="space-y-0.5">
          <p><Dim>[sudo] password for recruiter:</Dim> ********</p>
          <p><Ok>✔</Ok> <Dim>identity verified</Dim> <Dim>·</Dim> <Ok>access granted</Ok></p>
          <pre className="whitespace-pre text-emerald-soft">{`╭──────────────────────────────────────╮
│  CONTACT VERIFIED · READY TO COLLAB  │
╰──────────────────────────────────────╯`}</pre>
          <p><Key>candidate </Key> {profile.fullName}</p>
          <p><Key>seeking   </Key> <Ok>{profile.target}</Ok></p>
          <p>
            <Key>email     </Key>{" "}
            <a href={`mailto:${profile.email}`} className="text-emerald underline underline-offset-2 transition hover:text-emerald-soft hover:drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">
              {profile.email}
            </a>
          </p>
          <p className="pt-1"><Warn>★</Warn> <Dim>exit code 0 · offer letter pending…</Dim></p>
        </div>
      );
    case "clear":
      return "clear";
    case "":
      return null;
    default:
      return (
        <p>
          <span className="text-red-400">command not found:</span> {cmd} <Dim>— try</Dim> <Key>help</Key>
        </p>
      );
  }
}

export function Terminal() {
  const idRef = useRef(1);
  const [lines, setLines] = useState<Line[]>([{ id: 0, kind: "out", node: <Banner /> }]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const exec = (raw: string) => {
    const result = run(raw);
    if (result === "clear") {
      setLines([]);
    } else {
      const next: Line[] = [{ id: idRef.current++, kind: "cmd", node: raw }];
      if (result) next.push({ id: idRef.current++, kind: "out", node: result });
      setLines((l) => [...l, ...next]);
    }
    if (raw.trim()) setHistory((h) => [raw, ...h].slice(0, 30));
    setHIndex(-1);
    setInput("");
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") exec(input);
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      if (history[i] !== undefined) {
        setHIndex(i);
        setInput(history[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(Math.max(i, -1));
      setInput(i >= 0 ? history[i] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(input.toLowerCase()) && input.length > 0);
      if (match) setInput(match);
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald/20 via-cyber/10 to-transparent blur-3xl" />
      <div className="overflow-hidden rounded-2xl border border-sand/10 bg-[#070A10]/95 shadow-2xl shadow-black/60">
        {/* chrome */}
        <div className="flex items-center gap-2 border-b border-sand/[0.07] bg-ink-800/80 px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 truncate font-mono text-xs text-sand-dim">khairi@uitm-kt: ~/portfolio</span>
          <span className="ml-auto hidden font-mono text-[10px] text-sand-dim sm:block">zsh · 80×24</span>
        </div>

        {/* output */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus({ preventScroll: true })}
          className="terminal-scroll h-[340px] cursor-text overflow-y-auto overflow-x-auto px-4 py-4 font-mono text-[12px] leading-relaxed text-sand sm:h-[380px] sm:text-[13px]"
          role="log"
          aria-live="polite"
        >
          {lines.map((l) =>
            l.kind === "cmd" ? (
              <p key={l.id} className="mt-3 first:mt-0">
                <Ok>➜</Ok> <Key>~</Key> <span className="text-white">{l.node}</span>
              </p>
            ) : (
              <motion.div
                key={l.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-1"
              >
                {l.node}
              </motion.div>
            )
          )}

          <div className="mt-3 flex items-center gap-2">
            <Ok>➜</Ok> <Key>~</Key>
            <label htmlFor="term-input" className="sr-only">
              Terminal command
            </label>
            <div className="relative flex-1">
              <input
                id="term-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                className="w-full bg-transparent text-white caret-transparent outline-none placeholder:text-sand-dim/60"
                placeholder="type a command…"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 h-[1.1em] w-[0.55em] -translate-y-1/2 animate-blink bg-emerald"
                style={{ left: `${input.length}ch` }}
              />
            </div>
          </div>
        </div>

        {/* quick commands */}
        <div className="flex flex-wrap gap-2 border-t border-sand/[0.07] bg-ink-800/50 px-4 py-3">
          {QUICK.map((c) => (
            <button
              key={c}
              onClick={() => exec(c)}
              className="rounded-md border border-sand/10 bg-ink/60 px-2.5 py-1 font-mono text-[11px] text-sand-muted transition hover:border-emerald/50 hover:text-emerald-soft"
            >
              $ {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
