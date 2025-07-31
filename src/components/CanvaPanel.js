export default function CanvaPanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Canva Panel</h2>
      <p>Connect to Canva template. For now, this button opens Canva.</p>
      <a href="https://www.canva.com" target="_blank" rel="noopener noreferrer">
        <button style={{ padding: "8px 12px", backgroundColor: "#a855f7", color: "white", border: "none", borderRadius: "6px" }}>
          🎨 Open Canva
        </button>
      </a>
    </div>
  );
}