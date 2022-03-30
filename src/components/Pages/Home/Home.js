import React from 'react'
import { useHistory } from 'react-router-dom';
import img_content_wrapper from '../../../asset/logo.png';

function Home({headerImg, headerTitle, headerContent, headerButton}) {

  const window_wid = window.innerWidth
  const img_content_wrapper_style = (window_wid <= 480) ? { width: '15vh', height: '15vh' } : { width: '25vh', height: '25vh' }
  // console.log(window_wid)
  // console.log(img_content_wrapper_style)
  const img_appcard_logo_style = { fill: 'rgba(81, 201, 175, 0.75)'}

  // redirect to search page
  let history = useHistory()
  
  return (
     <div className="content-wrapper">
      <div className="content-wrapper-header">
        <div className="content-wrapper-context">
          <h3 className="img-content">
            <svg viewBox="0 0 25 25" fill="white">
              <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
            </svg>
            這個網站可以？
          </h3>
          <div className="content-text">給定關鍵字，搜尋韓劇台詞。藉此幫助韓文學習者</div>
          <button className="content-button" onClick={() => {history.push("/search")}}> 
            前往 Search page，了解更多
          </button>
        </div>  
        <img className="content-wrapper-img" src={img_content_wrapper} alt="" style={img_content_wrapper_style}></img>
      </div>  
      
      
      <div className="content-section">
        <div className="content-section-title">為什麼要用韓劇臺詞學韓文...? 為了解決以下難處！</div>
        <div className="apps-card">

          <div className="app-card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
                <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z"/>
              </svg>
              韓國為 high-context culture
            </span>
            <div className="app-card__subtext">
              <p>這導致同一句話有非常多種表達方式</p>
              <p>令學習者覺得越「背」會越不知道怎麼用</p>
            </div>
            <div className="app-card-buttons">
              <button className="content-button status-button">
              <a href="https://www.quora.com/Why-is-South-Korea-high-context" 
              target="_blank" rel="noreferrer noopener"
              style={{'textDecoration': 'none', color: '#f9fafb', display: "table-cell"}}>
                why?
              </a>
              </button>
            </div>
          </div>
          
          <div className="app-card">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
              <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z"/>
            </svg>
              韓文的相近文法、規則太多
            </span>
            <div className="app-card__subtext">
              <p>但坊間教科書上只給「單一例句」導致說明不清楚，只能淪為死背。</p>
              <p>其實多變相近的文法，可以精準傳達細膩卻不同的心情。要一探究竟只能依賴 context 上下文</p> 
            </div>
            <div className="app-card-buttons">
              {/* <button class="content-button status-button">Update</button> */}
            <div className="menu"></div>
            </div>
          </div>

          <div className="app-card">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
              <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z"/>
            </svg>
              同一句話太多表達，舉例而言...
            </span>
            <div className="app-card__subtext">
              <p>中文我們可能會問</p>
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
                <li>...</li>
              </ul>
              <p>有這麼多說法，就算死背下來無法視情況好好使用</p>
            </div>
            <div className="app-card-buttons">
              {/* <button className="content-button status-button">Update</button> */}
              <div className="menu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Home;
