export default function AsanaPanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Asana Panel</h2>
      <p>This will show tasks and allow sending posts to Asana. (Mock data here)</p>
      <button style={{ padding: "8px 12px", backgroundColor: "#22c55e", color: "white", border: "none", borderRadius: "6px" }}>
        ✅ Send Sample Task to Asana
      </button>
    </div>
  );
}