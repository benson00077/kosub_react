import React from 'react'
import { useNavigate } from 'react-router-dom'
import img_content_wrapper from '../../asset/logo.png'
import ButtonLink from '../../components/ButtonLink'
import Card from '../../components/Card'
import IconHome from './IconHome'
import IconsBattery from './IconsBattery'

function Home({ headerImg, headerTitle, headerContent, headerButton }) {
  let navigate = useNavigate()

  return (
    <main className="m-5">
      <section className="p-5 lg:h-80 bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg">
        <div className="flex flex-col space-y-8 w-full sm:w-auto">
          <h2 className="text-lg">
            <IconHome />
            這個網站可以？
          </h2>
          <p className="sm:w-96 text-indigo-100">給定關鍵字，搜尋韓劇台詞。藉此幫助韓文學習者</p>
          <ButtonLink onClick={() => navigate('/search')} label={'前往 Search page，了解更多'} />
        </div>
        <img
          className="w-[17vw] h-[17vw] object-cover object-center hidden md:block"
          src={img_content_wrapper}
          alt=""
        ></img>
      </section>

      <section className="p-5">
        <h2 className="text-lg pb-4">為什麼要用韓劇臺詞學韓文...? 為了解決以下難處！</h2>
        <section className="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'highPower'} />
                韓國為 high-context culture
              </>
              <>
                <p>這導致同一句話有非常多種表達方式</p>
                <p>學習過程會覺得越「背」會越不知道怎麼用</p>
              </>
              <>
                <ButtonLink label={'why?'} link={'https://www.quora.com/Why-is-South-Korea-high-context'}></ButtonLink>
              </>
            </Card>
          </div>

          <div className="sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'middlePower'} />
                韓文的相近文法、規則太多
              </>
              <>
                <p>但坊間教科書上只給「單一例句」導致說明不清楚，只能淪為死背。</p>
                <p>其實多變相近的文法，可以精準傳達細膩卻不同的心情。要一探究竟只能依賴 context 上下文</p>
              </>
              <>{null}</>
            </Card>
          </div>

          <div className="pb-24 sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'lowPower'} />
                同一句話太多表達，舉例而言...
              </>
              <>
                <p>中文 → 我們可能會問</p>
                <ul>
                  <li>要去哪？</li>
                </ul>
                <p>僅列舉直譯後的說法，韓文卻可以說</p>
                <ul>
                  <li>어디 가</li>
                  <li>어디 가요</li>
                  <li>어디 갑니까</li>
                  <li>어디 가세요</li>
                  <li>어디 가십니까</li>
                  <li>어디 갈까요</li>
                  <li>...等等</li>
                </ul>
                <p>有這麼多說法，就算死背下來也無法視情況好好使用</p>
              </>
              <>{null}</>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Home
