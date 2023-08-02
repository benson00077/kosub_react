import React from 'react'

function GoToTopButton({ onClickCb }) {
  return (
    <div class="hidden md:block fixed right-[5%] bottom-[5%] hover:cursor-pointer" onClick={onClickCb}>
      <svg viewBox="0 0 20 20" style={{ width: '40', fill: 'white' }}>
        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
      </svg>
    </div>
  )
}

export default GoToTopButton
