import React from "react";
import '../App.css';
const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/favour-okarekpe-38696b419/" },
    { label: "GitHub", href: "https://github.com/Isaji-withchrist" },
    { label: "Twitter", href: "https://x.com/Isaji_theebest" },
    { label: "Source Code", href: "https://github.com/Isaji-withchrist/Favour_Okarekpe_Portfolio" },
  ];
  
  export default function Footer() {
    return (
      <footer
        style={{
          width: "100%",
          background: "#0A0A0A",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: 64,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left — branding */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                color: "#FF4D8D",
                fontSize: 12,
                fontFamily: "JetBrains Mono, monospace",
                fontWeight: 700,
                letterSpacing: 1.2,
                lineHeight: "12px",
              }}
            >
              Favour Okarekpe
            </span>
            <span
              style={{
                color: "#9A9A9A",
                fontSize: 16,
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                lineHeight: "25.6px",
              }}
            >
              © {new Date().getFullYear()} Favour Okarekpe.
            </span>
          </div>
  
          {/* Right — social links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9A9A9A",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  lineHeight: "25.6px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D8D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9A9A")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }