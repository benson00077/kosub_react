import React from 'react'
import { useShowHideContext } from '../context/ShowHideLanContext'

function Drawer({ sentences }) {
  const [showLang, _] = useShowHideContext()
  const { ko, zh, en } = showLang

  return (
    <div>
      <ul>
        <li>- Result: {sentences.length} sentences found</li>
        <li>- Range: before and after 5 secs from target sentence</li>
      </ul>

      {sentences &&
        sentences.map((sentence, i) => (
          <div
            key={sentence.timeId}
            class="px-4 py-2 space-x-8 cursor-pointer lg:flex hover:bg-blue-600/75 rounded-2xl"
          >
            {ko && <p class="lg:w-1/3">{sentence.sentences}</p>}
            {zh && <p class="lg:w-1/3">foo.zh</p>}
            {en && <p class="lg:w-1/3">foo.en</p>}
          </div>
        ))}
    </div>
  )
}

export default Drawer
