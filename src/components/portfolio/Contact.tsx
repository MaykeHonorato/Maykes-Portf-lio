import { useState } from "react";
import { useForm } from "react-hook-form";
import { Github, Linkedin, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type FormValues = { name: string; email: string; message: string };

const socials = [
  { icon: Linkedin, label: "LinkedIn", value: "/in/maykehonorato", href: "https://www.linkedin.com/in/maykehonorato/" },
  { icon: Github, label: "GitHub", value: "@maykehonorato", href: "https://github.com/MaykeHonorato" },
  { icon: Mail, label: "Email", value: "maike-honorato@hotmail.com", href: "mailto:maike-honorato@hotmail.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+55 (11) 98728-2647", href: "https://wa.me/5511987282647" },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    const text = `Olá, meu nome é ${data.name} (${data.email}).%0A%0A${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/5511987282647?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };


  return (
    <section id="contato" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar"
          description="Aberto a oportunidades em Dados, projetos freelancer e parcerias."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl glass-strong p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Nome
                  </label>
                  <input
                    {...register("name", { required: "Informe seu nome", maxLength: 100 })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:bg-white/[0.06]"
                    placeholder="Seu nome"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Informe seu email",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },
                    })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-blue focus:bg-white/[0.06]"
                    placeholder="voce@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  {...register("message", { required: "Escreva uma mensagem", maxLength: 1000 })}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:bg-white/[0.06]"
                  placeholder="Como posso ajudar?"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:glow-purple disabled:opacity-50 sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} /> Mensagem enviada
                  </>
                ) : (
                  <>
                    <Send size={16} /> {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </>
                )}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover flex items-center gap-4 rounded-2xl glass p-4"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-brand text-white">
                    <s.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                    <div className="truncate text-sm font-semibold">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
