import { GitBranch, GitCommit, Github, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: GitBranch, label: "Repositórios", value: "28" },
  { icon: Users, label: "Followers", value: "142" },
  { icon: GitCommit, label: "Commits (ano)", value: "612" },
  { icon: Github, label: "Linguagens", value: "8" },
];

const langs = [
  { name: "Python", pct: 34, color: "bg-blue-400" },
  { name: "SQL", pct: 28, color: "bg-brand-blue" },
  { name: "JavaScript", pct: 18, color: "bg-yellow-400" },
  { name: "HTML/CSS", pct: 12, color: "bg-orange-400" },
  { name: "Outros", pct: 8, color: "bg-brand-purple" },
];

// pseudo-calendar (weeks x days)
function Calendar() {
  const weeks = 30;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    // deterministic pseudo-random
    const v = (Math.sin(i * 12.9898) * 43758.5453) % 1;
    const level = Math.floor(Math.abs(v) * 5); // 0-4
    return level;
  });
  const colors = [
    "bg-white/5",
    "bg-brand-purple/25",
    "bg-brand-purple/50",
    "bg-brand-blue/60",
    "bg-brand-blue",
  ];
  return (
    <div
      className="grid gap-[3px]"
      style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: weeks }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: days }).map((_, d) => {
            const level = cells[w * days + d];
            return <div key={d} className={`aspect-square rounded-[2px] ${colors[level]}`} />;
          })}
        </div>
      ))}
    </div>
  );
}

export function GitHubStats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="GitHub"
          title="Atividade em código"
          description="Snapshot da minha jornada open source e projetos pessoais."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-hover rounded-2xl glass p-5">
                  <s.icon size={18} className="text-brand-blue" />
                  <div className="mt-3 font-display text-2xl font-bold text-gradient-brand">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="rounded-3xl glass-strong p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold">Contribuições — últimos meses</h3>
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  menos
                  <div className="mx-1 flex gap-[3px]">
                    {["bg-white/5", "bg-brand-purple/25", "bg-brand-purple/50", "bg-brand-blue/60", "bg-brand-blue"].map(
                      (c) => (
                        <div key={c} className={`h-2.5 w-2.5 rounded-[2px] ${c}`} />
                      )
                    )}
                  </div>
                  mais
                </div>
              </div>
              <Calendar />

              <div className="mt-6 space-y-2.5">
                <h3 className="text-sm font-semibold">Linguagens mais usadas</h3>
                <div className="flex h-2 overflow-hidden rounded-full">
                  {langs.map((l) => (
                    <div key={l.name} className={l.color} style={{ width: `${l.pct}%` }} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  {langs.map((l) => (
                    <div key={l.name} className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${l.color}`} />
                      {l.name} · {l.pct}%
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
