import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function Modal({ closeCb, children }) {
  const el = useRef(document.createElement('div'))

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root')
    modalRoot.classList.add('bg-gray-800', 'bg-opacity-80', 'w-11/12', 'h-[93vh]', 'rounded-2xl', 'overflow-y-hidden')
    modalRoot.appendChild(el.current)
    const closeModal = () => {
      closeCb()
      modalRoot.classList.remove(
        'bg-gray-800',
        'bg-opacity-80',
        'w-11/12',
        'h-[93vh]',
        'rounded-2xl',
        'overflow-y-hidden',
      )
    }
    document.addEventListener('click', closeModal)

    return () => {
      modalRoot.removeChild(el.current)
      closeModal()
      document.removeEventListener('click', closeModal)
    }
  }, [])

  return createPortal(children, el.current)
}

export default Modal
