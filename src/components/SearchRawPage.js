import React, { useState } from 'react'

function SearchRawPage({headerImg, headerTitle, headerContent, headerButton}) {

  // CSS for svg img for dropdownParent button
  const img_flag_style = { width:'35'}

  // UI for copy '사랑하다' button 
  const [copySuccess, setCopySuccess] = useState('Copy 안녕하다');

  return (
     <div className="content-wrapper">
      <div className="content-wrapper-header">
        <div className="content-wrapper-context">
          <h3 className="img-content">
          <svg viewBox="0 0 20 20" fill="white">
            <path d="M10 14a4 4 0 110-8 4 4 0 010 8zM9 1a1 1 0 112 0v2a1 1 0 11-2 0V1zm6.65 1.94a1 1 0 111.41 1.41l-1.4 1.4a1 1 0 11-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 110 2h-1.98a1 1 0 110-2h1.98zm-1.93 6.65a1 1 0 11-1.41 1.41l-1.4-1.4a1 1 0 111.41-1.41l1.4 1.4zM11 18.99a1 1 0 11-2 0v-1.98a1 1 0 112 0v1.98zm-6.65-1.93a1 1 0 11-1.41-1.41l1.4-1.4a1 1 0 111.41 1.41l-1.4 1.4zM1.01 11a1 1 0 110-2h1.98a1 1 0 110 2H1.01zm1.93-6.65a1 1 0 111.41-1.41l1.4 1.4a1 1 0 11-1.41 1.41l-1.4-1.4z"/>
          </svg>
            If your'e new to Korean and this website
          </h3>
          <div className="content-text">
            <p>You may want to search: 안녕하다 (greetings in Korean) on the right-top searching bar so as to test this app. </p>
          </div>
          <button className="content-button"
            onClick={() => {
              navigator.clipboard.writeText('안녕하다').then(
                setCopySuccess('Copied Succesfully !')
              )
            }}>
            {copySuccess}
          </button>
        </div>  
        {/* <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""></img> */}
        <img className="content-wrapper-img" src="/vector-creator2.png" alt=""></img>
      </div>  
        
      
      <div className="content-section">
        <div className="content-section-title">or try searching something else !</div>
        <div className="apps-card">

          <div className="app-card">
            <span>
              <svg viewBox="0 0 512 512"  style={img_flag_style}>
                  <path fill="#fff" d="M0 85.331h512v341.337H0z" />
                  <path d="M318.33 255.994c0 15.583-27.906 54.539-62.33 54.539s-62.33-38.957-62.33-54.539c0-34.424 27.906-62.33 62.33-62.33s62.33 27.906 62.33 62.33z" fill="#d80027" />
                  <path d="M318.33 255.994c0 34.424-27.906 62.33-62.33 62.33s-62.33-27.906-62.33-62.33" fill="#0052b4" />
                  <path d="M322.114 311.096l16.528-16.528 11.018 11.018-16.528 16.528zM294.566 338.63l16.528-16.527 11.018 11.018-16.528 16.528zM355.17 344.132l16.527-16.528 11.018 11.018-16.527 16.528zM327.621 371.689l16.528-16.528 11.018 11.018-16.528 16.528zM338.641 327.614l16.528-16.527 11.018 11.018-16.527 16.527zM311.094 355.16l16.528-16.528 11.018 11.018-16.528 16.527zM355.177 200.896l-44.073-44.073 11.018-11.018 44.073 44.073zM311.099 189.881l-16.528-16.527 11.017-11.018 16.528 16.528zM338.635 217.431l-16.528-16.527 11.017-11.018 16.528 16.528zM344.135 156.825l-16.528-16.528 11.018-11.018 16.528 16.528zM371.694 184.374l-16.528-16.527 11.019-11.019 16.527 16.528zM140.31 327.61l44.073 44.074-11.018 11.018-44.074-44.073zM184.368 338.635l16.527 16.527-11.017 11.018-16.528-16.528zM156.832 311.087l16.528 16.528-11.019 11.018-16.527-16.528zM173.363 294.564l44.073 44.073-11.018 11.019-44.073-44.074zM184.384 140.287l-44.073 44.074-11.018-11.018 44.073-44.074zM200.895 156.823l-44.073 44.074-11.018-11.018 44.073-44.074zM217.424 173.351l-44.074 44.074-11.017-11.017 44.074-44.074z" />
              </svg>
              韓文
            </span>
            <div className="app-card__subtext">
              暫僅支援 動詞、形容詞，例如：
              <ul>
                <li>動詞{'　'}：먹다{'　'}{' '}--表示吃</li>
                <li>形容詞：고맙다 --表示感謝</li>
              </ul>
              可搜尋出 動/形容詞 的不同變化 
            </div>
            <div className="app-card-buttons">
              {/* <button className="content-button status-button">了解更多</button> */}
            </div>
          </div>
          
          <div className="app-card">
            <span>
              <svg viewBox="0 0 512 512" style={img_flag_style}>
                  <path fill="#d80027" d="M0 85.337h512v341.326H0z" />
                  <path fill="#0052b4" d="M0 85.337h256V256H0z" />
                  <path fill="#f0f0f0" d="M186.435 170.669L162.558 181.9l12.714 23.125-25.927-4.961-3.286 26.192L128 206.993l-18.06 19.263-3.285-26.192-25.927 4.96 12.714-23.125-23.877-11.23 23.877-11.231-12.714-23.125 25.927 4.96 3.286-26.192L128 134.344l18.06-19.263 3.285 26.192 25.928-4.96-12.715 23.125z" />
                  <circle cx="128" cy="170.674" r="29.006" fill="#0052b4" />
                  <path d="M128 190.06c-10.692 0-19.391-8.7-19.391-19.391 0-10.692 8.7-19.391 19.391-19.391 10.692 0 19.391 8.7 19.391 19.391 0 10.691-8.699 19.391-19.391 19.391z" fill="#f0f0f0" />
              </svg>
              中文
            </span>
            <div className="app-card__subtext">
              簡易搜尋 單字、表達，例如：
              <ul>
                <li>名詞：故事</li>
                <li>句型：聽說...</li>
              </ul>
              <div>在搜尋前，選擇 Searh in 中文</div>
            </div>
            <div className="app-card-buttons">
              {/* <button class="content-button status-button">了解更多</button> */}
            <div className="menu"></div>
            </div>
          </div>

          <div className="app-card">
            <span>
              <svg viewBox="0 0 512 512" style={img_flag_style}>
                  <path fill="#f0f0f0" d="M0 85.331h512v341.337H0z" />
                  <g fill="#d80027">
                      <path d="M0 127.994h512v42.663H0zM0 213.331h512v42.663H0zM0 298.657h512v42.663H0zM0 383.994h512v42.663H0z" />
                  </g>
                  <path fill="#2e52b2" d="M0 85.331h256v183.797H0z" />
                  <g fill="#f0f0f0">
                      <path d="M99.822 160.624l-4.123 12.684H82.363l10.791 7.835-4.123 12.683 10.791-7.835 10.784 7.835-4.122-12.683 10.791-7.835h-13.337zM103.938 219.08l-4.116-12.683-4.123 12.683H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836zM47.577 219.08l-4.117-12.683-4.123 12.683H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836zM43.46 160.624l-4.123 12.684H26.001l10.791 7.835-4.123 12.683 10.791-7.835 10.785 7.835-4.122-12.683 10.789-7.835H47.577zM99.822 114.85l-4.123 12.685H82.363l10.791 7.836-4.123 12.683 10.791-7.836 10.784 7.836-4.122-12.683 10.791-7.836h-13.337zM43.46 114.85l-4.123 12.685H26.001l10.791 7.836-4.123 12.683 10.791-7.836 10.785 7.836-4.122-12.683 10.789-7.836H47.577zM156.183 160.624l-4.122 12.684h-13.336l10.79 7.835-4.121 12.683 10.789-7.835 10.786 7.835-4.123-12.683 10.791-7.835h-13.336zM160.301 219.08l-4.118-12.683-4.122 12.683h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836zM216.663 219.08l-4.117-12.683-4.123 12.683h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836zM212.546 160.624l-4.123 12.684h-13.335l10.789 7.835-4.122 12.683 10.791-7.835 10.785 7.835-4.123-12.683 10.791-7.835h-13.336zM156.183 114.85l-4.122 12.685h-13.336l10.79 7.836-4.121 12.683 10.789-7.836 10.786 7.836-4.123-12.683 10.791-7.836h-13.336zM212.546 114.85l-4.123 12.685h-13.335l10.789 7.836-4.122 12.683 10.791-7.836 10.785 7.836-4.123-12.683 10.791-7.836h-13.336z" />
                  </g>
              </svg>
              英文
            </span>
            <div className="app-card__subtext"> 
              簡易搜尋 單字、表達，例如：
                <span> ( case-sensitive 區分大小寫 ) </span>
              <ul>
                <li>Noun: Canada</li>
                <li>Phrase: looking for</li>
              </ul>
              <div>Remember to select query language</div>
            </div>
            <div className="app-card-buttons">
              {/* <button className="content-button status-button">了解更多</button> */}
              <div className="menu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default SearchRawPage;
