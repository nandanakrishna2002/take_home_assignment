// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HeroSearch from './components/HeroSearch';
import BookSection from './components/BookSection';

export default function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [classicBooks, setClassicBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks('science fiction', setTrendingBooks);
    fetchBooks('classic literature', setClassicBooks);
  }, []);

  const fetchBooks = async (searchQuery, setter) => {
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=12`
      );
      const data = await res.json();
      setter(data.docs || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    await fetchBooks(query, setSearchResults);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1">
        <HeroSearch query={query} setQuery={setQuery} onSearch={handleSearch} />
        
        <div className="max-w-7xl mx-auto px-6 py-12">
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="w-10 h-10 border-3 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          {searchResults.length > 0 && (
            <BookSection title="Search Results" books={searchResults} />
          )}
          
          <BookSection title="Trending in Science Fiction" books={trendingBooks} />
          <BookSection title="Classic Literature" books={classicBooks} />
        </div>
      </main>
    </div>
  );
}
