import React from 'react'

function Card({ children }) {
  return (
    <div className="p-4 bg-sky-600/10 hover:bg-gray-600/80 hover:scale-105 hover:transition-all rounded-lg border border-stone-700 h-[30vh] overflow-y-scroll no-scrollbar relative">
      <header className="text-lg h-14 mb-12">{children[0]}</header>
      <main className="h-28">{children[1]}</main>
      <footer className="absolute bottom-4 right-4">{children[2]}</footer>
    </div>
  )
}

export default Card