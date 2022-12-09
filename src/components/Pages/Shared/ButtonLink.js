import React from 'react'

function ButtonLink({ label, onClick }) {
  return (
    <button 
      className="py-1.5 px-4 bg-blue-600/75 rounded-full hover:bg-blue-800 hover:transition-colors" 
      onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonLink
