import React, { useContext, useEffect, useState } from 'react'
import AppCards from '../../components/AppCards'
import { UserContext } from '../../context/UserContext'

import Drawer from '../../components/Drawer'
import useFetch from '../../hooks/useFetch'
import ButtonLink from '../../components/ButtonLink'

import mockSubtitles from '../../data/mockSubtitles.json'

function ContentWrapperMySentence({ ...rest }) {
  const [userInfo] = useContext(UserContext)
  const [favoriteSpeechesResult, { fetchFavoriteSpeeches }] = useFetch(null)
  const speechesCount = favoriteSpeechesResult.post.length

  // pass to ApiButton & AppCards
  const [selectedIds, setSelectedIds] = useState([])

  // pass to Drawer & ApiButton
  const [fetchResponse, { fetchDrawer }] = useFetch(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    fetchFavoriteSpeeches(userInfo.jwt)
  }, [])

  // CSS for svg img for dropdownParent button
  const img_dropdownparent_style = { width: '40', fill: 'rgba(255, 255, 255, 0.582)' }

  return (
    <main className="m-5">
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
            <Drawer isLoading={fetchResponse.isLoading} sentences={mockSubtitles} />
            {rest.headerContent}
          </>
          <ButtonLink onClick={() => setIsDrawerOpen(false)} label={rest.headerButton} />
        </div>
      </section>

      <div>
        <div className="mb-8">
          <h2 className="text-xl">{rest.sectionTitle}</h2>
          <li>{speechesCount ? `Result : ${speechesCount} sentences found` : 'Result :'}</li>
          <li>{`${rest.sectionInfo}${selectedIds}`}</li>
        </div>
        <div>
          <AppCards
            controller="mysentence"
            speechResult={favoriteSpeechesResult.post}
            getSelectedIds={(selectedIds) => {
              setSelectedIds(selectedIds)
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default ContentWrapperMySentence
