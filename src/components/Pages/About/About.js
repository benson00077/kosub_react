import React from 'react'
import { useNavigate } from 'react-router-dom'
import img_content_wrapper from '../../../asset/vector-creator.png'
import IconAbout from './IconAbout'
import ButtonLink from '../Shared/ButtonLink'
import Card from '../Shared/Card'
import IconTechStack from './IconTechStack'
import IconGitHubLink from './IconGitHubLink'

function About({ headerImg, headerTitle, headerContent, headerButton }) {
  let navigate = useNavigate()

  return (
    <main className="m-5">
      <section className="p-5 bg-texture-pattern content-wrapper-header flex items-center justify-between rounded-lg">
        <div className="flex flex-col space-y-8 w-full sm:w-auto">
          <h2 className="text-lg">
            <IconAbout />
            About this website
          </h2>
          <p className="sm:w-96 text-indigo-100">
            This is a web app in which one can search the subtitles from K-drama so as to enjoy learning Korean with
            context
          </p>
          <ButtonLink onClick={() => navigate('/search')} label={'Try it on Search Page!'} />
        </div>
        <img className="w-[17vw] object-cover object-center hidden md:block" src={img_content_wrapper} alt=""></img>
      </section>

      <section className="p-5">
        <h2 className="text-lg pb-4">This app is built with ...</h2>
        <section className="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
          <div className="sm:w-1/3">
            <Card>
              <>
                <IconTechStack flag="KoNLPy" />
                DataBase pre-process
              </>
              <>
                <p>K-Drama subtitles processed with:</p>
                <ul>
                  <li>- Python</li>
                  <li>- KoNLPy Module</li>
                </ul>
              </>
              <>
                <ButtonLink label={'Waht is KoNLPy ?'} link={'https://konlpy.org/en/latest/'} />
              </>
            </Card>
          </div>

          <div className="sm:w-1/3">
            <Card>
              <>
                <IconTechStack flag="Nest.js" />
                Back-end
              </>
              <>
                <p>RESTful api built with:</p>
                <ul>
                  <li>- Nest.js + MySQL</li>
                  <li>- Deployed on VPS</li>
                </ul>
              </>
              <>
                <IconGitHubLink repoLink={'https://github.com/benson00077/kosub_api_heroku'} />
              </>
            </Card>
          </div>

          <div className="pb-24 sm:w-1/3">
            <Card>
              <>
                <IconTechStack flag="React.js" />
                Front-end
              </>
              <>
                <p>SPA built with</p>
                <ul>
                  <li>- React.js</li>
                  <li>- Tailwind CSS</li>
                </ul>
              </>
              <>
                <IconGitHubLink repoLink={'https://github.com/benson00077/kosub_react'} />
              </>
            </Card>
          </div>
        </section>
      </section>
    </main>
  )
}

export default About
