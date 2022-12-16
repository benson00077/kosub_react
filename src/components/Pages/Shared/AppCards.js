import React, { useContext, useState } from 'react'
import { SearchContext } from '../../SearchContext'
import { UserContext } from '../../UserContext'
import mockSubtitles from '../mockSubtitles.json'

function AppCards({ showLang, getSelectedIds }) {
  const { ko, zh, en } = showLang
  const [searchResult] = useContext(SearchContext)
  const [userInfo] = useContext(UserContext)

  const [selected, setSelected] = useState({})
  const lineSelectHandler = (e, id) => {
    if (selected[id]) {
      const copied = { ...selected }
      delete copied[id]
      setSelected(copied)
      getSelectedIds(Object.keys(copied))
    } else {
      setSelected({ [id]: true, ...selected })
      getSelectedIds(Object.keys({ [id]: true, ...selected }))
    }
  }

  return (
    <React.Fragment>
      {/* <div className={styles.appCardOne}> */}
      <div className="p-4 bg-sky-600/10 rounded-lg">
        <>
          {mockSubtitles.map((subtitle) => {
            const id = subtitle.timeId
            return (
              <div
                onClick={(e) => lineSelectHandler(e, id)}
                key={id}
                data-id={id}
                className={`lg:flex space-x-8 py-2 px-4 hover:bg-blue-600/75 rounded-2xl cursor-pointer ${
                  selected[id] ? 'bg-blue-600/40' : ''
                }`}
              >
                {ko && <p className="lg:w-1/3">{subtitle.sentences.join(' ')}</p>}
                {zh && <p className="lg:w-1/3">foo</p>}
                {en && <p className="lg:w-1/3">bar</p>}
              </div>
            )
          })}
        </>
        {/* <div className="app-card-buttons" >
                    <button className="content-button status-button"> ^ </button>
                </div> */}
      </div>
    </React.Fragment>
  )
}

export default AppCards
