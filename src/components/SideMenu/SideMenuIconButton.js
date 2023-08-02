import React from 'react'

function SideMenuIconButton({ onClickCb, isActive }) {
  return (
    <div class="absolute left-[7vw] md:left-[6vw] bottom-[5vh] z-20 hover:cursor-pointer" onClick={onClickCb}>
      <svg
        class={`w-4 md:w-7 ${
          isActive ? 'fill-neutral-50/80' : 'fill-slate-300/80'
        } transition-all hover:scale-110 hover:opacity-50`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z" />
      </svg>
    </div>
  )
}

export default SideMenuIconButton
