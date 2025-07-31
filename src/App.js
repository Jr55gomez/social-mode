import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [newClient, setNewClient] = useState("");
  const [newPost, setNewPost] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const addPost = () => {
    if (!newClient || !newPost) return;
    const post = {
      id: posts.length + 1,
      client: newClient,
      title: newPost,
      caption: newCaption || "Auto-caption coming soon...",
      status: "Idea Logged",
      analytics: { views: Math.floor(Math.random() * 1000), likes: Math.floor(Math.random() * 500) }
    };
    setPosts([...posts, post]);
    setNewClient("");
    setNewPost("");
    setNewCaption("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Client Dashboard Hub Demo</h1>

      {/* Post Panel */}
      <div style={{ background: "#fff", padding: "16px", marginBottom: "20px", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h2>Post Panel</h2>
        <input placeholder="Client Name" value={newClient} onChange={(e) => setNewClient(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
        <input placeholder="Post Idea" value={newPost} onChange={(e) => setNewPost(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
        <textarea placeholder="Caption (optional)" value={newCaption} onChange={(e) => setNewCaption(e.target.value)} style={{ width: "100%", padding: "8px", marginBottom: "8px" }} />
        <button onClick={addPost} style={{ background: "#10b981", color: "white", padding: "10px", borderRadius: "6px" }}>Add Post</button>
      </div>

      {/* Panels */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        {/* Asana Panel */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>📋 Asana (Task Board)</h3>
          {posts.map(p => (
            <div key={p.id} style={{ background: "#fff", padding: "8px", margin: "6px 0", borderRadius: "4px" }}>
              <strong>{p.title}</strong> for <em>{p.client}</em>
              <div>Status: Idea Logged</div>
            </div>
          ))}
        </div>

        {/* Zoho Campaign */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>📧 Zoho Campaign</h3>
          {posts.map(p => (
            <div key={p.id} style={{ background: "#fff", padding: "8px", margin: "6px 0", borderRadius: "4px" }}>
              Campaign Draft: {p.title}
            </div>
          ))}
        </div>

        {/* Later Scheduler */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>📆 Later Scheduler</h3>
          {posts.map(p => (
            <div key={p.id} style={{ background: "#fff", padding: "8px", margin: "6px 0", borderRadius: "4px" }}>
              Scheduled: {p.title} (auto time)
            </div>
          ))}
        </div>

        {/* Canva */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>🎨 Canva</h3>
          {posts.map(p => (
            <div key={p.id} style={{ background: "#fff", padding: "8px", margin: "6px 0", borderRadius: "4px" }}>
              Design Request for: {p.title} — <button style={{ padding: "4px 8px" }}>Open in Canva</button>
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>📊 Analytics</h3>
          {posts.map(p => (
            <div key={p.id} style={{ background: "#fff", padding: "8px", margin: "6px 0", borderRadius: "4px" }}>
              {p.title}: {p.analytics.views} views, {p.analytics.likes} likes
            </div>
          ))}
        </div>

        {/* Google Drive */}
        <div style={{ background: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
          <h3>📂 Google Drive</h3>
          <p>Placeholder: No direct content yet.</p>
        </div>
      </div>
    </div>
  );
}
