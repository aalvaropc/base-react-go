import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');

  const fetchData = () => {
    fetch(`http://localhost:${import.meta.env.VITE_PORT}/`)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      {/* Main Container */}
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-lg space-y-6">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-teal-400">React + Go + Vite App</h1>
          <p className="text-gray-400 mt-2">
            A simple app to demonstrate counter and API fetch functionality.
          </p>
        </header>

        {/* Counter Section */}
        <section className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold">Counter</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setCount((count) => count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition"
            >
              -
            </button>
            <span className="text-2xl font-semibold">{count}</span>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition"
            >
              +
            </button>
          </div>
        </section>

        {/* Fetch Data Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Fetch Data</h2>
          <button
            onClick={fetchData}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition"
          >
            Fetch Server Data
          </button>
          {message && (
            <div className="p-4 bg-gray-700 rounded border border-gray-600">
              <p className="text-sm text-gray-300">Server Response:</p>
              <p className="text-lg font-semibold text-white">{message}</p>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          Powered by <span className="text-teal-400 font-bold">Go</span> &{' '}
          <span className="text-teal-400 font-bold">React</span>.
        </footer>
      </div>
    </div>
  );
}

export default App;
