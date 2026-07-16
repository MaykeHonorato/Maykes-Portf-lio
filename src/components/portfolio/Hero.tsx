import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import maykeAsset from "@/assets/mayke.png.asset.json";

const mayke = maykeAsset.url;

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[oklch(0.60_0.24_293/0.25)] blur-3xl" />
        <div
          className="animate-blob absolute top-1/3 right-10 h-80 w-80 rounded-full bg-[oklch(0.62_0.20_258/0.25)] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="animate-blob absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-[oklch(0.75_0.14_220/0.15)] blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponível para novos desafios
          </div>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Olá, eu sou <br />
            <span className="text-gradient-brand">Mayke Honorato</span>
          </h1>
          <p className="mt-5 text-base font-medium text-muted-foreground sm:text-lg">
            Analista de Dados
            <span className="mx-2 text-brand-purple">•</span> Business Intelligence
            <span className="mx-2 text-brand-blue">•</span> Power BI
            <span className="mx-2 text-brand-purple">•</span> SQL
          </p>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Analista de Sistemas em transição para Dados. Trabalho com Banco de Dados,
            Power BI, SQL, ETL e Cloud Computing — transformando dados em informações
            estratégicas para a tomada de decisão.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:glow-purple"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <a
              href="https://github.com/MaykeHonorato"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-brand-purple hover:bg-white/10"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/maykehonorato/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-brand-blue hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-white/10"
            >
              <Mail size={16} /> Contato
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="animate-float relative">
            <div className="absolute -inset-6 rounded-full gradient-brand opacity-40 blur-2xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-white/20 shadow-2xl sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-purple/40 via-transparent to-brand-blue/40 p-1">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={mayke}
                    alt="Mayke Honorato — Analista de Dados"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="animate-float absolute -left-8 top-8 rounded-2xl glass-strong px-3 py-2 text-xs font-semibold shadow-elevated" style={{ animationDelay: "-2s" }}>
            <span className="text-gradient-brand">SQL</span> · Power BI
          </div>
          <div className="animate-float absolute -right-4 bottom-14 rounded-2xl glass-strong px-3 py-2 text-xs font-semibold shadow-elevated" style={{ animationDelay: "-4s" }}>
            AWS · Databricks
          </div>
        </motion.div>
      </div>
    </section>
  );
}
