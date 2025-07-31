export default function DrivePanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Google Drive Panel</h2>
      <p>Mock file picker here. Later connects to Drive API.</p>
      <button style={{ padding: "8px 12px", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "6px" }}>
        📂 Upload to Drive
      </button>
    </div>
  );
}