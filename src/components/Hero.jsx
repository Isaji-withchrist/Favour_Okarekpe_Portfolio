import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import Favour from "../assets/Favour-img.png";
import useIsMobile from "../hooks/useIsMobile";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: isMobile ? "100px 20px 60px" : "120px 64px 80px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 32 : 48,
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            background: "#FFF0F7",
            borderRadius: 9999,
            border: "1px solid rgba(255,77,141,0.20)",
            alignSelf: "flex-start",
          }}
        >
          <div style={{ width: 8, height: 8, background: "#FF4D8D", borderRadius: 9999 }} />
          <span style={{ color: "#FF4D8D", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}>
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Hero row */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 32 : 64,
            alignItems: isMobile ? "flex-start" : "center",
          }}
        >
          {/* Left */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: isMobile ? 20 : 32 }}>
            <h1
              style={{
                margin: 0,
                fontSize: isMobile ? 40 : 72,
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
                color: "#4A4A4A",
                fontSize: isMobile ? 16 : 18,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "29px",
              }}
            >
              I specialize in building high-performance, accessible, and visually
              stunning web applications with technical mastery and creative artistry.
            </p>

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 12 }}>
              <Link
                to="/Projects"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 28px",
                  background: "#FF4D8D",
                  borderRadius: 25,
                  color: "#ffffff",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Projects <FiArrowRight size={16} color="#ffffff" />
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 28px",
                  borderRadius: 25,
                  border: "1px solid #FF4D8D",
                  color: "#FF4D8D",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,77,141,0.06)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right — photo, hidden on mobile */}
          {!isMobile && (
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  maxWidth: 520,
                  background: "linear-gradient(135deg, #FFF0F7 0%, #FFE4EF 100%)",
                  borderRadius: 16,
                  border: "1px solid rgba(255,77,141,0.12)",
                  transform: "rotate(2deg)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={Favour}
                  alt="Favour Okarekpe"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Code card */}
        <div
          style={{
            width: isMobile ? "100%" : 368,
            padding: "24px 24px 48px",
            background: "#0A0A0A",
            borderRadius: 24,
            border: "1px solid rgba(255,77,141,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            {["#FFB4AB", "#FF4D8D", "#FF85B3"].map((color) => (
              <div key={color} style={{ width: 12, height: 12, background: color, borderRadius: 9999 }} />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ width: "65%", height: 8, background: "rgba(255,77,141,0.20)", borderRadius: 4 }} />
            <div style={{ width: "100%", height: 8, background: "rgba(255,77,141,0.08)", borderRadius: 4 }} />
            <div style={{ width: "72%", height: 8, background: "rgba(255,77,141,0.08)", borderRadius: 4 }} />

            <div style={{ display: "flex", gap: 16, marginTop: 4 }}>
              {["99% LIGHTHOUSE", "REACT / VITE"].map((label) => (
                <div
                  key={label}
                  style={{
                    flex: 1,
                    height: 80,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,77,141,0.20)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#FF4D8D", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 32 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#9A9A9A", fontSize: 13, fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}>Optimization</span>
                <span style={{ color: "#FF4D8D", fontSize: 13, fontFamily: "JetBrains Mono, monospace", fontWeight: 500 }}>Complete</span>
              </div>
              <div style={{ width: "100%", height: 4, background: "rgba(255,77,141,0.10)", borderRadius: 9999, overflow: "hidden" }}>
                <div style={{ width: "95%", height: "100%", background: "linear-gradient(90deg, #FF4D8D, #ff85b3)", borderRadius: 9999 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}