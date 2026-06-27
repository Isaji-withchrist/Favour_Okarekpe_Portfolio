import React from "react";
import '../App.css';
import { FiCode, FiLayout, FiGlobe } from "react-icons/fi";
import Favour from '../assets/Favour-img.png';

const frontendSkills = [
  { label: "React / Vite", level: 90 },
  { label: "Tailwind CSS", level: 95 },
  { label: "JavaScript", level: 88 },
  { label: "HTML & CSS", level: 98 },
  { label: "Figma → Code", level: 85 },
];

const tools = [
  "React Router", "Git & GitHub", "Sanity CMS",
  "Figma", "Vite", "Vercel", "Netlify", "Render",
];

function SkillBar({ label, level }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span
          style={{
            color: "#4A4A4A",
            fontSize: 14,
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            lineHeight: "21px",
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "#FF4D8D",
            fontSize: 14,
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            lineHeight: "21px",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          width: "100%",
          height: 4,
          background: "rgba(255,77,141,0.10)",
          borderRadius: 9999,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${level}%`,
            height: "100%",
            background: "linear-gradient(90deg, #FF4D8D, #ff85b3)",
            borderRadius: 9999,
          }}
        />
      </div>
    </div>
  );
}

export default function AboutMain() {
  return (
    <section
      style={{
        width: "100%",
        paddingTop: 128,
        paddingBottom: 120,
        paddingLeft: 64,
        paddingRight: 64,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 120,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 120,
        }}
      >
        {/* ── Hero row ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left — text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <span
              style={{
                color: "#FF4D8D",
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                letterSpacing: 1.2,
              }}
            >
              FRONTEND ENGINEER · LAGOS, NIGERIA
            </span>

            <h1
              style={{
                margin: 0,
                fontSize: 72,
                fontFamily: "Sora, sans-serif",
                fontWeight: 800,
                lineHeight: "110%",
              }}
            >
              <span style={{ color: "#0A0A0A" }}>Building Digital</span>
              <br />
              <span style={{ color: "#FF4D8D" }}>Experiences.</span>
            </h1>

            <p
              style={{
                margin: 0,
                maxWidth: 512,
                color: "#4A4A4A",
                fontSize: 18,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "28.8px",
              }}
            >
              I'm a Computer Science student at Adeleke University with a
              strong focus on frontend development — turning designs into fast,
              accessible, and visually intentional web experiences.
            </p>
          </div>

          {/* Right — photo */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                maxWidth: 520,
                background: "linear-gradient(135deg, #FFF0F7 0%, #FFE4EF 100%)",
                borderRadius: 16,
                border: "1px solid rgba(255,77,141,0.12)",
                transform: "rotate(2deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Swap this img src when you have your photo */}
              <span
                style={{
                  color: "#FF4D8D",
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 700,
                  opacity: 100,
                  letterSpacing: 1.2,
                }}
              >
                <img src={Favour}/>
              </span>
            </div>
          </div>
        </div>

        {/* ── Journey & Philosophy ── */}
        <div
          style={{
            padding: 64,
            background: "#0A0A0A",
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            gap: 48,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Pink glow */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 300,
              height: 300,
              background: "rgba(255,77,141,0.08)",
              borderRadius: 9999,
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h2
              style={{
                margin: 0,
                color: "#ffffff",
                fontSize: 32,
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                lineHeight: "41.6px",
              }}
            >
              Journey &amp; Philosophy
            </h2>
            <div
              style={{
                width: 96,
                height: 4,
                background: "#FF4D8D",
                borderRadius: 9999,
              }}
            />
          </div>

          {/* Paragraphs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p
              style={{
                margin: 0,
                color: "#E0E0E0",
                fontSize: 18,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "29.25px",
              }}
            >
              I came into frontend development through curiosity — I wanted to
              understand why some websites felt effortless and others felt like
              a fight. That question pulled me into React, into design systems,
              into the space where logic and aesthetics meet. At Adeleke
              University studying Computer Science, I've been building real
              products rather than waiting to graduate to start: EcoSpend, a
              fintech SDG app with receipt scanning and carbon tracking; EMERGE,
              a full CMS I built for a systems analysis project; and an African
              fashion editorial site that started as a creative experiment and
              became proof that code can be art.
            </p>
            <p
              style={{
                margin: 0,
                color: "#9A9A9A",
                fontSize: 18,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "28.8px",
              }}
            >
              My approach is simple: build things that work well and look
              intentional. I care about the details — the spacing, the
              transition timing, the component that loads fast on a 3G
              connection in Lagos. I also run a content brand called The
              Awakened Girl, which taught me that audience, clarity, and
              consistency matter as much in design as they do in storytelling.
              I bring that same editorial eye to every interface I build.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 8 }}>
              {[FiLayout, FiCode, FiGlobe].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(255,77,141,0.08)",
                    borderRadius: 9999,
                    border: "1px solid rgba(255,77,141,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color="#FF4D8D" />
                </div>
              ))}
              <span
                style={{
                  color: "#9A9A9A",
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 700,
                  letterSpacing: 1.2,
                }}
              >
                Design • Logic • Detail
              </span>
            </div>
          </div>
        </div>

        {/* ── Technical Mastery ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  color: "#FF4D8D",
                  fontSize: 12,
                  fontFamily: "JetBrains Mono, monospace",
                  fontWeight: 700,
                  letterSpacing: 1.2,
                }}
              >
                TOOLKIT
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
                Technical Skills
              </h2>
            </div>
            <span
              style={{
                padding: "8px 16px",
                background: "#F9F9F9",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.06)",
                color: "#4A4A4A",
                fontSize: 13,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 500,
              }}
            >
              Updated 2026
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
            }}
          >
            {/* Skill bars */}
            <div
              style={{
                padding: 32,
                background: "#ffffff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 32,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    padding: 12,
                    background: "rgba(255,77,141,0.08)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiLayout size={20} color="#FF4D8D" />
                </div>
                <span
                  style={{
                    color: "#0A0A0A",
                    fontSize: 24,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    lineHeight: "38.4px",
                  }}
                >
                  Frontend
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {frontendSkills.map((skill) => (
                  <SkillBar key={skill.label} {...skill} />
                ))}
              </div>
            </div>

            {/* Tools grid */}
            <div
              style={{
                padding: 32,
                background: "#ffffff",
                borderRadius: 16,
                border: "1px solid rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: 32,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    padding: 12,
                    background: "rgba(255,77,141,0.08)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FiCode size={20} color="#FF4D8D" />
                </div>
                <span
                  style={{
                    color: "#0A0A0A",
                    fontSize: 24,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 400,
                    lineHeight: "38.4px",
                  }}
                >
                  Tools & Stack
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "8px 16px",
                      background: "#F9F9F9",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.06)",
                      color: "#0A0A0A",
                      fontSize: 13,
                      fontFamily: "JetBrains Mono, monospace",
                      fontWeight: 500,
                      lineHeight: "21px",
                      transition: "border-color 0.2s, color 0.2s",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,77,141,0.30)";
                      e.currentTarget.style.color = "#FF4D8D";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.color = "#0A0A0A";
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Experience History ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span
              style={{
                color: "#FF4D8D",
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                letterSpacing: 1.2,
              }}
            >
              MILESTONES
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
              Experience History
            </h2>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 16,
                bottom: 16,
                width: 1,
                background: "rgba(0,0,0,0.08)",
                transform: "translateX(-50%)",
              }}
            />

            {/* Entry 1 — current */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Left card */}
              <div
                style={{
                  padding: "32px 24px",
                  background: "#ffffff",
                  borderRadius: 16,
                  border: "1px solid rgba(255,77,141,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: "#FF4D8D",
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  MAY 2026 – PRESENT
                </span>
                <h3
                  style={{
                    margin: 0,
                    textAlign: "right",
                    color: "#0A0A0A",
                    fontSize: 20,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  Webometrics Intern
                </h3>
                <span
                  style={{
                    color: "#9A9A9A",
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    textAlign: "right",
                  }}
                >
                  Yaba College of Technology
                </span>
                <p
                  style={{
                    margin: 0,
                    textAlign: "right",
                    color: "#4A4A4A",
                    fontSize: 16,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Supporting web presence and digital visibility initiatives,
                  applying frontend skills to improve institutional web
                  performance and ranking metrics.
                </p>
              </div>

              {/* Right — empty */}
              <div />

              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 12,
                  height: 12,
                  background: "#FF4D8D",
                  borderRadius: 9999,
                  boxShadow: "0 0 10px rgba(255,77,141,0.5)",
                  zIndex: 1,
                }}
              />
            </div>

            {/* Entry 2 — Adeleke */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Left — empty */}
              <div />

              {/* Right card */}
              <div
                style={{
                  padding: "32px 24px",
                  background: "#ffffff",
                  borderRadius: 16,
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    color: "#9A9A9A",
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  2024 – PRESENT
                </span>
                <h3
                  style={{
                    margin: 0,
                    color: "#0A0A0A",
                    fontSize: 20,
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 600,
                    lineHeight: "32px",
                  }}
                >
                  BSc Computer Science
                </h3>
                <span
                  style={{
                    color: "#9A9A9A",
                    fontSize: 12,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 700,
                    letterSpacing: 1.2,
                  }}
                >
                  Adeleke University, Ede
                </span>
                <p
                  style={{
                    margin: 0,
                    color: "#4A4A4A",
                    fontSize: 16,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    lineHeight: "25.6px",
                  }}
                >
                  Studying systems analysis, OOP, database design, and web
                  development. Building real projects — EcoSpend and EMERGE —
                  alongside coursework to stay sharp on production-level code.
                </p>
              </div>

              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 12,
                  height: 12,
                  background: "#F9F9F9",
                  borderRadius: 9999,
                  border: "1px solid rgba(0,0,0,0.15)",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}