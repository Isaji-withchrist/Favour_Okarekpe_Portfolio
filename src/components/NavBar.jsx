import { useState } from "react";
import { NavLink, Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import useIsMobile from "../hooks/useIsMobile";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/Projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "16px 20px" : "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{
            color: "#0A0A0A",
            fontSize: isMobile ? 20 : 24,
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Favour Okarekpe
        </NavLink>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={label}
                to={path}
                end={path === "/"}
                style={({ isActive }) => ({
                  padding: 0,
                  paddingBottom: 4,
                  borderBottom: isActive ? "2px solid #FF4D8D" : "2px solid transparent",
                  color: isActive ? "#FF4D8D" : "#4A4A4A",
                  fontSize: 16,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                })}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}

        {/* Desktop resume button */}
        {!isMobile && (
          <a
            href="/Favour_Okarekpe_Resume.pdf"
            style={{
              padding: "8px 24px",
              background: "#FF4D8D",
              borderRadius: 18,
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Resume
          </a>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {menuOpen
              ? <FiX size={24} color="#0A0A0A" />
              : <FiMenu size={24} color="#0A0A0A" />
            }
          </button>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && menuOpen && (
        <div
          style={{
            width: "100%",
            background: "#ffffff",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              end={path === "/"}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                padding: "14px 0",
                borderBottom: "1px solid rgba(0,0,0,0.04)",
                color: isActive ? "#FF4D8D" : "#0A0A0A",
                fontSize: 18,
                fontFamily: "Inter, sans-serif",
                fontWeight: isActive ? 700 : 400,
                textDecoration: "none",
                display: "block",
              })}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="/Favour_Okarekpe_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 16,
              padding: "14px 0",
              background: "#FF4D8D",
              borderRadius: 12,
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              display: "block",
            }}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}