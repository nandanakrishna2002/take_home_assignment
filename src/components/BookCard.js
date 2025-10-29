// src/components/BookCard.js
import React from "react";

export default function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="flex-shrink-0 w-48">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 h-full">
        <div className="relative group">
          <img 
            src={cover} 
            alt={book.title} 
            className="w-full h-56 object-cover rounded-md"
          />
          <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.8 4.6a5 5 0 0 0-7.1 0L12 6.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.1l8.8-9.4a5 5 0 0 0 0-7.1z"/>
            </svg>
          </button>
        </div>
        
        <h3 className="mt-3 font-medium text-sm text-gray-900 line-clamp-2">
          {book.title}
        </h3>
        
        <p className="text-xs text-gray-500 mt-1">
          {book.author_name ? book.author_name[0] : 'Unknown Author'}
        </p>
        
        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center text-amber-500">
            <span>★★★★☆</span>
          </div>
          <div className="text-gray-400">
            {book.first_publish_year || ""}
          </div>
        </div>
      </div>
    </div>
  );
}
