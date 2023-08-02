import React from 'react'

function Card({ icon, header, main, footer, children }) {
  return (
    <div class="p-4 bg-sky-600/10 hover:bg-gray-600/80 hover:scale-105 hover:transition-all rounded-lg border border-stone-700 md:h-[30vh] overflow-y-scroll no-scrollbar relative">
      <header class="mb-12 text-lg h-14">{icon}{header}</header>
      <main class="pb-24 md:pb-0">{main}</main>
      <footer class="absolute bottom-4 right-4">{footer}</footer>
    </div>
  )
}

export default Card
