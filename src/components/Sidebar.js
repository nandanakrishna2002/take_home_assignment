// src/components/Sidebar.js
import React from "react";
import { HomeIcon, BookmarkIcon, StarIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen sidebar-panel rounded-tr-3xl rounded-br-3xl p-6 hidden md:block">
      <div className="flex items-center gap-4 mb-8">
        <img src="https://via.placeholder.com/64" alt="avatar" className="rounded-full w-16 h-16 object-cover"/>
        <div>
          <div className="font-semibold">Amelia Jones</div>
          <div className="text-xs mt-1"><button className="text-xs bg-black text-white px-2 py-0.5 rounded">LOG OUT</button></div>
        </div>
      </div>

      <nav className="space-y-3">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-orange-300 text-white font-semibold">
          <HomeIcon className="w-5 h-5"/> Home
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-orange-50">
          <BookmarkIcon className="w-5 h-5"/> Categories
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-orange-50">
          <StarIcon className="w-5 h-5"/> Recommendations
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-orange-50">
          <UserIcon className="w-5 h-5"/> Profile
        </button>
      </nav>
    </aside>
  );
}
