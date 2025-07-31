import { useState } from "react";
import PostsPanel from "./components/PostsPanel";
import AsanaPanel from "./components/AsanaPanel";
import ZohoPanel from "./components/ZohoPanel";
import AnalyticsPanel from "./components/AnalyticsPanel";
import LaterPanel from "./components/LaterPanel";
import CanvaPanel from "./components/CanvaPanel";
import DrivePanel from "./components/DrivePanel";

export default function App() {
  const [activePanel, setActivePanel] = useState("Posts");

  const renderPanel = () => {
    switch (activePanel) {
      case "Posts": return <PostsPanel />;
      case "Asana": return <AsanaPanel />;
      case "Zoho": return <ZohoPanel />;
      case "Analytics": return <AnalyticsPanel />;
      case "Later": return <LaterPanel />;
      case "Canva": return <CanvaPanel />;
      case "Drive": return <DrivePanel />;
      default: return <PostsPanel />;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc" }}>
      {/* Sidebar */}
      <div style={{ width: "220px", backgroundColor: "#1e293b", color: "white", padding: "20px" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>AI Hub</h2>
        {["Posts","Asana","Zoho","Analytics","Later","Canva","Drive"].map((item) => (
          <div key={item}
            onClick={() => setActivePanel(item)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: activePanel === item ? "#334155" : "transparent"
            }}>
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: "20px" }}>
        {renderPanel()}
      </div>
    </div>
  );
}