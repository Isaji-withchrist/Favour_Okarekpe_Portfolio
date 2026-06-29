import { Link } from "react-router";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import useIsMobile from "../hooks/useIsMobile";

export default function CTA() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "0 20px 80px" : "0 64px 120px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: isMobile ? "48px 24px" : "95px 96px",
          boxSizing: "border-box",
          background: "#0A0A0A",
          borderRadius: isMobile ? 24 : 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? 32 : 64,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)",
            width: 400, height: 300,
            background: "radial-gradient(ellipse at center, rgba(255,77,141,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, position: "relative" }}>
          <h2
            style={{
              margin: 0,
              maxWidth: 768,
              textAlign: "center",
              fontSize: isMobile ? 28 : 40,
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              lineHeight: "110%",
            }}
          >
            <span style={{ color: "#ffffff" }}>Ready to elevate your </span>
            <span style={{ color: "#FF4D8D" }}>digital presence</span>
            <span style={{ color: "#ffffff" }}>?</span>
          </h2>
          <p style={{ margin: 0, textAlign: "center", color: "#9A9A9A", fontSize: isMobile ? 16 : 18, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "28.8px" }}>
            Currently accepting freelance opportunities and collaborations.{!isMobile && <br />} Let's build something exceptional together.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", gap: 16, position: "relative", width: isMobile ? "100%" : "auto" }}>
          <Link
            to="/contact"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "16px 32px",
              background: "#FF4D8D",
              borderRadius: 25,
              color: "#ffffff",
              fontSize: isMobile ? 16 : 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              transition: "opacity 0.2s",
              width: isMobile ? "100%" : "auto",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project <FiArrowRight size={18} color="#ffffff" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/favour-okarekpe-38696b419/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              padding: "16px 32px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 25,
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#ffffff",
              fontSize: isMobile ? 16 : 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              transition: "background 0.2s",
              width: isMobile ? "100%" : "auto",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.10)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
          >
            Social Presence <FiExternalLink size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}