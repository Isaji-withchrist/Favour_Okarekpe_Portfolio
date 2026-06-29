import { useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";

const techs = ["REACT", "VITE", "TAILWIND CSS", "JAVASCRIPT", "FIGMA", "HTML & CSS", "GIT", "REACT ROUTER"];
const items = [...techs, ...techs];

export default function TechStack() {
  const isMobile = useIsMobile();
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationId;
    let position = 0;
    const animate = () => {
      position -= 1;
      if (position <= -track.scrollWidth / 2) position = 0;
      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        paddingTop: isMobile ? 40 : 64,
        paddingBottom: isMobile ? 40 : 64,
        background: "#ffffff",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}
    >
      <div ref={trackRef} style={{ display: "flex", alignItems: "center", gap: isMobile ? 32 : 64, whiteSpace: "nowrap", willChange: "transform" }}>
        {items.map((tech, i) => (
          <span
            key={i}
            style={{
              fontSize: isMobile ? 24 : 48,
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              color: i % 2 === 0 ? "#0A0A0A" : "#FF4D8D",
              opacity: 0.15,
              flexShrink: 0,
              cursor: "default",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.15")}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}