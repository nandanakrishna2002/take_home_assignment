// src/components/HeroSearch.js
import React from "react";

export default function HeroSearch({ query, setQuery, onSearch }) {
  return (
    <div className="hero-bg text-white py-16 px-8 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold hero-title text-center">Find your next book to read.</h1>
        <p className="text-center text-gray-200 mt-3 mb-6">Search by title, explore categories, or browse our curated picks.</p>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="flex gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search For a Book"
                className="flex-1 p-4 rounded-lg text-slate-900"
              />
              <button
                onClick={onSearch}
                className="px-6 py-3 pill rounded-lg font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
