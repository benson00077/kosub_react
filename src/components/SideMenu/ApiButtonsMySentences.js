import React from 'react'

function ApiButtonsMySentences({ action, isActive, onClickCb }) {
  const ApiButtons = {
    Remove: (
      <div
        class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded ${
          isActive ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'
        }`}
        onClick={onClickCb}
      >
        <svg class={`w-5 h-5 ${isActive.favoriteBtn ? 'fill-red-500' : 'fill-slate-50'}`} viewBox="0 0 24 24">
          <path d="M19 13H5a1 1 0 000 2h14a1 1 0 000-2z" />
        </svg>
        <h4 class="text-gray-300">Remove</h4>
      </div>
    ),
    Collect: (
      <div
        class={`group flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded ${
          isActive ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'
        }`}
        onClick={onClickCb}
      >
        <svg class={`w-5 h-5 ${isActive.favoriteBtn ? 'fill-green-500' : 'fill-slate-50'}`} viewBox="0 0 24 24">
          <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
        </svg>
        <h4 class="text-gray-300">Collect</h4>
      </div>
    ),
  }
  if (!Object.keys(ApiButtons).includes(action)) {
    console.error('Invalid action name')
    return
  }
  const ApiButton = ApiButtons[action]
  return ApiButton
}

export default ApiButtonsMySentences
