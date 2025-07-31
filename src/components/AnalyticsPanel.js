export default function AnalyticsPanel() {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Analytics Panel</h2>
      <p>Mock Google Analytics chart here.</p>
      <ul>
        <li>Impressions: 14,230</li>
        <li>Clicks: 1,254</li>
        <li>Engagement: 8.8%</li>
      </ul>
    </div>
  );
}