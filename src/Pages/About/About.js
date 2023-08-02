import React from 'react'
import { useNavigate } from 'react-router-dom'
import img_content_wrapper from '../../asset/vector-creator.png'
import { ReactComponent as ImgCoder } from './ImgCoder.svg'
import IconAbout from './IconAbout'
import ButtonLink from '../../components/ButtonLink'
import Card from '../../components/Card'
import IconTechStack from './IconTechStack'
import IconGitHubLink from './IconGitHubLink'

function About({ headerImg, headerTitle, headerContent, headerButton }) {
  let navigate = useNavigate()

  return (
    <main class="m-5">
      <section class="flex items-center justify-between p-5 rounded-lg lg:h-80 bg-texture-pattern content-wrapper-header">
        <div class="flex flex-col w-full space-y-8 sm:w-auto">
          <h2 class="text-lg">
            <IconAbout />
            About this website
          </h2>
          <p class="text-indigo-100 sm:w-96">
            This is a web app in which one can search the subtitles from K-drama so as to enjoy learning Korean with
            context
          </p>
          <ButtonLink onClick={() => navigate('/search')} label={'Try it on Search Page!'} />
        </div>
        {/* <img class="w-[17vw] object-cover object-center hidden md:block" src={img_content_wrapper} alt=""></img> */}
        <div class="hidden md:block">
          <ImgCoder class="w-[17vw]" />
        </div>
      </section>

      <section class="p-5">
        <h2 class="pb-4 text-lg">This app is built with ...</h2>
        <section class="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div class="sm:w-1/3">
            <Card
              icon={<IconTechStack flag="KoNLPy" />}
              header="Pre-process w/ NLP"
              main={
                <>
                  <p class="pb-6">K-Drama subtitles processed with:</p>
                  <ul>
                    <li class="pb-3">- Python</li>
                    <li>- KoNLPy Module</li>
                  </ul>
                </>
              }
              footer={<ButtonLink label={'KoNLPy ?'} link={'https://konlpy.org/en/latest/'} />}
            />
          </div>

          <div class="sm:w-1/3">
            <Card
              icon={<IconTechStack flag="Nest.js" />}
              header="Back-end"
              main={
                <>
                  <p class="pb-6">RESTful api built with:</p>
                  <ul>
                    <li class="pb-3">- Nest.js + MySQL</li>
                    <li>- Deployed on VPS</li>
                  </ul>
                </>
              }
              footer={<>{/* <IconGitHubLink repoLink={'https://github.com/benson00077/kosub_api_heroku'} /> */}</>}
            />
          </div>

          <div class="pb-24 sm:w-1/3">
            <Card
              icon={<IconTechStack flag="React.js" />}
              header="Front-end"
              main={
                <>
                  <p class="pb-6">SPA built with</p>
                  <ul>
                    <li class="pb-3">- React.js</li>
                    <li>- Tailwind CSS</li>
                  </ul>
                </>
              }
              footer={<IconGitHubLink repoLink={'https://github.com/benson00077/kosub_react'} />}
            />
          </div>
        </section>
      </section>
    </main>
  )
}

export default About
