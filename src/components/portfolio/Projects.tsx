import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

import finance from "@/assets/project-finance.jpg";
import hr from "@/assets/project-hr.jpg";
import alteryxAsset from "@/assets/alteryx-logo.png.asset.json";

const projects: { title: string; desc: string; img: string; tags: string[]; repo?: string }[] = [
  {
    title: "Laboratório de Estudo Alteryx",
    desc: "Fluxo de estudo no Alteryx Designer explorando ingestão, limpeza, transformação e união de dados a partir de planilhas Excel e arquivos XML.",
    img: alteryxAsset.url,
    tags: ["Alteryx", "ETL", "Excel", "XML"],
    repo: "https://github.com/MaykeHonorato/fluxos-no-Alteryx-Designer-.git",
  },
  { title: "Dashboard Financeiro", desc: "Monitoramento de receita, despesas e projeções financeiras.", img: finance, tags: ["Power BI", "SQL", "Excel"] },
  { title: "Dashboard RH", desc: "Indicadores de headcount, turnover e clima organizacional.", img: hr, tags: ["Power BI", "DAX", "SQL"] },
];



export function Projects() {
  return (
    <section id="projetos" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Projetos"
          title="Casos e estudos"
          description="Uma seleção de dashboards, pipelines e experimentos que venho construindo."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group card-hover flex h-full flex-col overflow-hidden rounded-3xl glass-strong">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2 pt-2">
                    <a
                      href={p.repo ?? "https://github.com/MaykeHonorato"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/10"
                    >
                      <Github size={14} /> Código
                    </a>
                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg gradient-brand px-3 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
