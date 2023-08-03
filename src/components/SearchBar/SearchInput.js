import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import useFetch from '../../hooks/useFetch'
import { KOREAN_POS_TAG, KOREAN_POS, PLACEHOLDER, PLACEHOLDER_FOREIGN } from '../../data/constant'
import ModalSelection from '../Modal/ModalSelection'
import Modal from '../Modal/Modal'

function SearchInput({ queryLanguage }) {
  /** For SearchInput */
  const [query, setQuery] = useState('')
  /** For Modal */
  const [openModal, setOpenModal] = useState(false)
  const [selectedPos, setSelectedPos] = useState(KOREAN_POS.noun)
  /** For side effects */
  const [searchResult, setSearchResult] = useContext(SearchContext)
  const [fetchResponse, { fetchSearch }] = useFetch(null)
  let navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (query.length === 0) return
    setSearchResult({ ...searchResult, isLoading: true })
    fetchSearch(queryLanguage, query, KOREAN_POS_TAG[selectedPos.toLowerCase()])
      .then((res) => {
        const result = {
          ...searchResult,
          mainQuery: query,
          result: res,
          result_number: res.length,
          isLoading: false,
          noResult: false,
        }
        setSearchResult(result)
        navigate('/search')
      })
  }

  /** auto-fucos */
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [searchResult])

  return (
    <>
      <div class="relative my-2 md:my-0">
        <form onSubmit={submitHandler}>
          <input
            class="w-full h-full border-none pt-2 pb-2 pl-8 pr-8 bg-zinc-800 rounded-md text-center text-amber-50 text-xl shadow-[0_0_0_2px_rgba(134,140,160,0.2)]"
            type="text"
            placeholder={
              queryLanguage === 'ko' ? PLACEHOLDER[selectedPos.toLocaleLowerCase()] : PLACEHOLDER_FOREIGN[queryLanguage]
            }
            autoFocus
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          ></input>
          {queryLanguage === 'ko' && (
            <div
              class="absolute right-2 bottom-2 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-700
              px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400
              "
              onClick={(e) => {
                setOpenModal(!openModal)
              }}
            >
              {`→ ${selectedPos}`}
            </div>
          )}
        </form>
      </div>
      <>
        {queryLanguage === 'ko' && openModal && (
          <Modal
            closeCb={() => {
              setOpenModal(false)
            }}
          >
            <ModalSelection selected={selectedPos} setSelected={setSelectedPos} closeCb={() => setOpenModal(false)} />
          </Modal>
        )}
      </>
    </>
  )
}

export default SearchInput
