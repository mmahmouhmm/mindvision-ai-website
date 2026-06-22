"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI(promptText = message) {
    if (!promptText.trim()) {
      setReply("Please type your question first.");
      return;
    }

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: promptText }),
      });

      const data = await res.json();
      setReply(data.reply || "No response received.");
    } catch {
      setReply("Error connecting to MindVision AI.");
    }

    setLoading(false);
  }

  const toolPrompts = {
    business: "Create a business growth plan for my business. Ask for details if needed.",
    marketing: "Create marketing ads, social media posts, and a simple campaign plan.",
    kdp: "Help me with KDP publishing: book description, keywords, categories, and launch plan.",
    resume: "Help me improve my resume, interview answers, and career growth plan.",
  };

  return (
    <main style={styles.page}>
      <nav style={styles.nav}>
        <h2>MindVision AI</h2>
        <div style={styles.navLinks}>
          <a href="#services">Services</a>
          <a href="#assistant">AI Assistant</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section style={styles.hero}>
        <h1 style={styles.title}>Turning Problems Into Smart Solutions.</h1>
        <p style={styles.subtitle}>
          AI-powered business, marketing, publishing, and productivity solutions
          for entrepreneurs, professionals, and growing businesses.
        </p>
        <div style={styles.buttons}>
          <a href="#assistant" style={styles.primaryBtn}>Try AI Assistant</a>
          <a href="#contact" style={styles.secondaryBtn}>Contact Us</a>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.grid}>
          <ServiceCard title="Business Growth" text="Business plans, strategy, process improvement, and startup guidance." onClick={() => askAI(toolPrompts.business)} />
          <ServiceCard title="Marketing Solutions" text="Ads, social media content, SEO ideas, Etsy listings, and marketing plans." onClick={() => askAI(toolPrompts.marketing)} />
          <ServiceCard title="KDP Publishing" text="Book descriptions, keywords, categories, author bios, and publishing guidance." onClick={() => askAI(toolPrompts.kdp)} />
          <ServiceCard title="Resume & Career Support" text="Resumes, interview preparation, career growth, and professional communication." onClick={() => askAI(toolPrompts.resume)} />
        </div>
      </section>

      <section id="assistant" style={styles.section}>
        <h2 style={styles.sectionTitle}>Ask MindVision AI</h2>
        <p style={styles.centerText}>
          Ask about business growth, ads, KDP, resumes, websites, documents, or productivity.
        </p>

        <div style={styles.chatBox}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: Create a Facebook ad for my Etsy shirt business..."
            style={styles.textarea}
          />

          <button onClick={() => askAI()} disabled={loading} style={styles.fullBtn}>
            {loading ? "MindVision AI is thinking..." : "Ask MindVision AI"}
          </button>

          <div style={styles.response}>
            {reply || "Your AI answer will appear here."}
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose MindVision AI?</h2>
        <div style={styles.grid}>
          <InfoCard title="Real AI Solutions" text="Connected to real AI responses, not only templates." />
          <InfoCard title="Business Focused" text="Built for practical growth, marketing, publishing, and productivity." />
          <InfoCard title="Fast Answers" text="Get useful ideas and action plans in seconds." />
          <InfoCard title="Scalable Platform" text="Ready to grow into tools, documents, payments, and dashboards." />
        </div>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact MindVision AI</h2>
        <div style={styles.contactBox}>
          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Email Address" />
          <input style={styles.input} placeholder="Business Name" />
          <textarea style={styles.textarea} placeholder="Tell us what you need help with..." />
          <button style={styles.fullBtn}>Request Assistance</button>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 MindVision AI Solution</p>
        <p>Business Consulting • Marketing Assistance • Publishing Support • Educational Resources</p>
      </footer>
    </main>
  );
}

function ServiceCard({ title, text, onClick }) {
  return (
    <div style={styles.card} onClick={onClick}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button style={styles.cardBtn}>Try This Tool</button>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0b1120",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 8%",
    borderBottom: "1px solid #1f2937",
    position: "sticky",
    top: 0,
    background: "#0b1120",
    zIndex: 10,
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  hero: {
    padding: "90px 8%",
    textAlign: "center",
  },
  title: {
    fontSize: "52px",
    maxWidth: "900px",
    margin: "0 auto 20px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#cbd5e1",
    maxWidth: "850px",
    margin: "0 auto 35px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
    padding: "14px 22px",
    borderRadius: "12px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  secondaryBtn: {
    border: "1px solid #334155",
    padding: "14px 22px",
    borderRadius: "12px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  section: {
    padding: "70px 8%",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "30px",
  },
  centerText: {
    textAlign: "center",
    color: "#cbd5e1",
    marginBottom: "25px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "18px",
    padding: "24px",
    cursor: "pointer",
  },
  cardBtn: {
    marginTop: "15px",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
  },
  chatBox: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: "20px",
    padding: "25px",
  },
  textarea: {
    width: "100%",
    minHeight: "140px",
    background: "#020617",
    color: "white",
    border: "1px solid #334155",
    borderRadius: "14px",
    padding: "15px",
    fontSize: "16px",
  },
  fullBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "15px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
  response: {
    marginTop: "25px",
    background: "#020617",
    border: "1px solid #334155",
    borderRadius: "14px",
    padding: "20px",
    whiteSpace: "pre-wrap",
    minHeight: "180px",
    color: "#e5e7eb",
  },
  contactBox: {
    maxWidth: "700px",
    margin: "0 auto",
    display: "grid",
    gap: "14px",
  },
  input: {
    background: "#020617",
    color: "white",
    border: "1px solid #334155",
    borderRadius: "12px",
    padding: "14px",
    fontSize: "16px",
  },
  footer: {
    padding: "35px 8%",
    textAlign: "center",
    color: "#94a3b8",
    borderTop: "1px solid #1f2937",
  },
};
