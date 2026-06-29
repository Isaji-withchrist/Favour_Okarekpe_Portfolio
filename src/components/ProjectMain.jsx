import { useState } from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { Link } from "react-router";
import EcoSpend from "../assets/Eco-landingpage.png";
import Dev from "../assets/Dev.png";
import TAG from "../assets/TAG.png";
import useIsMobile from "../hooks/useIsMobile";

const projects = [
  {
    id: "ecospend", title: "EcoSpend",
    description: "Sustainability-focused fintech app that scans receipts, tracks carbon footprint by category, and generates eco insights. Features full auth flow, receipt scanning pipeline, and analytics dashboard.",
    tags: ["React", "Vite", "Tailwind CSS"], featured: true,
    liveUrl: "https://eco-spend.vercel.app/", repoUrl: "https://github.com/Isaji-withchrist/EcoSpend", image: EcoSpend,
  },
  {
    id: "portfolio", title: "Dev Portfolio",
    description: "Developer portfolio with animated tech stack marquee, project showcases, and dark CTA section. Built with React, Vite, and React Router.",
    tags: ["React", "Vite", "React Router"], featured: false,
    liveUrl: "#", repoUrl: "https://github.com/Isaji-withchrist/Favour_Okarekpe_Portfolio", image: Dev,
  },
  {
    id: "awakened-girl", title: "The Awakened Girl",
    description: "Dark feminine content brand and community platform targeting ambitious women in STEM. Covers brand identity, content strategy, and digital presence across Pinterest and Instagram.",
    tags: ["AI", "Branding", "Content"], featured: false,
    liveUrl: "#", repoUrl: null, image: TAG,
  },
];

function Tag({ label }) {
  return (
    <span style={{ padding: "4px 12px", background: "rgba(255,77,141,0.08)", borderRadius: 4, border: "1px solid rgba(255,77,141,0.15)", color: "#FF4D8D", fontSize: 13, fontFamily: "JetBrains Mono, monospace", fontWeight: 500, whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function ProjectLinks({ liveUrl, repoUrl, primaryLabel = "View Project" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", gap: 6, color: "#FF4D8D", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2, textDecoration: "none", transition: "opacity 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {primaryLabel} <FiArrowRight size={13} />
      </a>
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "#9A9A9A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2, textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0A0A0A")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9A9A")}
        >
          Source Code <FiGithub size={13} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(false);
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visibleRest = showAll ? rest : rest.slice(0, 2);

  return (
    <section
      style={{
        width: "100%",
        paddingTop: isMobile ? 100 : 128,
        paddingBottom: isMobile ? 80 : 120,
        paddingLeft: isMobile ? 20 : 64,
        paddingRight: isMobile ? 20 : 64,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 48,
      }}
    >
      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingBottom: 16 }}>
          <h1 style={{ margin: 0, fontSize: isMobile ? 40 : 72, fontFamily: "Sora, sans-serif", fontWeight: 800, lineHeight: "110%" }}>
            <span style={{ color: "#0A0A0A" }}>Selected </span>
            <span style={{ color: "#FF4D8D" }}>Works</span>
          </h1>
          <p style={{ margin: 0, maxWidth: 672, color: "#4A4A4A", fontSize: isMobile ? 16 : 18, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "28.8px" }}>
            A curated collection of frontend projects I've worked on — from fintech apps to brand platforms — built with React, Vite, and a strong eye for detail.
          </p>
        </div>

        <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.06)" }} />

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>

          {/* Featured */}
          {featured && (
            <div style={{ width: "100%", background: "#ffffff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative" }}>
                <img src={featured.image} alt={featured.title} style={{ width: "100%", height: isMobile ? 220 : 426, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", top: 16, left: 16, padding: "4px 12px", background: "rgba(255,77,141,0.10)", borderRadius: 9999, border: "1px solid rgba(255,77,141,0.25)", backdropFilter: "blur(6px)" }}>
                  <span style={{ color: "#FF4D8D", fontSize: 13, fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}>Featured</span>
                </div>
              </div>
              <div style={{ padding: isMobile ? 20 : 32, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {featured.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <h2 style={{ margin: 0, color: "#0A0A0A", fontSize: isMobile ? 24 : 32, fontFamily: "Sora, sans-serif", fontWeight: 600, lineHeight: "41.6px" }}>{featured.title}</h2>
                <p style={{ margin: 0, color: "#4A4A4A", fontSize: 16, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "25.6px" }}>{featured.description}</p>
                <ProjectLinks liveUrl={featured.liveUrl} repoUrl={featured.repoUrl} />
              </div>
            </div>
          )}

          {/* Rest */}
          {visibleRest.map((project) => (
            <div key={project.id} style={{ width: "100%", background: "#ffffff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <img src={project.image} alt={project.title} style={{ width: "100%", height: isMobile ? 200 : 300, objectFit: "cover", display: "block" }} />
              <div style={{ padding: isMobile ? 20 : 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <h3 style={{ margin: 0, color: "#0A0A0A", fontSize: isMobile ? 18 : 20, fontFamily: "Sora, sans-serif", fontWeight: 600, lineHeight: "28px" }}>{project.title}</h3>
                <p style={{ margin: 0, color: "#4A4A4A", fontSize: 15, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "25.6px" }}>{project.description}</p>
                <ProjectLinks liveUrl={project.liveUrl} repoUrl={project.repoUrl} />
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        {!showAll && rest.length > 2 && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => setShowAll(true)}
              style={{ padding: "16px 40px", background: "#ffffff", borderRadius: 9999, border: "1px solid rgba(0,0,0,0.10)", color: "#0A0A0A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2, cursor: "pointer", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#FF4D8D"; e.currentTarget.style.color = "#FF4D8D"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.color = "#0A0A0A"; }}
            >
              LOAD MORE PROJECTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}