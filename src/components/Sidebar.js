// src/components/Sidebar.js
import React from "react";
import { HomeIcon, BookmarkIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 hidden md:block">
      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <img 
          src="https://via.placeholder.com/48" 
          alt="avatar" 
          className="rounded-full w-12 h-12 object-cover"
        />
        <div className="flex-1">
          <div className="font-medium text-gray-900">Amelia Jones</div>
          <button className="text-xs text-gray-500 hover:text-gray-700 mt-1">
            Log out
          </button>
        </div>
      </div>
      
      <nav className="space-y-1">
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-gray-900 text-white font-medium transition-colors">
          <HomeIcon className="w-5 h-5" />
          Home
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <BookmarkIcon className="w-5 h-5" />
          Categories
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <StarIcon className="w-5 h-5" />
          Recommendations
        </button>
        <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
          <UserIcon className="w-5 h-5" />
          Profile
        </button>
      </nav>
    </aside>
  );
}
