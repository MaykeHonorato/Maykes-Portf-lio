import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Sparkles, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: 6, suffix: "+", label: "Projetos", icon: Briefcase },
  
  { value: 47, suffix: "H", label: "Horas de estudo", icon: Target },
  { value: 30, suffix: "+", label: "Tecnologias", icon: Sparkles },
];

function useCountUp(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.floor(eased * target));
              if (p < 1) requestAnimationFrame(step);
              else setN(target);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return { n, ref };
}

function StatCard({ value, suffix, label, icon: Icon }: (typeof stats)[number]) {
  const { n, ref } = useCountUp(value);
  return (
    <div className="group card-hover relative overflow-hidden rounded-2xl glass p-6 text-center">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-60" />
      <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-xl gradient-brand text-white shadow-md">
        <Icon size={20} />
      </div>
      <div className="font-display text-4xl font-bold">
        <span ref={ref} className="text-gradient-brand">
          {n.toLocaleString("pt-BR")}
        </span>
        <span className="text-gradient-brand">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Da administração de sistemas à engenharia de dados"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 leading-relaxed text-muted-foreground">
              <p>
                Tenho experiência na área de{" "}
                <span className="text-foreground">suporte e administração de sistemas hospitalares</span>,
                atuando com Active Directory, gerenciamento de acessos,
                resolução de incidentes e suporte técnico.
              </p>
              <p className="mt-4">
                Atualmente estou direcionando minha carreira para{" "}
                <span className="text-foreground">Engenharia e Análise de Dados</span>,
                desenvolvendo projetos com Power BI, SQL, Databricks, AWS e Python.
              </p>
              <p className="mt-4">
                Meu objetivo é{" "}
                <span className="text-gradient-brand font-semibold">
                  transformar dados em informações estratégicas
                </span>{" "}
                para auxiliar empresas na tomada de decisões.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
