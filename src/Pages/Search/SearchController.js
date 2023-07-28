import { useContext } from 'react'
import ContentWrapperSearch from './ContentWrapperSearch'
import { SearchContext } from '../../context/SearchContext'
import Spinning from '../../components/Spinning'
import useFetch from '../../hooks/useFetch'
import ButtonLink from '../../components/ButtonLink'
import { KOREAN_POS_TAG } from '../../data/constant'

function SearchController() {
  const [searchResult, setSearchResult] = useContext(SearchContext)
  const [fetchResponse, { fetchSearch }] = useFetch(null)
  const query = '마시다'

  return (
    <>
      {searchResult.result.length === 0 ? (
        <main class="m-5">
          <section className="p-5 lg:h-80 content-wrapper-header flex items-center justify-center rounded-lg">
            <div className="flex flex-col space-y-8 w-full sm:w-auto items-center">
              {/* <p>Don't know how to start ? the button below ↓ and see the magic ! </p> */}
              <div>Don't know how to start ? </div>
              <div class="w-1/2">
                <ButtonLink
                  onClick={() => {
                    fetchSearch('ko', query, KOREAN_POS_TAG['verb']).then((res) => {
                      const result = {
                        ...searchResult,
                        mainQuery: query,
                        result: res,
                        result_number: res.length,
                        isLoading: false,
                        noResult: false,
                      }
                      setSearchResult(result)
                    })
                  }}
                  label={`👉 ${query}`}
                />
              </div>
              <div>Click me ↑ and see the magic ! </div>
            </div>
          </section>
        </main>
      ) : searchResult.isLoading ? (
        <Spinning />
      ) : (
        <ContentWrapperSearch
          headerTitle="Context"
          sectionTitle={'Search Information'}
          sectionInfo={`Query : ${searchResult['mainQuery']}`}
          sectionInfo2={`Result : ${searchResult['result_number']} sentences found`}
          sectionInfo3={`Selected : `}
          headerButton={'Close'}
        />
      )}
    </>
  )
}

export default SearchController
