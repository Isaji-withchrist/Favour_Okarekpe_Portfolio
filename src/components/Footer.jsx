import useIsMobile from "../hooks/useIsMobile";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/favour-okarekpe-38696b419/" },
  { label: "GitHub", href: "https://github.com/Isaji-withchrist" },
  { label: "Twitter", href: "https://x.com/Isaji_theebest" },
  { label: "Source Code", href: "https://github.com/Isaji-withchrist/Favour_Okarekpe_Portfolio" },
];

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer style={{ width: "100%", background: "#0A0A0A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: isMobile ? "40px 20px" : 64,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 24 : 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ color: "#FF4D8D", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2 }}>
            Favour Okarekpe
          </span>
          <span style={{ color: "#9A9A9A", fontSize: 16, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "25.6px" }}>
            © {new Date().getFullYear()} Favour Okarekpe.
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 16 : 32 }}>
        {socials.map(({ label, href }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#9A9A9A",
      fontSize: isMobile ? 14 : 16,
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      textDecoration: "none",
      transition: "color 0.2s",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.color = "#FF4D8D";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.color = "#9A9A9A";
    }}
  >
    {label}
  </a>
))}
        </div>
      </div>
    </footer>
  );
}