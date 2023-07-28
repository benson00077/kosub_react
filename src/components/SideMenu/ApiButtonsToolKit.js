import React, { useContext, useEffect } from 'react'
import { useSelectContext } from '../../hooks/SelectedEleProvider'
import { UserContext } from '../../context/UserContext'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

function ApiButtonsToolKit({ withRemoveFavorite }) {
  const [select, setSelect] = useSelectContext()
  const [userInfo, setUserInfo] = useContext(UserContext)
  const [postFavoriteState, { postFavoriteSpeeches, delFavoriteSpeeches }] = useFetch(null)
  const navigate = useNavigate();

  const selectedInt = Object.keys(select).map((id) => +id)

  const isActive = {
    favoriteBtn: userInfo.isLoggedIn && Object.keys(select).length > 0,
    contextBtn: userInfo.isLoggedIn && Object.keys(select).length === 1,
  }

  const linkClassName = `flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded hover:bg-slate-500 opacity-80`

  useEffect(() => {
    if (postFavoriteState.error) {
      //TODO: Toast to tell server is down after logged in
      // consider having this logic in useFetch catch block or this useEffect block
    }
  }, [postFavoriteState])

  return (
    <>
      {withRemoveFavorite ? (
        <div
          class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded 
                ${isActive.favoriteBtn ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'}`}
          onClick={() => {
            //FIXME: to reload my sentence page
            if (!isActive.favoriteBtn) return
            if (!userInfo.isLoggedIn) return
            delFavoriteSpeeches(userInfo.jwt, selectedInt).then((res) => {
              setSelect({})
              setUserInfo({...userInfo, toggleUpdateMysentence: !userInfo.toggleUpdateMysentence})
            })
          }}
        >
          <svg class={`w-5 h-5 ${isActive.favoriteBtn ? 'fill-red-500' : 'fill-slate-50'}`} viewBox="0 0 24 24">
            <path d="M19 13H5a1 1 0 000 2h14a1 1 0 000-2z" />
          </svg>
          <h4 class="text-gray-300">Remove</h4>
        </div>
      ) : (
        <div
          class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded 
            ${isActive.favoriteBtn ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'}`}
          onClick={() => {
            //TODO: Toast guide to log in
            if (!isActive.favoriteBtn) return
            if (!userInfo.isLoggedIn) return
            postFavoriteSpeeches(userInfo.jwt, selectedInt)
            .then((res) => {
              setSelect({})
            })
          }}
        >
          <svg class={`w-5 h-5 ${isActive.favoriteBtn ? 'fill-green-500' : 'fill-slate-50'}`} viewBox="0 0 24 24">
            <path d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z" />
          </svg>
          <h4 class="text-gray-300">Collect</h4>
        </div>
      )}

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
