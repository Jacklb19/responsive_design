"use client";
import Image from "next/image";
import { Search, Settings, LogOut, Users, List, Play, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-gray-100 flex flex-col lg:flex-row transition-colors duration-300">
      
      {/* Sidebar Izquierdo */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-[#141421] border-r border-gray-800 p-6 space-y-10 shadow-2xl z-50 transform transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Botón cerrar en mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={24} />
        </button>

        <h1 className="text-3xl md:text-4xl font-extrabold text-red-500 tracking-tight">Netflix</h1>
        
        <nav className="space-y-8 text-sm overflow-y-auto max-h-[80vh]">
          <div>
            <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">Menu</p>
            <ul className="space-y-3 font-medium">
              <li className="text-red-500 hover:text-red-400 cursor-pointer transition-all">• Browse</li>
              <li className="hover:text-gray-200 cursor-pointer">• Watchlist</li>
              <li className="hover:text-gray-200 cursor-pointer">• Coming Soon</li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">Social</p>
            <ul className="space-y-3">
              <li className="hover:text-gray-200 cursor-pointer flex items-center gap-2 transition-all">
                <Users size={15}/> Friends
              </li>
              <li className="hover:text-gray-200 cursor-pointer flex items-center gap-2 transition-all">
                <List size={15}/> Parties
              </li>
            </ul>
          </div>

          <div>
            <p className="uppercase text-gray-400 text-xs mb-3 tracking-wider">General</p>
            <ul className="space-y-3">
              <li className="hover:text-gray-200 cursor-pointer flex items-center gap-2 transition-all">
                <Settings size={15}/> Settings
              </li>
              <li className="hover:text-gray-200 cursor-pointer flex items-center gap-2 transition-all">
                <LogOut size={15}/> Log out
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Overlay para mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Contenido principal */}
      <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto relative flex flex-col lg:flex-row">
        
        {/* Contenido central */}
        <div className="flex-1 lg:pr-8">
          {/* Header */}
          <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              {/* Botón menú móvil */}
              <button
                className="lg:hidden p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={22} />
              </button>

              <div className="flex items-center gap-2">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">&lt;</button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">&gt;</button>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800 text-gray-300 px-10 py-2 rounded-lg w-full sm:w-72 focus:ring-2 focus:ring-red-500 outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/icon.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-700"
                />
                <div className="hidden sm:block">
                  <p className="font-semibold text-sm md:text-base">Ramona F.</p>
                  <p className="text-xs text-gray-400">Level 12</p>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
            <Image
              src="/cabron.png"
              alt="Featured"
              width={1200}
              height={600}
              className="w-full h-52 sm:h-72 md:h-80 lg:h-[420px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2">Featured Movie</h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-4">Top Pick • 2 Seasons</p>
              <div className="flex items-center gap-3">
                <button className="bg-red-600 hover:bg-red-500 text-white px-4 sm:px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold shadow-md transition-all">
                  <Play size={16}/> Watch
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all">+</button>
              </div>
            </div>
          </section>

          {/* Parties Section */}
          <section className="mb-12">
            <h3 className="text-lg font-bold mb-6">Parties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Breaking Bad Party", "Stranger Things Party", "Money Heist Watch"].map((title, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer shadow-xl"
                >
                  <Image
                    src="/cabron.png"
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full h-36 sm:h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-gray-100">{title}</p>
                    <p className="text-xs text-gray-400 mt-1">Join your friends to watch together</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Continue Watching Section */}
          <section>
            <h3 className="text-lg font-bold mb-6">Continue Watching</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {["The Witcher", "Haunting of Hill House", "Stranger Things", "El Camino", "Ratched"].map((title, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-all shadow-xl cursor-pointer"
                >
                  <Image
                    src="/cabron.png"
                    alt={title}
                    width={300}
                    height={160}
                    className="w-full h-28 sm:h-32 md:h-36 object-cover"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-gray-100 text-sm">{title}</p>
                    <div className="mt-2 h-1 bg-gray-600 rounded-full">
                      <div className="h-1 bg-red-600 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Derecho - Perfiles */}
        <aside className="hidden lg:flex flex-col items-center gap-6 border-l border-gray-800 pl-6 w-16">
          {["/icon.png", "/icon.png", "/icon.png", "/icon.png"].map((src, i) => (
            <div key={i} className="flex flex-col items-center cursor-pointer hover:opacity-80 transition">
              <Image
                src={src}
                alt={`Profile ${i}`}
                width={50}
                height={50}
                className="rounded-full border border-gray-700"
              />
              <p className="text-xs text-gray-400 mt-1">User {i + 1}</p>
            </div>
          ))}
        </aside>

      </main>
    </div>
  );
}
