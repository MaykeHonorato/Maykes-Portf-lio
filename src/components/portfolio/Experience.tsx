import { Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const exp = [
  {
    role: "Analista de Sistemas Júnior",
    place: "Suporte Hospitalar",
    period: "Atual",
    bullets: [
      "Atuo em ambiente hospitalar com sustentação do Sistema MV, suporte técnico N2 e administração de acessos via Active Directory.",
      "Também desenvolvo soluções de Business Intelligence, utilizando SQL, Power BI, Power Query, Power Pivot e processos de ETL para transformar dados em informações estratégicas e apoiar a tomada de decisão.",
      "Participei da implantação dos projetos Mevo e Recepção Digital, além do desenvolvimento de dashboards para monitoramento de indicadores e eficiência operacional.",
    ],
  },
];

const edu = [
  { title: "Análise e Desenvolvimento de Sistemas", place: "Graduação" },
  { title: "Cursos Microsoft Learn", place: "Trilhas de Dados & IA" },
  { title: "AWS Skill Builder", place: "Cloud Practitioner Path" },
  { title: "Databricks Academy", place: "Lakehouse Fundamentals" },
  { title: "Oracle University", place: "Autonomous Database" },
  { title: "Cisco Networking Academy", place: "Networking Essentials" },
  { title: "Fundação Bradesco", place: "Cursos livres de tecnologia" },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Trajetória" title="Experiência & Formação" />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-strong p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
                  <Briefcase size={18} />
                </div>
                <h3 className="text-lg font-semibold">Experiência</h3>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-1 top-1 bottom-1 w-px bg-gradient-to-b from-brand-purple to-brand-blue" />
                {exp.map((e) => (
                  <div key={e.role} className="relative">
                    <div className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full gradient-brand ring-4 ring-background" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold">{e.role}</h4>
                      <span className="text-xs text-muted-foreground">{e.period}</span>
                    </div>
                    <div className="text-sm text-brand-blue">{e.place}</div>
                    <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-purple" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl glass-strong p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-brand text-white">
                  <GraduationCap size={18} />
                </div>
                <h3 className="text-lg font-semibold">Formação</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {edu.map((e) => (
                  <div key={e.title} className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm font-semibold">{e.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{e.place}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
