// src/components/BookCard.js
import React from "react";

export default function BookCard({ book }) {
  // OpenLibrary docs use 'cover_i' and 'title', 'author_name'
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="h-card">
      <div className="book-card p-3 relative">
        <div className="relative">
          <img src={cover} alt={book.title} className="w-full h-48 object-cover rounded-lg" />
          <div className="heart-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff5a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.1l8.8-9.4a5 5 0 0 0 0-7.1z"/></svg>
          </div>
        </div>

        <h3 className="mt-3 font-semibold text-sm">{book.title}</h3>
        <p className="text-xs text-gray-500">{book.author_name ? book.author_name[0] : 'Unknown Author'}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-yellow-500">
            ⭐⭐⭐⭐☆
          </div>
          <div className="text-xs text-gray-400">{book.first_publish_year || ""}</div>
        </div>
      </div>
    </div>
  );
}
