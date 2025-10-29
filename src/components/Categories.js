// src/components/Categories.js
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);

  const categories = [
    "Science Fiction",
    "Romance",
    "Mystery",
    "Non-Fiction",
    "Fantasy",
    "History",
    "Biography",
    "Self-Help",
  ];

  // Function to fetch books for a category
  const fetchCategoryBooks = async (category) => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(category)}&limit=1`
      );
      const data = await res.json();
      const book = data.docs[0];
      return {
        name: category,
        desc: `Explore ${category} books`,
        img: book?.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
          : "https://via.placeholder.com/300x400?text=No+Image",
      };
    } catch (error) {
      console.error(`Error fetching books for ${category}:`, error);
      return {
        name: category,
        desc: `Explore ${category} books`,
        img: "https://via.placeholder.com/300x400?text=Error+Loading",
      };
    }
  };

  // Fetch books for all categories
  useEffect(() => {
    async function loadCategories() {
      const results = await Promise.all(categories.map(fetchCategoryBooks));
      setCategoryData(results);
    }
    loadCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Categories</h1>
      <p className="text-gray-600 mb-8">
        Browse books by category. (Live data from Open Library)
      </p>

      {categoryData.length === 0 ? (
        <div className="flex justify-center items-center h-48 text-gray-500">
          Loading categories...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryData.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
