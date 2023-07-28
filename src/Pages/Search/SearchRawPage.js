import React, { useContext } from 'react'
import img_content_wrapper from '../../asset/vector-creator2.png'
import { ReactComponent as ImgCoffee } from './ImgCoffee.svg'
import ButtonLink from '../../components/ButtonLink'
import Card from '../../components/Card'
import IconFlags from './IconFlags'
import IconSearchRaw from './IconSearchRaw'
import useFetch from '../../hooks/useFetch'
import { KOREAN_POS_TAG } from '../../data/constant'
import { SearchContext } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'

function SearchRawPage() {
  /** For side effects */
  const [searchResult, setSearchResult] = useContext(SearchContext)
  const [fetchResponse, { fetchSearch }] = useFetch(null)
  const navigate = useNavigate();

  const query = '마시다'

  return (
    <main className="m-5">
      <section className="p-5 lg:h-80 bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg">
        <div className="flex flex-col space-y-8 w-full sm:w-auto">
          <h2 className="text-lg">
            <IconSearchRaw />
            If your'e new to Korean...
          </h2>
          <p className="sm:w-96 text-indigo-100">Try clicking the button below ↓ and see the magic !</p>
          <ButtonLink
            onClick={() => {
              fetchSearch('ko', query, KOREAN_POS_TAG['verb'])
                .then(res => {
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
            }}
            label={`👉 ${query}`}
          />
        </div>
        {/* <img className="w-[17vw] object-cover object-center hidden md:block" src={img_content_wrapper} alt=""></img> */}
        <div class="hidden md:block">
          <ImgCoffee class="w-[17vw]" />
        </div>
      </section>

      <section className="p-5">
        <h2 className="text-lg pb-4">or try searching something else !</h2>
        <section className="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="sm:w-1/3">
            <Card>
              <>
                <IconFlags flag="Korean" />
                搜尋韓文
              </>
              <>
                目前支援名詞、動詞、形容詞，例如：
                <ul>
                  <li>
                    - 名詞{'　'}：음식{'　　'} → 表示食物
                  </li>
                  <li>
                    - 動詞{'　'}：마시다{'　'} → 表示喝
                  </li>
                  <li>- 形容詞：맛있다{'　'} → 表示感謝</li>
                </ul>
                可搜尋出動詞與形容詞的不同詞性變化例句
              </>
              <>{/* <button className="content-button status-button">了解更多</button> */}</>
            </Card>
          </div>

          <div className="sm:w-1/3">
            <Card>
              <>
                <IconFlags flag="Chinese" />
                搜尋中文
              </>
              <>
                簡易搜尋 單字、表達，例如：
                <ul>
                  <li>- 名詞：故事</li>
                  <li>- 句型：聽說...</li>
                </ul>
                <div>在搜尋前，Searh in 請選擇中文</div>
              </>
              <>
                {/* <button class="content-button status-button">了解更多</button> */}
                {/* <div className="menu"></div> */}
              </>
            </Card>
          </div>

          <div className="pb-24 sm:w-1/3">
            <Card>
              <>
                <IconFlags flag="English" />
                搜尋英文
              </>
              <>
                簡易搜尋 單字、表達，例如：
                <ul>
                  <li>- Noun: Canada</li>
                  <li>- Phrase: looking for</li>
                  <span> ( case-sensitive 區分大小寫 ) </span>
                </ul>
                <div>Remember to select Search in English</div>
              </>
              <>
                {/* <button className="content-button status-button">了解更多</button> */}
                {/* <div className="menu"></div> */}
              </>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}

export default SearchRawPage
