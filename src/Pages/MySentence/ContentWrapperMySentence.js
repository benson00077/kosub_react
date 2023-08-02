import React, { useContext, useEffect, useState } from 'react'
import AppCards from '../../components/AppCards'
import { UserContext } from '../../context/UserContext'

import Drawer from '../../components/Drawer'
import useFetch from '../../hooks/useFetch'
import { useSelectContext } from '../../hooks/SelectedEleProvider'
import ButtonLink from '../../components/ButtonLink'
import mockSubtitles from '../../data/mockSubtitles.json'

function ContentWrapperMySentence({ ...rest }) {
  const [userInfo] = useContext(UserContext)
  const [favoriteSpeechesResult, { fetchFavoriteSpeeches }] = useFetch(null)
  const speechesCount = favoriteSpeechesResult.post.length

  // pass to ApiButton & AppCards
  const [select, setSelect] = useSelectContext()

  // pass to Drawer & ApiButton
  const [fetchResponse, { fetchDrawer }] = useFetch(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    fetchFavoriteSpeeches(userInfo.jwt)
  }, [userInfo.toggleUpdateMysentence])

  // CSS for svg img for dropdownParent button
  const img_dropdownparent_style = { width: '40', fill: 'rgba(255, 255, 255, 0.582)' }

  return (
    <main class="m-5">
      <section
        class={`
        ${isDrawerOpen ? 'p-5' : 'h-0 opacity-0 p-0 -translate-y-40'}
          bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg
      `}
      >
        <div class="flex flex-col w-full space-y-8">
          <h2 class="text-lg">
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
        <div class="mb-8">
          <h2 class="text-xl">{rest.sectionTitle}</h2>
          <li>{speechesCount ? `Result : ${speechesCount} sentences found` : 'Result :'}</li>
          <li>{`${rest.sectionInfo}${Object.keys(select)}`}</li>
        </div>
        <div>
          <AppCards
            controller="mysentence"
            speechResult={favoriteSpeechesResult.post}
            selectedIds={select}
            getSelectedIds={(selectedIds) => {
              setSelect(selectedIds)
            }}
          />
        </div>
      </div>
    </main>
  )
}

export default ContentWrapperMySentence
