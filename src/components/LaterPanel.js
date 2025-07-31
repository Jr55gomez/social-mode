export default function LaterPanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Later Panel</h2>
      <p>Mock scheduling calendar for Later here.</p>
      <button style={{ padding: "8px 12px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "6px" }}>
        📆 Schedule Mock Post
      </button>
    </div>
  );
}