import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const stack = [
  { name: "Power BI", color: "from-yellow-400 to-orange-500" },
  { name: "SQL", color: "from-brand-blue to-brand-cyan" },
  { name: "Python", color: "from-blue-400 to-yellow-400" },
  { name: "AWS", color: "from-orange-400 to-amber-500" },
  { name: "Databricks", color: "from-red-500 to-orange-500" },
  { name: "MongoDB", color: "from-emerald-400 to-green-600" },
  { name: "Oracle", color: "from-red-500 to-rose-600" },
  { name: "Azure", color: "from-sky-400 to-blue-600" },
  { name: "GitHub", color: "from-neutral-400 to-neutral-700" },
];

export function StudyStack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Estudos diários"
          title="Aprendizado contínuo"
          description="Tecnologias que estudo e pratico com regularidade."
        />
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {stack.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="group card-hover relative aspect-square overflow-hidden rounded-2xl glass p-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-300 group-hover:opacity-20`} />
                <div className="relative flex h-full flex-col items-center justify-center gap-2 text-center">
                  <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${s.color} shadow-md`} />
                  <span className="text-xs font-semibold">{s.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
