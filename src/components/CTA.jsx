import { Link } from "react-router";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

export default function CTA() {
  return (
    <section
      style={{
        width: "100%",
        padding: "0 64px 120px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "95px 96px",
          boxSizing: "border-box",
          background: "#0A0A0A",
          borderRadius: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 64,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Subtle pink glow top-center */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background:
              "radial-gradient(ellipse at center, rgba(255, 77, 141, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Text block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <h2
            style={{
              margin: 0,
              maxWidth: 768,
              textAlign: "center",
              fontSize: 40,
              fontFamily: "Sora, sans-serif",
              fontWeight: 600,
              lineHeight: "110%",
            }}
          >
            <span style={{ color: "#ffffff" }}>Ready to elevate your </span>
            <span style={{ color: "#FF4D8D" }}>digital presence</span>
            <span style={{ color: "#ffffff" }}>?</span>
          </h2>

          <p
            style={{
              margin: 0,
              textAlign: "center",
              color: "#9A9A9A",
              fontSize: 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "28.8px",
            }}
          >
            Currently accepting freelance opportunities and collaborations.
            <br />
            Let's build something exceptional together.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          {/* Primary */}
          <Link
            to="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 40px",
              background: "#FF4D8D",
              borderRadius: 25,
              color: "#ffffff",
              fontSize: 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "28.8px",
              textDecoration: "none",
              transition: "opacity 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project
            <FiArrowRight size={18} color="#ffffff" />
          </Link>

          {/* Secondary */}
           <Link
            to="https://www.linkedin.com/in/favour-okarekpe-38696b419/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "20px 40px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: 25,
              border: "1px solid rgba(255, 255, 255, 0.10)",
              color: "#ffffff",
              fontSize: 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "28.8px",
              textDecoration: "none",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.10)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.05)")
            }
          >
            Social Presence
            <FiExternalLink size={18} color="#ffffff" />
          </Link>
        </div>
      </div>
    </section>
  );
}