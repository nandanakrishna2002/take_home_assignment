// src/components/Recommendations.js
import React, { useEffect, useState } from "react";

export default function Recommendations() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Topics used to fetch one representative book for each recommendation slot
  const topics = [
    "Artificial Intelligence",
    "Psychology",
    "Motivational",
    "Adventure",
    "Technology",
    "Philosophy",
  ];

  // fetch one book for a topic (safe: checks for missing data)
  async function fetchRecommendedBook(topic, signal) {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
      topic
    )}&limit=1`;

    try {
      const res = await fetch(url, { signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const book = data?.docs?.[0];

      return {
        title: book?.title || topic,
        author: book?.author_name?.[0] || "Unknown Author",
        cover:
          book?.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : // try OL cover_url if available or fallback placeholder
              book?.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`
            : "https://via.placeholder.com/300x400?text=No+Image",
        reason: `Because you searched for ${topic}`,
      };
    } catch (err) {
      console.error(`Error fetching topic "${topic}":`, err);
      // return a safe fallback object so UI still renders
      return {
        title: topic,
        author: "Unknown Author",
        cover: "https://via.placeholder.com/300x400?text=Error",
        reason: `Could not load recommendation for ${topic}`,
      };
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        // fetch in parallel
        const results = await Promise.all(
          topics.map((t) => fetchRecommendedBook(t, signal))
        );

        if (!signal.aborted) {
          setRecommendedBooks(results);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Recommendations fetch aborted");
        } else {
          console.error("Unhandled error loading recommendations:", err);
          setError("Failed to load recommendations");
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    }

    load();

    return () => controller.abort();
    // topics is static here; if you change it to a prop/state, add it to deps
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Recommendations</h1>
      <p className="text-gray-600 mb-8">Personalized picks for you — powered by Open Library</p>

      {loading ? (
        <div className="flex items-center justify-center h-48 text-gray-500">
          Loading recommendations...
        </div>
      ) : error ? (
        <div className="text-red-500">Error: {error}. Check console for details.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedBooks.map((book, index) => (
            <div
              key={`${book.title}-${index}`}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  // fallback if image fails to load
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://via.placeholder.com/300x400?text=No+Image";
                }}
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                <p className="text-sm text-gray-600 mt-1 italic">by {book.author}</p>
                <p className="text-sm text-gray-500 mt-2">{book.reason}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
