import { useState } from "react";

export default function PostsPanel() {
  const [chatInput, setChatInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    setPosts([...posts, { id: posts.length+1, title: chatInput, caption: "Auto caption for: " + chatInput, status: "Draft" }]);
    setChatInput("");
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "16px" }}>Posts Panel</h2>
      <input
        type="text"
        placeholder='Type: "Post about health care next Tuesday"'
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleChatSubmit()}
        style={{ width: "70%", padding: "8px", marginRight: "8px" }}
      />
      <button onClick={handleChatSubmit} style={{ padding: "8px 12px", backgroundColor: "#3b82f6", color: "white", border: "none", borderRadius: "6px" }}>Generate</button>
      <ul style={{ marginTop: "16px" }}>
        {posts.map(p => (
          <li key={p.id} style={{ marginBottom: "10px" }}>
            <strong>{p.title}</strong> — {p.caption} [{p.status}]
          </li>
        ))}
      </ul>
    </div>
  );
}