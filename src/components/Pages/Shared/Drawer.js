import React from 'react'

function Drawer({ sentences, showLang }) {
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
            className="lg:flex space-x-8 py-2 px-4 hover:bg-blue-600/75 rounded-2xl cursor-pointer"
          >
            {ko && <p className="lg:w-1/3">{sentence.sentences}</p>}
            {zh && <p className="lg:w-1/3">foo.zh</p>}
            {en && <p className="lg:w-1/3">foo.en</p>}
          </div>
        ))}
    </div>
  )
}

export default Drawer
