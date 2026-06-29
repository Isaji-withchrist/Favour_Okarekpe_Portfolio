import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiCode, FiMail, FiSend } from "react-icons/fi";
import { Link } from "react-router";
import useIsMobile from "../hooks/useIsMobile";

const socials = [
  { label: "GitHub", href: "https://github.com/Isaji-withchrist", icon: <FiGithub size={18} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/favour-okarekpe-38696b419/", icon: <FiLinkedin size={18} /> },
  { label: "Twitter", href: "https://twitter.com/favour-okarekpe", icon: <FiTwitter size={18} /> },
  { label: "Source Code", href: "https://github.com/Isaji-withchrist/Favour_Okarekpe_Portfolio", icon: <FiCode size={18} /> },
];

export default function ContactMain() {
  const isMobile = useIsMobile();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section
      style={{
        width: "100%",
        paddingTop: isMobile ? 100 : 120,
        paddingBottom: isMobile ? 80 : 120,
        paddingLeft: isMobile ? 20 : 64,
        paddingRight: isMobile ? 20 : 64,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 40 : 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: -100, right: -50, width: 400, height: 400, background: "rgba(255,77,141,0.08)", borderRadius: 9999, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 200, left: -80, width: 320, height: 320, background: "rgba(255,77,141,0.05)", borderRadius: 9999, filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: isMobile ? 40 : 64 }}>

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1 style={{ margin: 0, fontSize: isMobile ? 36 : 72, fontFamily: "Sora, sans-serif", fontWeight: 800, lineHeight: "110%" }}>
            <span style={{ color: "#0A0A0A" }}>Let's build something </span>
            <span style={{ color: "#FF4D8D" }}>legendary.</span>
          </h1>
          <p style={{ margin: 0, maxWidth: 672, color: "#4A4A4A", fontSize: isMobile ? 16 : 18, fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "28.8px" }}>
            Do you have a technical challenge or a project idea? Reach out and let's discuss how we can bring it to life.
          </p>
        </div>

        {/* Two column — stacks on mobile */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 24 : 32, alignItems: "start" }}>

          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Contact card */}
            <div style={{ padding: isMobile ? 20 : 32, background: "#ffffff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ color: "#9A9A9A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2 }}>DIRECT CONTACT</span>
                <a
                  href="mailto:okarekpefavour@gmail.com"
                  style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#0A0A0A", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D8D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#0A0A0A")}
                >
                  <FiMail size={20} color="#FF4D8D" />
                  <span style={{ fontSize: isMobile ? 15 : 20, fontFamily: "Sora, sans-serif", fontWeight: 600, lineHeight: "1.4", wordBreak: "break-all" }}>
                    okarekpefavour@gmail.com
                  </span>
                </a>
              </div>

              <div style={{ width: "100%", height: 1, background: "rgba(0,0,0,0.06)" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ color: "#9A9A9A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2 }}>SOCIAL LINKS</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {socials.map(({ label, href, icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: 14, background: "#F9F9F9", borderRadius: 8, border: "1px solid rgba(0,0,0,0.04)", textDecoration: "none", color: "#0A0A0A", fontSize: 15, fontFamily: "Inter, sans-serif", fontWeight: 400, transition: "border-color 0.2s, color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,77,141,0.30)"; e.currentTarget.style.color = "#FF4D8D"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)"; e.currentTarget.style.color = "#0A0A0A"; }}
                    >
                      <span style={{ color: "#FF4D8D" }}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status card */}
            <div style={{ padding: 24, background: "#0A0A0A", borderRadius: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                {["rgba(239,68,68,0.5)", "rgba(234,179,8,0.5)", "rgba(34,197,94,0.5)"].map((c) => (
                  <div key={c} style={{ width: 12, height: 12, background: c, borderRadius: 9999 }} />
                ))}
              </div>
              {["> status: available_for_projects", "> location: Remote & Lagos, Nigeria (WAT)", "> response_time: within_24hrs", "> _"].map((line) => (
                <span key={line} style={{ color: "rgba(255,77,141,0.80)", fontSize: 13, fontFamily: "JetBrains Mono, monospace", fontWeight: 500, lineHeight: "21px" }}>
                  {line}
                </span>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ padding: isMobile ? 20 : 48, background: "#ffffff", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 32 }}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, minHeight: 300, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, background: "rgba(255,77,141,0.10)", borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <FiSend size={24} color="#FF4D8D" />
                </div>
                <h3 style={{ margin: 0, color: "#0A0A0A", fontSize: 24, fontFamily: "Sora, sans-serif", fontWeight: 600 }}>Message sent!</h3>
                <p style={{ margin: 0, color: "#4A4A4A", fontSize: 16, fontFamily: "Inter, sans-serif" }}>I'll respond within the next 24 hours!</p>
              </div>
            ) : (
              <>
                {[
                  { id: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
                  { id: "email", label: "EMAIL ADDRESS", type: "email", placeholder: "email@example.com" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <span style={{ color: "#9A9A9A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2 }}>{label}</span>
                    <input
                      type={type}
                      name={id}
                      placeholder={placeholder}
                      value={form[id]}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", borderBottom: "2px solid rgba(0,0,0,0.10)", outline: "none", color: "#0A0A0A", fontSize: isMobile ? 16 : 18, fontFamily: "Inter, sans-serif", fontWeight: 400, boxSizing: "border-box", transition: "border-color 0.2s" }}
                      onFocus={(e) => (e.target.style.borderColor = "#FF4D8D")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.10)")}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <span style={{ color: "#9A9A9A", fontSize: 12, fontFamily: "JetBrains Mono, monospace", fontWeight: 700, letterSpacing: 1.2 }}>MESSAGE</span>
                  <textarea
                    name="message"
                    placeholder="Project details, technical requirements, or just a hello..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", borderBottom: "2px solid rgba(0,0,0,0.10)", outline: "none", color: "#0A0A0A", fontSize: isMobile ? 16 : 18, fontFamily: "Inter, sans-serif", fontWeight: 400, resize: "none", boxSizing: "border-box", transition: "border-color 0.2s" }}
                    onFocus={(e) => (e.target.style.borderColor = "#FF4D8D")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.10)")}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{ width: "100%", padding: "20px", background: "#FF4D8D", borderRadius: 25, border: "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, color: "#ffffff", fontSize: 16, fontFamily: "Sora, sans-serif", fontWeight: 600, letterSpacing: 1.2, cursor: "pointer", transition: "opacity 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <FiSend size={18} /> SEND MESSAGE
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}