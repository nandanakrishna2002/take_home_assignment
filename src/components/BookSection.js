// src/components/BookSection.js
import React from "react";
import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors">
            ‹
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors">
            ›
          </button>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {books && books.length > 0 ? (
          books.map((b) => <BookCard key={b.key} book={b} />)
        ) : (
          <p className="text-gray-500">No books to show</p>
        )}
      </div>
    </section>
  );
}
