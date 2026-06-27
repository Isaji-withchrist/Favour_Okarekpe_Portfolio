import { Link } from "react-router";
import { NavLink } from "react-router";
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/Projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
        backdropFilter: "blur(12px)",
        color: "#122131"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding:"16px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          style={{
            color: "#B2FFF#7",
            fontSize: 32,
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            lineHeight: "52.8px",
            textDecoration: "none",
          }}
        >
          Favour Okarekpe
        </NavLink>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={label}
              to={path}
              end={path === "/"}
              style={({ isActive }) => ({
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                paddingBottom: 4,
                borderBottom: isActive ? "2px solid #FF4D8D" : "2px solid transparent",
                color: isActive ? "#FF4D8D" : "#B9CACB",
                fontSize: 16,
                fontFamily: "Inter, sans-serif",
                fontWeight: isActive ? 700 : 500,
                lineHeight: "24px",
                textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s",
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Resume Button */}
        <Link
          to="/Favour_Okarekpe_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "8px 24px",
            background: "#FF4D8D",
            borderRadius: 18,
            color: "#00363A",
            fontSize: 16,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: "24px",
            textDecoration: "none",
            display: "inline-block",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}