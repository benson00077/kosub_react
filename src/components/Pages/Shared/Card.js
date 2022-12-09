import React from 'react'

function Card({ children }) {
  return (
    <div className="p-4 bg-sky-600/10 hover:bg-gray-600/80 hover:scale-105 hover:transition-all rounded-lg border border-stone-700 h-[30vh] overflow-y-scroll no-scrollbar">
      <header className="text-lg">{children[0]}</header>
      <main className="h-28">{children[1]}</main>
      <footer>{children[2]}</footer>
    </div>
  )
}

export default Card
