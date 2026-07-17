import { Database, BarChart3, Cloud, Code2 } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Skill = { name: string; level: number };
type Group = { title: string; icon: typeof Database; accent: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Banco de Dados",
    icon: Database,
    accent: "from-brand-purple to-brand-blue",
    skills: [
      { name: "SQL", level: 60 },
      { name: "MySQL", level: 60 },
      { name: "PostgreSQL", level: 60 },
      { name: "MongoDB", level: 30 },
      { name: "Databricks", level: 35 },
    ],
  },
  {
    title: "Business Intelligence",
    icon: BarChart3,
    accent: "from-brand-blue to-brand-cyan",
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Power Query", level: 85 },
      { name: "Power Pivot", level: 80 },
      { name: "DAX", level: 80 },
      { name: "Excel", level: 90 },
      { name: "ETL", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "from-brand-purple to-brand-cyan",
    skills: [
      { name: "AWS", level: 75 },
      { name: "Azure", level: 70 },
      { name: "Databricks", level: 75 },
      { name: "GitHub", level: 85 },
      { name: "Docker", level: 65 },
    ],
  },
  {
    title: "Linguagens",
    icon: Code2,
    accent: "from-brand-blue to-brand-purple",
    skills: [
      { name: "Python", level: 78 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 65 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
    ],
  },
];

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-full rounded-full gradient-brand"
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Skills"
          title="Stack técnica"
          description="Ferramentas e tecnologias que utilizo para transformar dados em decisão."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="card-hover h-full rounded-3xl glass-strong p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${g.accent} text-white shadow-md`}>
                    <g.icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="space-y-3.5">
                  {g.skills.map((s) => (
                    <SkillRow key={s.name} skill={s} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
