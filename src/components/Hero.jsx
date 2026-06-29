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
    flexDirection: isMobile ? "column-reverse" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: isMobile ? 40 : 64,
  }}
>
  {/* Left Content */}
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: isMobile ? 20 : 32,
      textAlign: isMobile ? "center" : "left",
      alignItems: isMobile ? "center" : "flex-start",
    }}
  >
    <h1
      style={{
        margin: 0,
        fontSize: isMobile ? 42 : 72,
        fontFamily: "Sora, sans-serif",
        fontWeight: 800,
        lineHeight: 1.1,
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
        maxWidth: 560,
        color: "#4A4A4A",
        fontSize: isMobile ? 16 : 18,
        fontFamily: "Inter, sans-serif",
        lineHeight: "30px",
      }}
    >
      I specialize in building high-performance, accessible, and visually
      stunning web applications with technical mastery and creative artistry.
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 12,
        width: isMobile ? "100%" : "auto",
      }}
    >
      <Link
        to="/Projects"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          padding: "14px 28px",
          background: "#FF4D8D",
          color: "#fff",
          borderRadius: 30,
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        View Projects
        <FiArrowRight size={16} />
      </Link>

      <Link
        to="/contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "14px 28px",
          border: "1px solid #FF4D8D",
          color: "#FF4D8D",
          borderRadius: 30,
          textDecoration: "none",
          fontWeight: 700,
        }}
      >
        Get in Touch
      </Link>
    </div>
  </div>

  {/* Right Image */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      width: "100%",
    }}
  >
    <div
      style={{
        width: isMobile ? "85%" : "100%",
        maxWidth: isMobile ? 320 : 500,
        aspectRatio: "1 / 1",
        borderRadius: 24,
        overflow: "hidden",
        background: "linear-gradient(135deg,#FFF0F7,#FFE4EF)",
        border: "1px solid rgba(255,77,141,.15)",
      }}
    >
      <img
        src={Favour}
        alt="Favour Okarekpe"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}