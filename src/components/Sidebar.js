// src/components/Sidebar.js
import React from "react";
import { HomeIcon, BookmarkIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 hidden md:block">
      {/* User section */}
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <div
          aria-hidden="true"
          className="flex items-center justify-center rounded-full w-12 h-12 bg-gray-800 text-white font-semibold text-lg"
        >
          A
        </div>

        <div className="flex-1">
          <div className="font-medium text-gray-900">Alex</div>
          <button className="text-xs text-gray-500 hover:text-gray-700 mt-1">
            Log out
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        <button
          onClick={() => setActivePage("home")}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
            activePage === "home"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          Home
        </button>

        <button
          onClick={() => setActivePage("categories")}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
            activePage === "categories"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <BookmarkIcon className="w-5 h-5" />
          Categories
        </button>

        <button
          onClick={() => setActivePage("recommendations")}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
            activePage === "recommendations"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <StarIcon className="w-5 h-5" />
          Recommendations
        </button>

        <button
          onClick={() => setActivePage("profile")}
          className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-colors ${
            activePage === "profile"
              ? "bg-gray-900 text-white"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <UserIcon className="w-5 h-5" />
          Profile
        </button>
      </nav>
    </aside>
  );
}
