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
    <main class="m-5">
      <section class="flex items-center justify-between p-5 rounded-lg lg:h-80 bg-texture-pattern content-wrapper-header">
        <div class="flex flex-col w-full space-y-8 sm:w-auto">
          <h2 class="text-lg">
            <IconHome />
            這個網站可以？
          </h2>
          <p class="text-indigo-100 sm:w-96">給定關鍵字，搜尋韓劇台詞。藉此幫助韓文學習者</p>
          <ButtonLink onClick={() => navigate('/search')} label={'前往 Search page，了解更多'} />
        </div>
        <img
          class="w-[17vw] h-[17vw] object-cover object-center hidden md:block"
          loading="lazy"
          src={img_content_wrapper}
          alt="Korean Drama Logo Picture"
        ></img>
      </section>

      <section class="p-5">
        <h2 class="pb-4 text-lg">為什麼要用韓劇臺詞學韓文...? 為了解決以下難處！</h2>
        <section class="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div class="sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'highPower'} />
                韓國為 high-context culture
              </>
              <>
                <p class="pb-6">這導致同一句話有非常多種表達方式</p>
                <p>學習過程會覺得越「背」會越不知道怎麼用</p>
              </>
              <>
                <ButtonLink label={'why?'} link={'https://www.quora.com/Why-is-South-Korea-high-context'}></ButtonLink>
              </>
            </Card>
          </div>

          <div class="sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'middlePower'} />
                韓文的相近文法、規則太多
              </>
              <>
                <p class="pb-6">但坊間教科書上只給「單一例句」導致說明不清楚，只能淪為死背。</p>
                <p>其實多變相近的文法，可以精準傳達細膩卻不同的心情。要一探究竟只能依賴上下文 (context)</p>
              </>
              <>{null}</>
            </Card>
          </div>

          <div class="pb-24 sm:w-1/3">
            <Card>
              <>
                <IconsBattery flag={'lowPower'} />
                同一句話太多表達，舉例而言...
              </>
              <>
                <p class="pb-6">當我們問：要去哪？</p>
                <p class="pb-6">僅列舉直譯後的說法，韓文卻可以說</p>
                <ul class="pb-6">
                  <li class="pb-3">👉 어디 가</li>
                  <li class="pb-3">👉 어디 가요</li>
                  <li class="pb-3">👉 어디 갑니까</li>
                  <li class="pb-3">👉 어디 가세요</li>
                  <li class="pb-3">👉 어디 가십니까</li>
                  <li class="pb-3">👉 어디 갈까요</li>
                  <li class="pb-3">...等等</li>
                </ul>
                <p>有這麼多說法，就算死背下來也無法視情況好好使用。所以透過上下文學習是更有效的。</p>
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
