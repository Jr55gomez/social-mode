import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, client: "Smoothie Co.", title: "Post Smoothie Reel", caption: "Fresh smoothie vibes! 🥤", status: "Awaiting Approval", timestamp: "2025-07-30 10:00 AM", media: null },
    { id: 2, client: "Promo Brand", title: "Summer Promo Image", caption: "Summer savings are here! ☀️", status: "Approved & Scheduled", timestamp: "2025-07-30 11:30 AM", media: null }
  ]);

  const [newClient, setNewClient] = useState("");
  const [newPost, setNewPost] = useState("");
  const [newCaption, setNewCaption] = useState("");
  const [newMedia, setNewMedia] = useState(null);

  const handleLogin = () => {
    if (password === "demo") setLoggedIn(true);
  };

  const approvePost = (id) => {
    setPosts(prev => prev.map(post => post.id === id ? { ...post, status: "Approved & Scheduled" } : post));
  };

  const editCaption = (id, newCaption) => {
    setPosts(prev => prev.map(post => post.id === id ? { ...post, caption: newCaption } : post));
  };

  const handleMediaUpload = (e, id) => {
    const file = e.target.files[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    setPosts(prev => prev.map(post => post.id === id ? { ...post, media: previewUrl } : post));
  };

  const addPost = () => {
    if (!newClient.trim() || !newPost.trim()) return;
    const newEntry = {
      id: posts.length + 1,
      client: newClient,
      title: newPost,
      caption: newCaption || "(auto caption pending)",
      status: "Awaiting Approval",
      timestamp: new Date().toLocaleString(),
      media: newMedia ? URL.createObjectURL(newMedia) : null
    };
    setPosts([...posts, newEntry]);
    setNewClient("");
    setNewPost("");
    setNewCaption("");
    setNewMedia(null);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6", padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px", textAlign: "center" }}>Client Dashboard Hub</h1>

      {!loggedIn ? (
        <div style={{ maxWidth: "400px", margin: "0 auto", background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "16px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            style={{ backgroundColor: "#3b82f6", color: "white", padding: "10px", borderRadius: "8px", width: "100%", fontWeight: "600", cursor: "pointer" }}
          >
            Log In
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: "1000px", margin: "0 auto", background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Ideas for Posts</h2>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Add New Idea</h3>
            <input
              type="text"
              placeholder="Client Name"
              style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "8px" }}
              value={newClient}
              onChange={(e) => setNewClient(e.target.value)}
            />
            <input
              type="text"
              placeholder="Post Title"
              style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "8px" }}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <textarea
              placeholder="Draft Caption (optional)"
              style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "8px" }}
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
            />
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setNewMedia(e.target.files[0])}
              style={{ marginBottom: "8px" }}
            />
            <button
              onClick={addPost}
              style={{ backgroundColor: "#10b981", color: "white", padding: "10px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
            >
              Add Idea
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #d1d5db" }}>
            <thead>
              <tr style={{ background: "#e5e7eb" }}>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Client</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Post</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Caption</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Media</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Status</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Timestamp</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}>{post.client}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{post.title}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>
                    <input
                      type="text"
                      value={post.caption}
                      onChange={(e) => editCaption(post.id, e.target.value)}
                      style={{ width: "100%", padding: "4px" }}
                    />
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>
                    {post.media ? (
                      post.media.endsWith(".mp4") || post.media.endsWith(".mov") ? (
                        <video src={post.media} width="60" controls />
                      ) : (
                        <img src={post.media} alt="Upload" width="60" />
                      )
                    ) : (
                      <input type="file" accept="image/*,video/*" onChange={(e) => handleMediaUpload(e, post.id)} />
                    )}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{post.status}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{post.timestamp}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>
                    {post.status === "Awaiting Approval" && (
                      <button
                        onClick={() => approvePost(post.id)}
                        style={{ backgroundColor: "#3b82f6", color: "white", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p style={{ color: "#6b7280", marginTop: "16px", fontSize: "14px" }}>
            *Demo: Approve button will eventually trigger scheduling, image generation, and analytics updates.
          </p>
        </div>
      )}
    </div>
  );
}
