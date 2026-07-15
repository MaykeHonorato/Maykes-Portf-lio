import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { StudyStack } from "@/components/portfolio/StudyStack";
import { GitHubStats } from "@/components/portfolio/GitHubStats";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayke Honorato · Analista de Dados & BI" },
      {
        name: "description",
        content:
          "Portfólio de Mayke Honorato — Analista de Dados especializado em Power BI, SQL, ETL e Cloud (AWS, Azure, Databricks).",
      },
      { property: "og:title", content: "Mayke Honorato · Analista de Dados & BI" },
      {
        property: "og:description",
        content:
          "Projetos de BI, dashboards Power BI, SQL, Databricks e Cloud. Transformando dados em decisão.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <StudyStack />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
