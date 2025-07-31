// Removed Tailwind usage entirely and eliminated index.css dependency.
// Also removed any import calls for index.css so Vercel won't look for it.

import { useState } from "react";

export default function ClientDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Post Smoothie Reel", caption: "Fresh smoothie vibes! 🥤", status: "Awaiting Approval" },
    { id: 2, title: "Summer Promo Image", caption: "Summer savings are here! ☀️", status: "Approved & Scheduled" },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newCaption, setNewCaption] = useState("");

  const handleLogin = () => {
    if (password === "demo") setLoggedIn(true);
  };

  const approveTask = (id) => {
    setTasks((prev) => prev.map((task) => task.id === id ? { ...task, status: "Approved & Scheduled" } : task));
  };

  const addTask = () => {
    if (newPost.trim() === "") return;
    setTasks([...tasks, { id: tasks.length + 1, title: newPost, caption: newCaption || "(auto caption pending)", status: "Awaiting Approval" }]);
    setNewPost("");
    setNewCaption("");
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
        <div style={{ maxWidth: "900px", margin: "0 auto", background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>Post Pipeline</h2>

          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>Add New Post</h3>
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
            <button
              onClick={addTask}
              style={{ backgroundColor: "#10b981", color: "white", padding: "10px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
            >
              Add Post
            </button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #d1d5db" }}>
            <thead>
              <tr style={{ background: "#e5e7eb" }}>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Post</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Caption</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Status</th>
                <th style={{ padding: "8px", border: "1px solid #d1d5db", textAlign: "left" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{task.title}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{task.caption}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>{task.status}</td>
                  <td style={{ padding: "8px", border: "1px solid #d1d5db" }}>
                    {task.status === "Awaiting Approval" && (
                      <button
                        onClick={() => approveTask(task.id)}
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
            *Demo: Approve button will eventually trigger scheduling & automation.
          </p>
        </div>
      )}
    </div>
  );
}
