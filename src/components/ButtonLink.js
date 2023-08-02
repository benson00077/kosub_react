import React from 'react'

/**
 *  Usage:
 *    1. For app internal link: give prop an onClick event w/ react-router feature
 *    2. For app external link: give prop a link
 */
function ButtonLink({ label, onClick, link }) {
  return (
    <button
      class="py-1.5 px-4 bg-blue-600/75 rounded-full hover:bg-blue-800 hover:transition-colors"
      onClick={onClick}
    >
      {link ? (
        <a href={link} target="_blank" rel="noreferrer noopener">
          {label}
        </a>
      ) : (
        label
      )}
    </button>
  )
}

export default ButtonLink
