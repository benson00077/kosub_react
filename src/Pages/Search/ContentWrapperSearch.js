import React, { useState, useRef, useContext } from 'react'
import Drawer from '../../components/Drawer'
import AppCards from '../../components/AppCards'
import useFetch from '../../hooks/useFetch'
import mockSubtitles from '../../data/mockSubtitles.json'
import ButtonLink from '../../components/ButtonLink'
import { SearchContext } from '../../context/SearchContext'

function ContentWrapperSearch({ ...rest }) {
  //FIXME: don't need, should passed from parent component
  const [searchResult] = useContext(SearchContext)

  // pass to ApiButton & AppCards
  const [selectedIds, setSelectedIds] = useState([])

  // pass to Drawer & ApiButton
  const [fetchResponse, { fetchDrawer }] = useFetch(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // CSS for svg img for dropdownParent button
  const img_dropdownparent_style = { width: '4vh', fill: 'rgba(255, 255, 255, 0.582)' }

  return (
    <main className="m-5 pb-24">
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
            <Drawer sentences={mockSubtitles} />
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
          <li>{`${rest.sectionInfo3}${selectedIds}`}</li>
        </div>
        <div>
          <AppCards
            controller="search"
            speechResult={searchResult.result}
            getSelectedIds={(selectedIds) => {
              setSelectedIds(selectedIds)
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default ContentWrapperSearch
