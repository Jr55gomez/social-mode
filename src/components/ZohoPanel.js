export default function ZohoPanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Zoho Panel</h2>
      <p>Email preview area. This will show mock emails now and later connect to Zoho Campaigns.</p>
      <button style={{ padding: "8px 12px", backgroundColor: "#ef4444", color: "white", border: "none", borderRadius: "6px" }}>
        📧 Send Mock Email
      </button>
    </div>
  );
}