import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import EcoSpend from '../assets/Eco-landingpage.png';
import TAG from '../assets/TAG.png';
import Dev from '../assets/Dev.png';

const projects = [
  {
    id: "ecospend",
    title: "EcoSpend",
    category: "FINTECH · SDG 12",
    description:
      "Sustainability-focused carbon footprint tracker that scans receipts, categorizes spending, and generates eco insights. Built with a full receipt scanning flow, dashboard with charts, and auth system.",
    tags: ["REACT", "VITE", "TAILWIND CSS"],
    image: EcoSpend,
    featured: true,
  },
  {
    id: "awakened-girl",
    title: "The Awakened Girl",
    category: "BRAND · CONTENT",
    description:
      "Dark feminine content brand targeting ambitious women in STEM. Covers brand identity, content strategy, and digital presence.",
    tags: ["AI", "BRANDING"],
    image: TAG,
  },
  {
    id: "portfolio",
    title: "Dev Portfolio",
    category: "FRONTEND · PERSONAL",
    description:
      "Developer portfolio, tech stack marquee, and project showcases. Built with React, Vite, and React Router.",
    tags: ["REACT", "VITE", "REACT ROUTER"],
    image: Dev,
  },
];

function Tag({ label }) {
  return (
    <span
      style={{
        padding: "4px 12px",
        background: "rgba(255, 77, 141, 0.08)",
        borderRadius: 9999,
        border: "1px solid rgba(255, 77, 141, 0.20)",
        color: "#FF4D8D",
        fontSize: 13,
        fontFamily: "JetBrains Mono, monospace",
        fontWeight: 500,
        lineHeight: "21px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function ImagePlaceholder({ height, label }) {
  return (
    <div
      style={{
        width: "100%",
        height,
        background: "linear-gradient(135deg, #FFF0F7 0%, #F5F0FF 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          color: "#FF4D8D",
          fontSize: 13,
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 700,
          opacity: 0.4,
          letterSpacing: 1.2,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function FeaturedProjects() {
  const featured = projects.find((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <section
      style={{
        width: "100%",
        padding: "120px 64px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 64,
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              color: "#FF4D8D",
              fontSize: 12,
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 700,
              letterSpacing: 1.2,
            }}
          >
            PORTFOLIO SELECTS
          </span>
          <h2
            style={{
              margin: 0,
              color: "#0A0A0A",
              fontSize: 32,
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              lineHeight: "41.6px",
            }}
          >
            Featured Projects
          </h2>
        </div>

        <Link
          to="/projects"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "#4A4A4A",
            fontSize: 16,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            textDecoration: "none",
            paddingBottom: 8,
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D8D")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4A4A")}
        >
          View All
          <FiArrowRight size={15} />
        </Link>
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          alignItems: "start",
        }}
      >
        {/* Featured — left, tall */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              width: "100%",
              borderRadius: 24,
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {featured.image ? (
              <img
                src={featured.image}
                alt={featured.title}
                style={{ width: "100%", height: 426, objectFit: "cover", display: "block" }}
              />
            ) : (
              <ImagePlaceholder height={426} label="ECOSPEND · SCREENSHOT" />
            )}

            {/* Tags overlay */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                display: "flex",
                gap: 8,
              }}
            >
              {featured.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                color: "#FF4D8D",
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                letterSpacing: 1.2,
              }}
            >
              {featured.category}
            </span>
            <h3
              style={{
                margin: 0,
                color: "#0A0A0A",
                fontSize: 32,
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                lineHeight: "41.6px",
              }}
            >
              {featured.title}
            </h3>
            <p
              style={{
                margin: 0,
                maxWidth: 540,
                color: "#4A4A4A",
                fontSize: 16,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "25.6px",
              }}
            >
              {featured.description}
            </p>
          </div>
        </div>

        {/* Secondary — right column, two stacked */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {secondary.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingBottom: 4,
              }}
            >
              <div
                style={{
                  width: "100%",
                  borderRadius: 24,
                  border: "1px solid rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
                  />
                ) : (
                  <ImagePlaceholder
                    height={280}
                    label={`${project.title.toUpperCase()} · SCREENSHOT`}
                  />
                )}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8 }}>
                <span
                  style={{
                    color: "#FF4D8D",
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    margin: 0,
                    color: "#0A0A0A",
                    fontSize: 18,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    lineHeight: "28.8px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#4A4A4A",
                    fontSize: 14,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    lineHeight: "22px",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}