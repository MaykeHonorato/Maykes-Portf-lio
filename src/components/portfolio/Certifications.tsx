import { Award, CheckCircle2, Clock, Circle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Status = "done" | "in-progress" | "planned";

const items: { title: string; issuer: string; status: Status }[] = [
  { title: "SQL Server", issuer: "Fundamentos de Banco de Dados", status: "done" },
  { title: "Lógica de Programação", issuer: "Algoritmos e Estruturas de Controle", status: "done" },
  { title: "Estatística Básica", issuer: "Conceitos Fundamentais para Análise de Dados", status: "in-progress" },
  { title: "Pensamento Analítico", issuer: "Análise e Resolução de Problemas", status: "in-progress" },
  { title: "Power BI", issuer: "Dashboards, DAX, Power Query e ETL", status: "in-progress" },
  { title: "Python", issuer: "Programação para Dados e Automação", status: "in-progress" },
  { title: "Databricks", issuer: "Apache Spark, Delta Lake e Engenharia de Dados", status: "in-progress" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", status: "in-progress" },
  { title: "Git & GitHub", issuer: "Versionamento de Código e Portfólio", status: "in-progress" },
  { title: "MongoDB", issuer: "Banco de Dados NoSQL", status: "in-progress" },
];

const statusMap: Record<Status, { label: string; icon: typeof CheckCircle2; className: string }> = {
  done: { label: "Concluído", icon: CheckCircle2, className: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
  "in-progress": { label: "Em andamento", icon: Clock, className: "text-brand-blue bg-brand-blue/10 border-brand-blue/30" },
  planned: { label: "Planejado", icon: Circle, className: "text-brand-purple bg-brand-purple/10 border-brand-purple/30" },
};

export function Certifications() {
  return (
    <section id="certificacoes" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading eyebrow="Certificações" title="Trilha de aprendizado" />
        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-transparent sm:left-6" />
          <div className="space-y-5">
            {items.map((c, i) => {
              const s = statusMap[c.status];
              return (
                <Reveal key={c.title} delay={i * 0.05}>
                  <div className="relative pl-12 sm:pl-16">
                    <div className="absolute left-0 top-4 grid h-9 w-9 place-items-center rounded-full gradient-brand text-white shadow-lg sm:left-2 sm:h-9 sm:w-9">
                      <Award size={16} />
                    </div>
                    <div className="card-hover rounded-2xl glass p-5">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="truncate text-base font-semibold sm:text-lg">{c.title}</h3>
                          <p className="mt-0.5 text-sm text-muted-foreground">{c.issuer}</p>
                        </div>
                        <span
                          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${s.className}`}
                        >
                          <s.icon size={12} />
                          {s.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
