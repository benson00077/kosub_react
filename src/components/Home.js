import React from 'react'


function Home({headerImg, headerTitle, headerContent, headerButton}) {

  const img_content_wrapper = '/logo.png'
  const img_content_wrapper_style = { width: '25vh', height: '25vh' }
  const img_appcard_logo_style = { fill: 'rgba(81, 201, 175, 0.75)'}
  
  return (
     <div className="content-wrapper">
      <div className="content-wrapper-header">
        <div className="content-wrapper-context">
          <h3 className="img-content">
            <svg viewBox="0 0 25 25" fill="white">
              <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"/>
            </svg>
            為什麼要用韓劇臺詞學韓文
          </h3>
          <div className="content-text">韓文為 high-context language ，句型變化繁複，沒有上下文、語境的參照 ，只會讓學習者混淆......</div>
          <button className="content-button" > <a href="https://www.quora.com/Why-is-South-Korea-high-context">了解更多</a></button>
        </div>  
        <img className="content-wrapper-img" src={img_content_wrapper} alt="" style={img_content_wrapper_style}></img>
      </div>  
      
      
      <div className="content-section">
        <div className="content-section-title">韓文學不下去的原因...</div>
        <div className="apps-card">

          <div className="app-card">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
                <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z"/>
              </svg>
              動詞、形容詞：變化繁複
            </span>
            <div className="app-card__subtext">
              <p>單一個動詞、形容詞的變化可以多達至少20種以上。</p>
              <p>背過的單字，在使用時長得完全不一樣，而且是每次都變得跟上一次不一樣⋯⋯。</p>
            </div>
            <div className="app-card-buttons">
              <button className="content-button status-button">Update</button>
            </div>
          </div>
          
          <div className="app-card">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
              <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z"/>
            </svg>
              文法、規則：相近文法太多
            </span>
            <div class="app-card__subtext">
              <p>太多相近文法，教科書上單一例句說明不清楚。</p>
              <p>韓國人能自然使用各種文法描述不同心情，因為他們從小就按照上下文、語境來學習。</p> 
            </div>
            <div class="app-card-buttons">
              <button class="content-button status-button">Update</button>
            <div class="menu"></div>
            </div>
          </div>

          <div class="app-card">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style={img_appcard_logo_style}>
              <path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z"/>
            </svg>
              綜合來說：同一句話太多表達
            </span>
            <div class="app-card__subtext">
              <p>同一句話指的是，直譯成中文後意思相同的句子，舉例而言，我們可能會問</p>
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
            </div>
            <div class="app-card-buttons">
              <button class="content-button status-button">Update</button>
              <div class="menu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default Home;
