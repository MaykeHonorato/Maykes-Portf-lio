import { useEffect, useState } from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <div className="font-display text-lg font-bold">
            Mayke Honorato<span className="text-gradient-brand">.</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Feito com dados, código e café.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="https://github.com/MaykeHonorato"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-white/10"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/maykehonorato/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-white/10"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:maike-honorato@hotmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-white/10"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full gradient-brand text-white shadow-xl transition-all duration-300 hover:scale-110 hover:glow-purple ${
          show ? "opacity-100" : "pointer-events-none opacity-0 translate-y-2"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
