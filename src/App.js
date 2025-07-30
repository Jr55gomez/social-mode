import { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Post Smoothie Reel', status: 'GPT Caption Ready' },
    { id: 2, title: 'Summer Promo Image', status: 'Scheduled in Later.com' },
    { id: 3, title: 'New Product Launch', status: 'Analytics Ready' },
  ]);

  const handleLogin = () => {
    if (password === 'demo') setLoggedIn(true);
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Client Dashboard MVP</h1>
      {!loggedIn ? (
        <div className='max-w-sm mx-auto bg-white shadow p-6 rounded-2xl'>
          <h2 className='text-xl font-semibold mb-4'>Login</h2>
          <input
            type='password'
            placeholder='Enter password'
            className='w-full p-2 border rounded mb-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full'
          >
            Log In
          </button>
        </div>
      ) : (
        <div className='max-w-3xl mx-auto bg-white shadow p-6 rounded-2xl'>
          <h2 className='text-2xl font-semibold mb-4'>Post Pipeline</h2>
          <table className='w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='p-2 border border-gray-300 text-left'>Post</th>
                <th className='p-2 border border-gray-300 text-left'>Status</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td className='p-2 border border-gray-300'>{task.title}</td>
                  <td className='p-2 border border-gray-300'>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className='text-gray-500 mt-4 text-sm'>*Status will update automatically when connected to Make.com</p>
        </div>
      )}
    </div>
  );
}