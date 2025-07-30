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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Client Dashboard Hub</h1>

      {!loggedIn ? (
        <div className="max-w-sm mx-auto bg-white shadow p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Log In
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Post Pipeline</h2>

          {/* Add new task section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Add New Post</h3>
            <input
              type="text"
              placeholder="Post Title"
              className="w-full p-2 border rounded mb-2"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <textarea
              placeholder="Draft Caption (optional)"
              className="w-full p-2 border rounded mb-2"
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
            />
            <button
              onClick={addTask}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add Post
            </button>
          </div>

          {/* Task table */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300 text-left">Post</th>
                <th className="p-2 border border-gray-300 text-left">Caption</th>
                <th className="p-2 border border-gray-300 text-left">Status</th>
                <th className="p-2 border border-gray-300 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className="p-2 border border-gray-300">{task.title}</td>
                  <td className="p-2 border border-gray-300">{task.caption}</td>
                  <td className="p-2 border border-gray-300">{task.status}</td>
                  <td className="p-2 border border-gray-300">
                    {task.status === "Awaiting Approval" && (
                      <button
                        onClick={() => approveTask(task.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 mt-4 text-sm">
            *Demo: Approve button will eventually trigger scheduling & automation.
          </p>
        </div>
      )}
    </div>
  );
}
