import React, { useState, useRef } from 'react'
import Drawer from '../Shared/Drawer'
import AppCards from '../Shared/AppCards'
import useFetch from '../../useFetch'
import mockSubtitles from '../mockSubtitles.json'
import ButtonLink from '../Shared/ButtonLink'

function ContentWrapperSearch({ ...rest }) {
  // if show sentence output
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
          ${isDrawerOpen ? 'p-5' : 'h-0 opacity-0 p-0 -translate-y-40'}
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
      </section>

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

      <div class="hidden md:block fixed right-[5%] bottom-[5%] hover:cursor-pointer" onClick={() => goTopHandler()}>
        <svg viewBox="0 0 20 20" style={img_goTop_style}>
          <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
        </svg>
      </div>
    </main>
  )
}

export default ContentWrapperSearch
