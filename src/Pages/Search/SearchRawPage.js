import React, { useState } from 'react'
import img_content_wrapper from '../../asset/vector-creator2.png'
import ButtonLink from '../../components/ButtonLink'
import Card from '../../components/Card'
import IconFlags from './IconFlags'
import IconSearchRaw from './IconSearchRaw'

function SearchRawPage({ headerImg, headerTitle, headerContent, headerButton }) {
  const [copySuccess, setCopySuccess] = useState('Click to copy 안녕하다')

  return (
    <main className="m-5">
      <section className="p-5 lg:h-80 bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg">
        <div className="flex flex-col space-y-8 w-full sm:w-auto">
          <h2 className="text-lg">
            <IconSearchRaw />
            If your'e new to Korean and this website
          </h2>
          <p className="sm:w-96 text-indigo-100">
            You may want to search: 안녕하다 (greetings in Korean) on the right-top searching bar so as to test this
            app.{' '}
          </p>
          <ButtonLink
            onClick={() => {
              navigator.clipboard.writeText('안녕하다').then(setCopySuccess('Copied Succesfully !'))
            }}
            label={copySuccess}
          />
        </div>
        <img className="w-[17vw] object-cover object-center hidden md:block" src={img_content_wrapper} alt=""></img>
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
                目前僅支援動詞、形容詞，例如：
                <ul>
                  <li>
                    - 動詞{'　'}：먹다{'　　'} → 表示吃
                  </li>
                  <li>- 形容詞：고맙다{'　'} → 表示感謝</li>
                </ul>
                可搜尋出 動/形容詞 的不同變化
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
