import React, { useState, useContext, useEffect } from 'react'
import { useSelectContext } from '../../context/SelectedSpeechesContext'
import { UserContext } from '../../context/UserContext'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'
import ModalBoard from '../Modal/ModalBoard'
import ApiButtonsMySentences from './ApiButtonsMySentences'

function ApiButtonsToolKit({ withRemoveFavorite }) {
  /** For Modal */
  const [openModal, setOpenModal] = useState(false)
  const [ctxOfSpeach, { fetchCtxOfSpeach }] = useFetch()

  const [select, setSelect] = useSelectContext()
  const [userInfo, setUserInfo] = useContext(UserContext)
  const [_, { postFavoriteSpeeches, delFavoriteSpeeches }] = useFetch(null)
  const navigate = useNavigate()

  const selectedInts = Object.keys(select).map((id) => +id)

  const isActive = {
    favoriteBtn: userInfo.isLoggedIn && Object.keys(select).length > 0,
    contextBtn: userInfo.isLoggedIn && Object.keys(select).length === 1,
  }

  const linkClassName = `flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded hover:bg-slate-500 opacity-80`

  return (
    <>
      {withRemoveFavorite && (
        <ApiButtonsMySentences
          action="Remove"
          isActive={isActive.favoriteBtn}
          onClickCb={() => {
            if (!isActive.favoriteBtn) return
            if (!userInfo.isLoggedIn) return
            delFavoriteSpeeches(userInfo.jwt, selectedInts).then((res) => {
              setSelect({})
              //FIXME: below logic is to reload my sentence page
              setUserInfo({ ...userInfo, toggleUpdateMysentence: !userInfo.toggleUpdateMysentence })
            })
          }}
        />
      )}
      {!withRemoveFavorite && (
        <ApiButtonsMySentences
          action="Collect"
          isActive={isActive.favoriteBtn}
          onClickCb={() => {
            //TODO: Toast guide to log in
            if (!isActive.favoriteBtn) return
            if (!userInfo.isLoggedIn) return
            postFavoriteSpeeches(userInfo.jwt, selectedInts).then((res) => {
              setSelect({})
              navigate('/mysentences')
            })
          }}
        />
      )}

      <div
        class={`flex flex-row justify-between pt-3 pb-3 pr-2 pl-2 rounded
          ${isActive.contextBtn ? 'hover:bg-slate-500 opacity-80 cursor-pointer' : 'opacity-30'}`}
        onClick={() => {
          if (!isActive.contextBtn) return
          if (!userInfo.isLoggedIn) return
          setOpenModal(true)
          fetchCtxOfSpeach(userInfo.jwt, selectedInts[0])
        }}
      >
        <svg class={`w-5 h-5 ${isActive.contextBtn ? 'fill-teal-400' : 'fill-slate-50'}`} viewBox="0 0 20 20">
          <path d="M16 2h4v15a3 3 0 01-3 3H3a3 3 0 01-3-3V0h16v2zm0 2v13a1 1 0 001 1 1 1 0 001-1V4h-2zM2 2v15a1 1 0 001 1h11.17a2.98 2.98 0 01-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z" />
        </svg>
        <h4 class="text-gray-300">Context</h4>
      </div>

      {openModal && (
        <Modal
          closeCb={() => {
            setOpenModal(false)
          }}
        >
          <ModalBoard
            closeCb={() => setOpenModal(false)}
            title="Context of the sentence"
            speechesKo={ctxOfSpeach.post.map((entity) => (
              <>
                {entity.subtitles} <br />
              </>
            ))}
            speechesZh={ctxOfSpeach.post.map((entity) => (
              <>
                {entity.subtitlesZh} <br />
              </>
            ))}
          />
        </Modal>
      )}
    </>
  )
}

export default ApiButtonsToolKit
