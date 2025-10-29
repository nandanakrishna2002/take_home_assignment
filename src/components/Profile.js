// src/components/Profile.js
import React from "react";

export default function Profile() {
  const user = {
    name: "Alex",
    email: "alex@example.com",
    savedBooks: [
      { id: 1, title: "Saved Book 1" },
      { id: 2, title: "Saved Book 2" },
      { id: 3, title: "Saved Book 3" },
      { id: 4, title: "Saved Book 4" },
    ],
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen px-10 py-10">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex items-center space-x-6 bg-white p-6 rounded-xl shadow-sm mb-10">
        {/* Avatar Circle */}
        <div className="w-24 h-24 bg-gray-800 text-white flex items-center justify-center rounded-full text-3xl font-bold">
          {user.name.charAt(0)}
        </div>

        {/* Name and Email */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button className="mt-3 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
            Edit profile
          </button>
        </div>
      </div>

      {/* Saved Books Section */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Saved Books</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {user.savedBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400">No Cover</span>
            </div>
            <div className="p-4">
              <p className="font-medium text-gray-800">{book.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
