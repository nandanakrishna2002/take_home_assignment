// src/components/HeroSearch.js
import React from "react";

export default function HeroSearch({ query, setQuery, onSearch }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Find your next book to read
        </h1>
        
        <p className="text-center text-gray-300 text-lg mb-8">
          Search by title, explore categories, or browse our curated picks
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && onSearch()}
              placeholder="Search for a book..."
              className="flex-1 px-5 py-4 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={onSearch}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
