import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import Favour from '../assets/Favour-img.png';

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "120px 64px 80px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        
        {/* Hero row — headline + image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left — headline + subtext + buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 72,
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  lineHeight: "110%",
                }}
              >
                <span style={{ color: "#0A0A0A" }}>Crafting </span>
                <span style={{ color: "#FF4D8D" }}>Digital</span>
                <br />
                <span style={{ color: "#FF4D8D" }}>Experiences</span>
                <span style={{ color: "#0A0A0A" }}> with</span>
                <br />
                <span style={{ color: "#0A0A0A" }}>Code</span>
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: 600,
                  color: "#4A4A4A",
                  fontSize: 18,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  lineHeight: "29px",
                }}
              >
                I specialize in building high-performance,
                accessible, and visually stunning web applications with
                technical mastery and creative artistry.
              </p>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <Link
                to="/projects"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 32px",
                  background: "#FF4D8D",
                  borderRadius: 25,
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects
                <FiArrowRight size={16} color="#ffffff" />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px 32px",
                  borderRadius: 25,
                  border: "1px solid #FF4D8D",
                  color: "#FF4D8D",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  lineHeight: "24px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(255, 77, 141, 0.06)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — image placeholder */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                maxWidth: 520,
                background: "linear-gradient(135deg, #FFF0F7 0%, #FFE4EF 100%)",
                borderRadius: 16,
                border: "1px solid rgba(255, 77, 141, 0.12)",
                transform: "rotate(2deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Swap src when you have your photo */}
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

        {/* Code card */}
        <div
          style={{
            width: 368,
            padding: "24px 24px 48px",
            background: "#0A0A0A",
            borderRadius: 24,
            border: "1px solid rgba(255, 77, 141, 0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: 8 }}>
            {["#FFB4AB", "#FF4D8D", "#FF85B3"].map((color) => (
              <div
                key={color}
                style={{
                  width: 12,
                  height: 12,
                  background: color,
                  borderRadius: 9999,
                }}
              />
            ))}
          </div>

          {/* Skeleton lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                width: "65%",
                height: 8,
                background: "rgba(255, 77, 141, 0.20)",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: "100%",
                height: 8,
                background: "rgba(255, 77, 141, 0.08)",
                borderRadius: 4,
              }}
            />
            <div
              style={{
                width: "72%",
                height: 8,
                background: "rgba(255, 77, 141, 0.08)",
                borderRadius: 4,
              }}
            />

            {/* Stat badges */}
            <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
              <div
                style={{
                  flex: 1,
                  height: 80,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  border: "1px solid rgba(255, 77, 141, 0.20)",
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
                    fontWeight: 400,
                  }}
                >
                  99% LIGHTHOUSE
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  height: 80,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12,
                  border: "1px solid rgba(255, 77, 141, 0.20)",
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
                    fontWeight: 400,
                  }}
                >
                  REACT / VITE
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingTop: 32,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#9A9A9A",
                    fontSize: 14,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 500,
                  }}
                >
                  Optimization
                </span>
                <span
                  style={{
                    color: "#FF4D8D",
                    fontSize: 14,
                    fontFamily: "JetBrains Mono, monospace",
                    fontWeight: 500,
                  }}
                >
                  Complete
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 4,
                  background: "rgba(255, 77, 141, 0.10)",
                  borderRadius: 9999,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "95%",
                    height: "100%",
                    background: "linear-gradient(90deg, #FF4D8D, #ff85b3)",
                    borderRadius: 9999,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}