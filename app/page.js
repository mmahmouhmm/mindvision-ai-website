export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b1120",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        MindVision AI
      </h1>

      <p style={{ fontSize: "20px", maxWidth: "700px" }}>
        Smart AI solutions for businesses, productivity, learning, and automation.
      </p>
    </main>
  );
}
