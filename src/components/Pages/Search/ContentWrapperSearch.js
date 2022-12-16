import React, { useState, useRef } from 'react'
import Drawer from '../Shared/Drawer'
import styles from './contentWrapperSearch.module.css'
import ShowHideHandler from '../Shared/ShowHideHandler'
import AppCards from '../Shared/AppCards'
import ApiButtons from '../Shared/ApiButtons'
import useSelectSentenceId from '../../useSelectSentenceId'
import useFetch from '../../useFetch'
import mockSubtitles from '../mockSubtitles.json'
import ButtonLink from '../Shared/ButtonLink'

function ContentWrapperSearch({ ...rest }) {
  // if show sentence output
  const [koShow, setKoShow] = useState(true)
  const [zhShow, setZhShow] = useState(true)
  const [enShow, setEnShow] = useState(true)
  const [showLang, setShowLang] = useState({
    ko: true,
    zh: true,
    en: true,
  })

  // if show buttons for sentnece manipulating
  const [isButtonsShow, setIsButtonsShow] = useState(false)

  // pass to ApiButton & AppCards
  const [selectedIds, setSelectedIds] = useState({})

  // pass to Drawer & ApiButton
  const [fetchResponse, { fetch_drawer }] = useFetch(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // CSS for svg img for dropdownParent button
  const img_dropdownparent_style = { width: '4vh', fill: 'rgba(255, 255, 255, 0.582)' }

  // Go-To-Top button
  const goTop_ref = useRef(null)
  const img_goTop_style = { width: '40', fill: 'white' }
  function goTopHandler() {
    goTop_ref.current.scrollTo({ top: 0 - goTop_ref.current.scrollHeight, behavior: 'smooth' })
  }
  // const goTopHandler = () => {
  //   goTop_ref.current.scrollTo({top: 0 - goTop_ref.current.scrollHeight, behavior: 'smooth'})
  // }

  return (
    <main className="m-5" ref={goTop_ref}>
      <section
        className={`
          ${isDrawerOpen ? 'p-5' : 'h-0 opacity-0 p-0'}
            bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg
        `}
      >
        <div className="flex flex-col space-y-8 w-full">
          <h2 className="text-lg">
            {rest.headerImg}
            {rest.headerTitle}
          </h2>
          <>
            <Drawer sentences={mockSubtitles} showLang={showLang} />
            {rest.headerContent}
          </>
          <ButtonLink onClick={() => setIsDrawerOpen(false)} label={rest.headerButton} />
        </div>
        {/* <img className="content-wrapper-img" src="" alt=""></img> */}
      </section>

      <div className={styles.dropdownParent} onClick={() => setIsButtonsShow(!isButtonsShow)}>
        <svg viewBox="0 0 20 20" style={img_dropdownparent_style}>
          <path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 100-6 3 3 0 000 6z" />
        </svg>
        {/* </button> */}
      </div>
      <div className={isButtonsShow ? styles.dropdown__isactive : styles.dropdown}>
        <ShowHideHandler showLang={showLang} setShowLang={setShowLang} />

        <ApiButtons
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
          SentencebookPush={rest.SentencebookPush}
          seletedSentences={selectedIds}
          fetch_drawer={fetch_drawer}
        />
      </div>

      <div>
        <div className="mb-8">
          <h2 className="text-xl">{rest.sectionTitle}</h2>
          <li>{rest.sectionInfo}</li>
          <li>{rest.sectionInfo2}</li>
        </div>
        <div>
          <AppCards
            controller="search"
            showLang={showLang}
            getSelectedIds={(selectedIds) => {
              setSelectedIds(selectedIds)
            }}
          />
        </div>
      </div>

      <div className={styles.goTop} onClick={() => goTopHandler()}>
        <svg viewBox="0 0 20 20" style={img_goTop_style}>
          <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
      </div>
    </main>
  )
}

export default ContentWrapperSearch
