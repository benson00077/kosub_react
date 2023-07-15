import React, { useContext } from 'react'
import { useSelectContext } from '../../hooks/SelectedEleProvider'
import { UserContext } from '../../context/UserContext'
import useFetch from '../../hooks/useFetch'

function ApiButtonsToolKit() {
  const [selected, _] = useSelectContext()
  const [userInfo] = useContext(UserContext)
  const [postFavoriteState, { postFavoriteSpeeches }] = useFetch(null)

  const isActive = {
    favoriteBtn: Object.keys(selected).length > 0,
    contextBtn: Object.keys(selected).length === 1,
  }

  const linkClassName = `flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded hover:bg-slate-500 opacity-80`

  return (
    <>
      <div
        class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded 
          ${isActive.favoriteBtn ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'}`}
        onClick={() => {
          if (!isActive.favoriteBtn) return
          postFavoriteSpeeches(userInfo.jwt, Object.keys(selected))
          //SentencebookPush(sentencesID_SelectedList)
        }}
      >
        <svg class={`w-5 h-5 ${isActive.favoriteBtn ? 'fill-red-500' : 'fill-slate-50'}`} viewBox="0 0 20 20">
          <path d="M10 3.22l-.61-.6a5.5 5.5 0 00-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 00-7.78-7.77l-.61.61z" />
        </svg>
        <h4 class="text-gray-300">
          Favorite
        </h4>
      </div>
      <div
        class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded
          ${isActive.contextBtn ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'}`}
        onClick={() => {
          if (!isActive.contextBtn) return
          //fetchDrawer(seletedSentences[0])
          //setIsDrawerOpen(!isDrawerOpen)
        }}
      >
        <svg class={`w-5 h-5 ${isActive.contextBtn ? 'fill-teal-400' : 'fill-slate-50'}`} viewBox="0 0 20 20">
          <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
        </svg>
        <h4 class="text-gray-300">Context</h4>
      </div>
    </>
  )
}

export default ApiButtonsToolKit
