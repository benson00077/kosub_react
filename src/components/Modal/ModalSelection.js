import React from 'react'
import { KOREAN_POS } from '../../data/constant'

function ModalSelection({ selected, setSelected, closeCb }) {
  return (
    <>
      {/* <!-- Main modal --> */}
      <div class="flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div onClick={(e) => e.stopPropagation()} class="relative w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={closeCb}
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            {/* <!-- Modal header --> */}
            <div class="px-6 py-4 border-b rounded-t dark:border-gray-600">
              <h3 class="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">Korean Part of Speech</h3>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6">
              <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Select the Korean Part of Speech to have better search result
              </p>
              <ul class="my-4 space-y-3">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelected(KOREAN_POS.noun)
                    }}
                    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">{KOREAN_POS.noun}</span>
                    {selected === KOREAN_POS.noun && (
                      <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Selected
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelected(KOREAN_POS.verb)
                    }}
                    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">{KOREAN_POS.verb}</span>
                    {selected === KOREAN_POS.verb && (
                      <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Selected
                      </span>
                    )}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelected(KOREAN_POS.adjective)
                    }}
                    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                  >
                    <span class="flex-1 ml-3 whitespace-nowrap">{KOREAN_POS.adjective}</span>
                    {selected === KOREAN_POS.adjective && (
                      <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Selected
                      </span>
                    )}
                  </a>
                </li>
              </ul>
              <div>
                <a
                  href="https://en.wiktionary.org/wiki/Appendix:Korean_parts_of_speech"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                >
                  What is Korean parts of speech?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSelection
