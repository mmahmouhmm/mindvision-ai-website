"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim()) {
      setReply("Please type your question first.");
      return;
    }

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setReply(data.reply || "No response received.");
    } catch (error) {
      setReply("Error connecting to MindVision AI.");
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1120",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <section style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "52px", marginBottom: "15px" }}>
          MindVision AI
        </h1>

        <p style={{ fontSize: "20px", color: "#cbd5e1", marginBottom: "35px" }}>
          Real AI solutions for business, marketing, KDP, productivity, documents,
          and problem solving.
        </p>

        <div
          style={{
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask MindVision AI your business question..."
            style={{
              width: "100%",
              minHeight: "160px",
              background: "#020617",
              color: "white",
              border: "1px solid #334155",
              borderRadius: "14px",
              padding: "15px",
              fontSize: "16px",
              resize: "vertical",
            }}
          />

          <button
            onClick={askAI}
            disabled={loading}
            style={{
              marginTop: "15px",
              width: "100%",
              padding: "15px",
              borderRadius: "14px",
              border: "none",
              background: "linear-gradient(135deg, #0ea5e9, #7c3aed)",
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {loading ? "MindVision AI is thinking..." : "Ask MindVision AI"}
          </button>

          <div
            style={{
              marginTop: "25px",
              background: "#020617",
              border: "1px solid #334155",
              borderRadius: "14px",
              padding: "20px",
              textAlign: "left",
              minHeight: "180px",
              whiteSpace: "pre-wrap",
              color: "#e5e7eb",
              lineHeight: "1.6",
            }}
          >
            {reply || "Your AI answer will appear here."}
          </div>
        </div>
      </section>
    </main>
  );
}
