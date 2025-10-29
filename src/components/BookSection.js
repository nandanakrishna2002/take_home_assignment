// src/components/BookSection.js
import React from "react";
import BookCard from "./BookCard";

export default function BookSection({ title, books }) {
  return (
    <section className="mt-8 px-6 lg:px-0">
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-4">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">‹</button>
          <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">›</button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto h-scroll px-6 lg:px-0">
        {books && books.length > 0 ? books.map((b) => <BookCard key={b.key} book={b} />) :
          <p className="text-gray-300">No books to show</p>}
      </div>
    </section>
  );
}
