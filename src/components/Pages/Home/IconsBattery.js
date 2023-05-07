import React from 'react'

function IconsBattery({ flag }) {
  if (!['lowPower', 'middlePower', 'highPower'].includes(flag)) {
    throw new Error('IconsBattery flag format is wrong')
  }
  const cardHeaderIconStyle = { fill: 'rgba(81, 201, 175, 0.75)' }
  return (
    <>
      {flag === 'highPower' ? (
        <svg class="w-7 mr-4 inline" style={cardHeaderIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z" />
        </svg>
      ) : null}
      {flag === 'middlePower' ? (
        <svg class="w-7 mr-4 inline" style={cardHeaderIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z" />
        </svg>
      ) : null}
      {flag === 'lowPower' ? (
        <svg class="w-7 mr-4 inline" style={cardHeaderIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z" />
        </svg>
      ) : null}
    </>
  )
}

export default IconsBattery
