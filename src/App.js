// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import HeroSearch from "./components/HeroSearch";
import BookSection from "./components/BookSection";

function App() {
  const [query, setQuery] = useState("");
  const [popular, setPopular] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=40`);
      const data = await res.json();
      const docs = data.docs || [];
      // basic split: first half into popular, second half into recommendations
      setPopular(docs.slice(0, 10));
      setRecommend(docs.slice(10, 20));
    } catch (err) {
      console.error(err);
      setPopular([]);
      setRecommend([]);
    } finally {
      setLoading(false);
    }
  };

  // Quick demo starter sets (optional): fetch a popular default
  const loadDefault = async () => {
    // Search for 'best books' to show initial cards
    const res = await fetch(`https://openlibrary.org/search.json?q=best%20books&limit=20`);
    const data = await res.json();
    setPopular(data.docs.slice(0, 10));
    setRecommend(data.docs.slice(10, 20));
  };

  React.useEffect(() => { loadDefault(); }, []);

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        <HeroSearch query={query} setQuery={setQuery} onSearch={fetchBooks} />

        <main>
          <div className="max-w-6xl mx-auto">
            {loading && <div className="text-center py-4">Loading...</div>}
            <BookSection title="Popular" books={popular} />
            <BookSection title="We Recommend" books={recommend} />
          </div>
        </main>

        <footer className="text-center text-gray-400 py-10">
          Made with ❤️ by Nandana Krishna
        </footer>
      </div>
    </div>
  );
}

export default App;
