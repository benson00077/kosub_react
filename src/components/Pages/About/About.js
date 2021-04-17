import React from 'react'

function About({headerImg, headerTitle, headerContent, headerButton}) {

  // svg styling for appcard 1 , konlpy part
  const img_konlpy_style = { fill: 'url(#konlpy)' }
  const img_konlpy_style_ref = (
    <defs>
      <linearGradient id="konlpy" x1="0" x2="1" y1="0" y2="1">
        <stop offset="5%" stopColor="#FF2D00" />
        <stop offset="95%" stopColor="#0036FF" />
      </linearGradient>
    </defs>
  )

  const img_content_wrapper = "./vector-creator.png"

  return (
     <div className="content-wrapper">
      <div className="content-wrapper-header">
        <div className="content-wrapper-context">
          <h3 className="img-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
              <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
            </svg>
            About this website
          </h3>
          <div className="content-text">This is a browse-based app in which one can search the subtitles from K-drama so as to enjoy learning Korean with context</div>
          {/* <button className="content-button">Start free trial</button> */}
        </div>  
        <img className="content-wrapper-img" src={img_content_wrapper} alt=""></img>
      </div>  
        
      
      <div className="content-section">
        <div className="content-section-title">Data Base Building</div>
        <div className="apps-card">

          <div className="app-card">
            <span>
              <svg viewBox="0 0 1000 1000" style={img_konlpy_style}>
                {img_konlpy_style_ref}
                <path d="M381.2 482.3h236.1c65.7 0 118.2-54.1 118.2-120.1V137.1c0-64.1-54-112.2-118.2-122.9-40.6-6.8-82.7-9.8-123.1-9.6-40.4.2-79 3.6-113 9.6C281.2 31.9 263 68.9 263 137.1v90.1h236.4v30H174.3c-68.7 0-128.9 41.3-147.7 119.8-21.7 90-22.7 146.2 0 240.2C43.4 687.2 83.5 737 152.2 737h81.3V629c0-77.9 67.5-146.7 147.7-146.7zm-14.9-315.2c-24.5 0-44.4-20.1-44.4-44.9 0-24.9 19.9-45.2 44.4-45.2 24.4 0 44.4 20.3 44.4 45.2 0 24.9-19.9 44.9-44.4 44.9zm605.6 210c-17-68.4-49.4-119.8-118.2-119.8H765v105c0 81.4-69 149.9-147.7 149.9H381.2c-64.7 0-118.2 55.4-118.2 120.1v225.1c0 64.1 55.7 101.8 118.2 120.1 74.8 22 146.6 26 236.1 0 59.5-17.2 118.2-51.9 118.2-120.1v-90.1H499.4v-30h354.3c68.7 0 94.3-47.9 118.2-119.8 24.7-74.2 23.6-145.4 0-240.4zM632.2 827.2c24.5 0 44.4 20.1 44.4 44.9 0 24.9-19.8 45.2-44.4 45.2-24.4 0-44.4-20.3-44.4-45.2 0-24.8 20-44.9 44.4-44.9z"/>
              </svg>
              DataBase pre-process
            </span>
            <div className="app-card__subtext">
              K-Drama subtitles processed with
              <ul>
                <li>Python</li>
                <li>KoNLPy Module</li>
              </ul>
            </div>
            <div className="app-card-buttons">
              <button className="content-button status-button">
              <a href="https://konlpy.org/en/latest/" 
              target="_blank" rel="noreferrer noopener"
              style={{'textDecoration': 'none', color: '#f9fafb', display: "table-cell"}}>
                What is KoNLPy ?
              </a>  
              </button>
            </div>
          </div>
          
          <div className="app-card">
            <span>
            <svg viewBox="0 0 1000 1000">
              <path d="M289 247.8c-3.4-29.3 23-16.9 19.6.8-4.9 4.7-14.1.8-19.6-.8zm31.4-5.5c6.7-.7 13-1.7 14.9-7.1-9.2-5.7-22.9 8.3-17.3 14.9 3.2-.2.4-6.4 2.4-7.8zm-88 18c5.5-2.6 14.6-1.6 17.3-7.1-16.5-5.7-46.2-1.5-51.1 9.4 12.6-.7 23.1-10.6 33.8-2.3zm-36.9 3.2c-3.6-.8-4.9 3.3-3.1 5.5 2.7-.1 3.1-2.6 3.1-5.5zm-8.7 15.7c-.5-7.5-18.6-13.5-20.4-3.1 1.6 5.8 16.2 9.6 20.4 3.1zm-30.6-7.1c-3.7.2-5.7 2.2-7.9 3.9 2.9 1.7 9.2 1.1 7.9-3.9zm-9.5 21.3c13.8-1 18.1 11.8 29.9 10.2 2.2-13.7-26-32.6-29.9-10.2zm187.1 68.3c-4.1-13.7 8.5-25.5.8-36.2-10.7.9-19.9 50.5-4.7 50.3 10.9-.2 14.8-30.2 15.7-40.1-8 4.6-4.6 20.7-11.8 26zm-131.3-5.5c.2-2.1-1.1-2.6-3.1-2.4.1 2.2 1.8 3.8 3.1 2.4zm38.6 22.8c.2-4.9 0-9.4-3.9-10.2-3-.3-2.8 2.5-4.7 3.1 1 4.2 3.2 7.3 8.6 7.1zm-37.8 25.2c15.1 1.7 25.2 12.6 39.3 12.6-11.3-7.6-23-14.7-40.9-15.7-.5 2.1 1.6 1.5 1.6 3.1zM322 416c-1.2-5.4-3.5-9.6-6.3-13.4 1 5.5 2.4 10.7 6.3 13.4zm-86.5 17.2c-9.9-13.2-25.6-24.7-43.2-27.5 2.5 21.1 26 21.3 43.2 27.5zm-26.7 4.8c-6.7-11.3-18.3-17.9-32.2-22 7.8 9.7 15 24.2 32.2 22zm-36.1-11c2.7 4.7 9.4 9.4 7.9 15.7-6.9-2-10.2-7.6-17.3-9.4 3.7 5.2 18 28.2 26.7 27.5 5.5-.5 8.1-6.6 7.1-16.5-4.3-9.2-17.8-13.2-24.4-17.3zm40.1 20.4c1.7 4.8 2.4 10.7 8.6 11-1.1-5.5-4.3-8.8-8.6-11zm-5.5 2.4c-2.9-.3-4.6.6-4.7 3.1.9.2 1.2.9 1.6 1.6 2.4-.1 3.4-1.8 3.1-4.7zm134.3 18c.8-4.4 1.7-13 0-17.3-1 4.4-4.8 14.4 0 17.3zm-55-16.5c.6 4.6-1.6 12.1 2.4 13.4.2-3.5 1-11.2-2.4-13.4zm37 18.1c-2.3-2-5.6 1-7.1-.8-1.6-5.2-.9-12.7-5.5-14.9h-1.6c-6.5 13.4-5.8 42.2 5.5 49.5 2.1 3.6 2.3 9.2 7.9 9.4 4.5-3.6 5.6-10.6 6.3-18.1-9.9-2-.7-19-5.5-25.1zm23.5 8.6c1-7 6.9-17.1 2.4-24.4-1.5 7-4.4 16.7-2.4 24.4zm-138.3 6.3c1.3-3.6.3-9.7-2.4-11.8-1.8 3.5-2.8 11.4 2.4 11.8zm14.2 3.2c3.2 2.1 3.4 7.1 7.9 7.9 5.5-7.1-5-19.6-7.9-7.9zm134.4 15.7c0 2.4-3.2 5.7-.8 7.9.4-2 2.8-6.1.8-7.9zm7 30.6c0-3.6.4-7.8-1.6-9.4-.3 2.8-2.4 9 1.6 9.4zm-99.8 32.3c.5 2.9.9 5.9 3.9 6.3 2-2.8.6-7.5-3.9-6.3zM300 570c1.1 2.1 4.2 6.2 6.3 4.7-1.8-1.3-3.9-6.5-6.3-4.7zm74.6 8.6c-2.2 9.4 3 17.9 7.1 23.6 1.7-9.1 1.5-22.2-7.1-23.6zm19.7 60.5c1.2-2.4 1.6-9.7-.8-11-2.1 2.9-3.9 9.7.8 11zm35.4 37.8c-1.1-5.8-5.7-12-10.2-11.8 1.5 5.7 1.8 12.8 10.2 11.8zm7 11c0 3.6-.4 7.8 1.6 9.4.1-3.8.1-7.4-1.6-9.4zm-259.3.8c0 2.9 1.6 4.2 3.1 5.5-.3-2.6-.6-5.1-3.1-5.5zM465 731.9c-1.9-14.8-9.7-23.8-19.6-30.6 1.4 15.3 8.9 24.5 19.6 30.6zm126.6 77.8c-.5-.4-3.7-1.8-3.9 0 1.1.9 3.2 2.7 3.9 0zM990 867.8v8.6c-1.3 2.7-1.7 6.2-2.4 9.4-21.9 14-62.9 8.9-80.9 26.7-31.6-17-61 9.8-94.3 12.6-5.5.5-11.6-.5-17.3 0-19.6 1.6-38.8 6.2-58.9 7.9-20.6 1.7-41.3 3-62.9 3.9h-23.6c-97.5-5.1-193.8-18.2-265.6-50.3-35.8-16-68.7-35.6-99-58.9-29.5-22.7-59.7-47.9-81-76.2-22.6-30.1-45.2-59.4-65.2-92.7-19.3-32.1-37.4-66-53.4-103.7-15.9-37.3-27.1-74.1-37.8-119.5-7-29.7-14.3-63.3-26.7-91.2-4.8-10.8-10.5-19.7-11-29.9v-7.1c3.9-33 29.5-52.2 59.7-61.3 7.6-2.3 14.9-4.5 22-8.6.5-.3 5-.7 3.1-3.1-13.4-3.2-24.5 16.6-39.3 11-13.1-4.9-5.6-25.3 8.6-31.4 6.6-2.9 19.8-3.6 25.9-7.1 10.6-5.9 15.3-18.5 13.4-29.9-1.2-6.7-8.2-10.3-7.9-15.7.4-7.6 14-14.2 20.4-18.9 7.9-5.8 17.3-12.9 16.5-22-.8-9.5-11.9-12.5-17.3-19.6-8.4-11.2-9.7-28 3.9-34.6 14.3-6.9 41-3.1 44 14.9 2.6 15.9-8.7 22-3.9 33.8 8.8 22 77.5-12.8 60.5 33 15.1 23.7 74.1 3.4 75.4 40.9 24.6.5 35.9 19.2 55.8 26.7 5.3 2 11.7 2 17.3 3.9 33.5 11.4 75 23.6 88.8 55.8-12.4 8.4-29.4 2.8-44-2.4-12.7-4.5-31.2-13.3-44-7.9-12.7 5.4-12 27-10.2 48.7 4.7 57.7 7.5 117.3 15.7 169 11.5 72.2 36.1 129.9 70.7 175.3 33.5 43.8 72.9 89.7 124.2 121.8 43.2 27 91.8 48.4 153.3 62.1 9.1 2 20.1 6.5 25.1 5.5 7.4-1.4 23.4-23 29.1-28.3 13.5-12.6 31.7-30.2 51.1-14.9-2.6 21-21.4 25.8-25.9 44.8 11.6 7.4 24 .7 38.5 1.6 16.9 1 29.9 10.7 44 8.6 9-1.3 13.6-8 20.4-12.6 15.8 22.9 76-6.8 85.1 21.3zm-170.5-58.1c-.3-2.5 1-6.8-1.6-7.1-2.3 1.2-4.5 8.4 1.6 7.1zM424.2 256.4c7.7 4.6 14.5 10.1 21.2 15.7 4.1-12-7.6-19.6-21.2-18.9v3.2zm211.4 579.2c3 .6 5.2 1.2 5.5-2.4-2.8-.1-4.7.6-5.5 2.4zm-108.5-69.1c-.3 3.7 7.2 3.8 8.7 3.1-1.3-2.5-5-5.6-8.7-3.1zm-18.9-15c1.3 1.3 4.6.6 7.1.8.3-2.9-.9-4.4-1.6-6.3-4.1-.4-5.2 2.1-5.5 5.5zM357.4 430.1c-2.1-1.8-3.7 1.5-4.7 0 2.6-19.5 6.7-49.5-1.6-66-2-1.8-5.3.6-6.3-.8 5.5-13.1 9.2-40.4 7.1-56.6-.7-5.7-3.7-15.8-7.1-18.1-8.5-5.6-16.2 3-22 4.7-3.7 1.1-7.8.3-11.8.8-15.8 1.9-32.7 6.6-43.2 11.8 5.5 3.7 13.3 5 15.7 11.8-13.7-1-24.4-5-36.2-7.9 1.3 17.7-20.5 12.2-33.8 13.4 4.6.1 5.3 2.3 5.5 5.5.5 10.4-33.8 22.8-45.6 14.9-16.8 13.6 7.4 27.4 6.3 44.8-3.3 2.5-4.8 6.7-7.9 9.4-16.7.4-34.3 3.8-31.4 21.2-2.3-1.3-5.8-2.2-8.6-.8-4.3 11 2.9 23 12.6 25.2 2.4-.7 3-3.3 6.3-3.1 21.9 4.2 29.5 18.7 28.3 46.4-.2 4.8.3 11-3.1 14.2-12.4-.9-23.9-31.5-3.9-32.2-4.8-7-8.4-17.6-17.3-17.3-10.2.3-14.7 16.4-22 22 10.5 5.8 35.1 21.8 14.9 32.2 10 1.5 15.5 5.4 19.6 11 6.9 9.3 6.6 23.2 11.8 30.7 10.4 15.2 15.9-13.6 28.3-1.6 2.9 1-1.3-2.8-1.6-3.1-10.6-11.5-26.8-20.9-33-34.6 4.8-2.2 11.2.2 15.7.8 1.8-9.2-4.6-19.7-2.4-26.7 1.6-5.1 4.6-2.8 7.9-4.7 1.9-1.1.4-5.2 3.9-3.9 0 10.8-6.5 28.9.8 36.9 10.7 1.9 13.7-16.4 22.8-16.5 5.1 0 9.8 8.9 13.4 13.4 4.2 5.4 10 12 8.6 18.1-2.8 12.7-24.2 3-31.4-2.4 4.4 17.6 31.7 20.3 33 43.2.1 2.6-1.1 5.8-.8 8.6 1.5 12.1 12.8 21 24.4 13.4 1.7 4.3 1.9 10.1 6.3 11.8 3.8-3.2 2.5-11.7 4.7-16.5 13.7 2.9 20.9 9.5 25.1 20.4 2.1 5.4 1.6 15.5 10.2 15.7 1.3-13.4-9.2-21.7-11-34.6 7 11.4 32.5 23.7 31.4 41.7-.7 11.9-14.8 13.2-28.3 14.9 12.9 4.4 18.3 18.9 32.2 23.6 3.7 1.3 8.6.2 12.6 1.6 10.2 3.5 26.5 24.5 22 37.7-21.7 11-38.7-18.7-62.9-18.1 10.2 13 26.9 17.3 40.9 23.6 15.1 6.7 30.2 13.6 44.8 20.4 34.5 16 58.4 37 80.9 63.7-15.7 8.5-63.1-5.7-34.6-15.7-9.9-.3-20.4-6.6-29.1-3.1 4.6 30 44 25.1 73.9 29.9-2.7 5.1-6.5 9.2-9.4 14.1 2.3 1.4 5.5 1.9 9.4 1.6-1.9 3.1-6.9 3.1-7.1 7.9 3.8 5.1 11.4 6.4 16.5 10.2 20.2-14.5 22.5 18.4 35.4 18.9 12.2.5 14.5-17.1 26.7-18.9-3.1 6.4-9.1 9.8-11.8 16.5 11.9-2.9 15.3-9.3 25.1-11.8 35.1-8.9 63.9 20.4 92.7 23.6 10.4 1.2 20.7 7 29.9 8.6 11.8 2.1 19.1-1.8 28.3-6.3-14-13-46-8-57.4-23.6.4-2.7 2.3-4 3.9-5.5-36.8 8.1-59.9-14-75.4-34.6-45.4-11.7-85.2-29-104.5-66.8-.9-3.6 3.5-1.8 2.4-5.5-16-17.8-31.9-35.8-44.8-56.6-4.5-7.2-7.5-16.2-12.6-22-3.2-3.7-8.6-5.7-11.8-9.4-3.5-4.1-4-9.3-9.4-11-2.1 3.1-.7 9.8-2.4 13.4-3.8-15.2-12.2-29.6-28.3-29.9-.3-11 8.6-12.9 13.4-18.9-6.2-7.5-7.7-17-11-28.3-7.9-27.5-14.5-56.3-21.2-81.7-9 3.3-11.3 13.3-15.7 21.2.4-11.4 1-22.6 7.1-28.3 2.8.4 3.1 3.2 4.7 4.7 1.5-5.4 6.5-10.3 3.9-17.3-2-3.1-8-1.7-9.4-1.6 4-9.6 7.2-26.8 2.5-37.8zm315.9 466c6.8-2.9 12.9-6.5 15.7-13.4-7.4 1.9-17.8 4.7-15.7 13.4zm.8-15.7c-4.5 2.5-9.7 4.5-12.6 8.6 6.5.4 14.1-6.1 12.6-8.6zm-24.4 11.8c4.4-1.2 9.2-5.8 8.6-9.4-5.1.5-13.1 4.2-8.6 9.4zm3.2-18.1c-7.1-2.2-12.8 3.3-13.4 10.2 6.3-1.5 10.6-5.1 13.4-10.2zm-22.1 1.6c-6.9 1.2-12.1 4.1-14.1 10.2 8.4 3.4 12.8-3.9 14.1-10.2zm-11 20.4c1.9.1 3.8.1 3.9-1.6-1.1-1.2-4.4-1.1-3.9 1.6zm12.6-33.8c-11-.8-24.1 6.3-17.3 15.7 7.4-3.6 14.8-7.2 17.3-15.7zm-54.2 15c6.9 1 8.7-6.9 13.4-5.5 2.7 1.7 1.1 7.8 5.5 7.9 10.3-2.1 14-16.1 7.9-25.9-13.9 2.3-26.6 10-26.8 23.5zm3.1-20.5c-4.2 2.1-8.6 3.9-11 7.9 5.2-.2 12.8-5.9 11-7.9zm-22 4c.4 2.1-3.2 4-.8 5.5.7-1 4.8-4.9.8-5.5zm-14.1 18.8c-.2 1.1-1.1 1.5-.8 3.1h3.1c.3-2-.2-3.3-2.3-3.1zm-11.8-3.9c-4 .2-5.5 2.9-5.5 7.1 3.4-.8 6.5-1.9 5.5-7.1zM454 835.6c-4.8-.2-6.3.5-.8 1.6 5.3 1 14.6 1.5 18.1 0-4.1-.1-14.9-1.5-17.3-1.6zm23.6-12.6c-4.1-3.1-12.4-.9-16.5.8 2.4 6.6 14.1 3.7 16.5-.8zm-25.1 59c19.6 10.3 46.6 21.5 74.7 18.1-20.5-10-50.8-14.3-74.7-18.1zm-29.1-8.7c1.9 2.6 6.3 2.6 9.4 3.9 5.8-5.5-6.9-8.7-9.4-3.9zm-73.9-63.6c-5.3.5-11.1.4-12.6 4.7 5.1 1.9 12.4.7 12.6-4.7zm-14.9 20.4c1.8 1.7 5.2 3.7 6.3 0-.9-.8-5.7-1.6-6.3 0zm9.4-66.8c.7-3.3-5.5-4.5-6.3-1.6 1.7.9 3.2 2.1 6.3 1.6zm10.2 26.7c0-1.1.4-1.7.8-2.4-2.3-2.4-7.1-2.8-11-1.6.6 3.9 6.9 5.5 10.2 4zm.8 50.3c1 1.1 3.7 1.1 4.7 0 .4-2.5-1-3.2-2.4-3.9-.6 1.4-1.8 2.3-2.3 3.9zm24.4-90.3c-2.6-7.4-10.9-5.4-16.5-7.9-9-3.9-16.7-13.1-28.3-13.4H333c10.1 11.9 23.5 24.7 46.4 21.3zm-40.9-29.1c-7.3-5-15.4-9.3-25.9-11 3.3 8.4 16.4 11.3 25.9 11zm24.4 36.9c5.5 5.8 12.4 10.1 24.4 9.4-4.7-6.1-15.6-10.1-24.4-9.4zm29.8 35.4c-8.1-5.6-20.8-14.7-31.4-12.6 6.1 8 18.5 14 31.4 12.6zM362.9 823c-.2 1.1-1.3 1.3-1.6 2.3 1.9 2.6 4.8-1.7 1.6-2.3zm18 23.6c.7 3 3.6 3.8 6.3 4.7 1.1-1.8 3.2-2.6 2.4-6.3-1.9-1.1-8.8-1.8-8.7 1.6zm15-34.6c-2.4-1.5-11.3-3.2-13.4 0 3.8 1.6 11.3 5.6 13.4 0zm2.3-26.7c.8-5.8-5.8-5.9-8.6-3.9.2 3.9 5.4 2.9 8.6 3.9zm8.7-42.4c-3.5-5.4-13.4-4.4-20.4-6.3-5.1-6.5-17.4-8.8-28.3-7.1 12.4 8.3 26.5 14.9 48.7 13.4zm-1.6 75.4c3.4 2.9 8.7 3.9 13.4 5.5.3-1.9 1.2-3 .8-5.5-2.3-2.6-12.3-4-14.2 0zM338.5 691c.8-3.7-1.4-4.4-4.7-3.9-1.2 4.1 2.7 3 4.7 3.9zm18.9 9.4c-2.3-.6-1.5-4.2-4.7-3.9-3 2.7 2.3 6.7 4.7 3.9zm-54.3 5.5c-2.6-5.8-8.5-8.3-12.6-12.6 7.7-11.1-9.4-15.6-12.6-23.6 0-2.4 1.7-3.1 2.4-4.7-6.6-3.9-14.2-6.7-18.1-13.3 3-2.2 11.1.7 14.1-1.6-4.8-2-9.9-3.7-11.8-8.6 2.8-6.4 14-4.4 16.5-11-13.5-3-27-10.2-41.7-9.4.2 5.6 5.1 6.4 7.1 10.2-4.3-1.9-7.9-4.7-14.1-4.7-.5 3.9 2 4.8 1.6 8.6-4.3.4-6.5-1.4-11-.8 3.2 7.2 11.6 9.4 14.1 17.3-3.2.8-7.6-1.3-8.6 0 8.3 6.9 20.4 14.2 25.1 22-7.7-1.4-12.1-6.2-19.6-7.9 6.3 12.4 21.6 15 33 21.2 11.8 6.4 22.3 16.6 36.2 18.9zm-17.3 9.5c3.3 1.8 9.8 7.5 14.1 3.2-3.6-1.7-9.3-5.4-14.1-3.2zm-6.2-4c-2.2-3.6-13.5-5.5-16.5-3.1 5.1 1.5 9.9 5.5 16.5 3.1zm-14.2 2.4c-.2 1.1-1.1 1.5-.8 3.1 1.4-.5 4.6.9 4.7-.8-1.2-.8-1.6-2.5-3.9-2.3zm-10.2-104.5c-2.1-7.4-5-15.5-11-21.2-3.2-3.1-6.4-3-8.6-7.1-6.1-10.7-3.2-25.8-11-36.9-1.9-.6-5.4-1.6-7.1 0 .1 5.2 12.1 17.4 3.9 23.6-18.1.7-25-13.7-42.4-11-3.9 10.2 9.9 15.4 6.3 22.8 25 7.9 44.8 25.3 69.9 29.8zm-56.6 23.6c4.6 3.5 11.3 9.1 17.3 8.6-4.8-3.4-9.1-11.3-17.3-8.6zm-8.6-7.1c-2-6.3-5.6-11.2-13.4-11.8 1.6 6.8 9 7.8 13.4 11.8zm-13.4 20.4c4.2 2.9 8.4 9.9 12.6 10.2-3.1-4-6.8-11.5-12.6-10.2zm5.5-54.2c.4-1.2 1.2-2 1.6-3.1-2-2.8-7-1.3-7.9 1.6 1.6 1 4.5.7 6.3 1.5zm121.8 31.4c-.1-6.8-7.6-10.7-13.4-7.1 1.9 5.1 7.4 6.4 13.4 7.1zM230 520.5c.1-1.3-4.8-1.3-4.7 0 1.1.2 4.8 3.5 4.7 0zm-30.6-3.2h-3.1c-1.1 1-.8 3.4-.8 5.5 1.4.2 4.4 2.8 5.5.8-2-.7.2-5.4-1.6-6.3zm-58.9-.8c2.6 5.9 13.1 5.5 14.9-.8-4.5-1.7-11.1-.5-14.9.8zm2.3-22c-3-.2-5.8 0-7.9.8.7 3.5 7.9 2.8 7.9-.8zm7.1-126.5c-4 1.9-12.5-1.9-16.5 0 3.6 14.2 30.1 6.5 28.3-4.7-1.5-9.5-26.7-7.2-35.4-6.3 6.7 4.8 17.3 5.7 23.6 11zm-31.4 14.9c1.5 2.2 5.5 1.8 7.9 3.1.5-1.6 2-2.2 1.6-4.7-2.2-1-9.6-1.9-9.5 1.6zm40-3.1c-.4 1.7-1.9 5.1.8 5.5 1.9-1.3 1.5-4.4-.8-5.5zm22-47.2c-.2-2.3 1.8-2.4 1.6-4.7-3.2-.3-5.5.3-5.5 3.1 1.5.4 2 1.8 3.9 1.6zm-.7-174.4c-3.1 19.2 14.1 42.4 34.6 35.4 1-7.2-2.3-10.2-2.4-16.5 5.2-1.3 8.3 3.7 11 2.4-7.7-13.9-28-15.1-43.2-21.3zm-8.7-18.1c6.9 1.4 17.7.7 20.4-4.7-5.2-3.5-20.8-4.4-20.4 4.7zm-18.9-55c1.5-15.3-17.1-23.7-28.3-13.4-7 6.5-10 22.1.8 27.5-1.2-4-4.8-5.7-3.9-11.8 8.2-4.6 23.2 2.3 31.4-2.3zm-5.5 50.3c2-1.1 5-1.3 4.7-4.7-2.4.2-6.5 2.8-4.7 4.7zm-16.5 58.1c9.8.2 17.2-5.3 26.7-5.5 8.3-.2 16.1 2.3 25.9 1.6-6.9-20.6-41-2.6-52.6 3.9zm-14.9 36.2c18.5-2.4 44.4-14.6 69.2-11.8 9.3 1 17.5 6.3 22.8 10.2-2.7-2.9-5.9-14.6 0-16.5 12.9 2.5 13.3 26.8 29.1 23.6 8-1.7 10.5-17.2 6.3-26.7 6 4.2 9.1 11.3 17.3 13.4-1.9-7.6-7.3-11.6-11-17.3 2.3-2.9 5.4-5.1 4.7-11-22.5-2.2-42.5 10-63.7 14.1-16.5 3.2-28.7 6.5-43.2 10.2-11 2.8-23.1 4.8-31.5 11.8zm-66 162.7c-1.1 1-1.4 4.7.8 4.7.6-.6 2.1-5.4-.8-4.7zm27.5-93.5c-34.5 5.5 2.3 42.1 22.8 33 2.6-4 1.8-7.6 1.6-13.4 12 1.2 21-4.7 31.4-2.4 1.7 3.7-1.5 6.7-2.4 10.2 35.7-2.3 53.3-30.3 91.9-34.6 4.8-.5 10.3.3 15.7 0 16.3-.9 34.3-4 51.1-7.1 16.5-3 31.5-9.1 45.6-12.6 17.6-4.4 44.4-15.9 40.9-39.3-.4-2.7-2.3-5.1-3.9-7.9-93.7-9.1-163.7 27.7-237.3 42.4-8.8 1.8-19.6.6-26.7 7.9 2.6 6.3 11.6 6.2 15.7 11-2 2.4-7.1 1.8-7.9 5.5 1.7 6.6 11.6 5.2 12.6 12.6-15.6 11-48.4-3-40.9-25.2-23.6 5.2-58.1 10.3-58.2 36.9 0 11.7 6.9 22.6 14.9 29.1-5.3-24.5 3.9-61.1 33.1-46.1zm29.1 146.9c.7-5.3-8-9-11-5.5 2.9 2.6 7.4 3.6 11 5.5zM78.4 456c5.6 19.3 7.4 42.4 22 52.7-2.2-22.7-10.3-39.5-22-52.7zm33-20.4c2.4-11.1-13.8-15.4-14.9-7.9-1 6.6 9.4 5.9 14.9 7.9zm3.1-21.2c-3.5-3.9-12.5-6.3-18.9-4.7 2.3 5.5 16.2 13.8 18.9 4.7zm-9.4-34.6c3.5-2.2 7.3-4.2 7.9-9.4-4.6-3.4-15.5-3.9-16.5 1.6-.8 4.1 4.7 5.8 8.6 7.8zm10.2 13.4c.3-2.7-.3-4.4-.8-6.3-4-.1-5.9 1.9-6.3 5.5 2 .6 4.2 1 7.1.8zm-55-4c-.6-2-.8-4.5-2.4-5.5-1.9 2.1-2 5.9 2.4 5.5zm7.9-53.4c-3.5-1.4-8.7.1-10.2 3.1 1.6 1.5 4 2.3 6.3 3.1.7-2.5 4.3-2.4 3.9-6.2zm8.6 101.4c-2-4.5-2.3-10.8-6.3-13.4-10.7 1.5-.1 17 6.3 13.4zM91.7 522c7.7 18.6 15.8 38.6 32.2 47.2-12.3-13.7-15.2-36.3-23.6-52.7-2.9-5.6-7.5-10-10.2-15.7-6.4-13.4-9.3-29.1-22-35.4 5.1 19.8 15.8 37.7 23.6 56.6zm216.2 294.8c-4.8-16.2-17.5-24.4-35.4-27.5-4.4-10.5-17.1-12.7-19.6-25.1-.4-2.6 4.9-3.5 3.1-4.7-23.9 4.5-24.8-20.8-36.2-31.4-28.7.5-23.4-35-39.3-53.4-4.5-5.3-9-6.5-14.1-11.8-7.9-24.3-28.3-36.7-40.1-58.2-10.4-19.1-12.6-40.6-29.9-54.2 13.6 46.2 42.9 85.3 69.2 124.2 21 31.1 35.3 60.8 58.9 85.7 8 8.4 17.1 14.1 26.7 22 16.5 13.2 27.8 38.2 56.7 34.4zm-3.2-53.5c-.8-3.4-6.9-5.6-10.2-3.9 3 1.7 6.4 3 10.2 3.9zm29.1-20.4c-5.3-6.2-16.5-8.6-26.7-12.6-12.7-5-30.9-9.7-40.1-3.9.9 7.7 7.1 10.2 11 14.9 10.9 1.7 17.2 7 27.5 7.9 12.2 1 23.6.4 28.3-6.3zm374.8 179.2c-23.8-10.8-58.7 1.4-84.1-4.7-4.8-1.2-9-4.5-13.4-4.7-4.3-.3-9.3 2-13.4 2.4-21.8 1.9-41.7-.2-62.1-3.2-14.3-2.1-29.6-2.9-42.4-6.3-12.3-3.3-25.1-10.8-37.7-15.7-12.8-5-26.2-9.9-38.5-14.9-24.3-9.9-50-27-75.4-33.8 17.1 18.2 46.7 24.1 66.8 39.3-28.5-8-49.9-22.9-75.4-33.8 19.9 17.8 47.6 28.6 75.4 40.1 27.7 11.5 57.8 21.1 90.4 25.9 64.7 9.5 140.5 23.6 209.8 9.4zm20.5-2.4c-4 .2-9.1-.7-9.4 3.1 3.4 3 9.1 2.7 9.4-3.1zm42.4-92.7c1.1 5.8 9.5 4.1 8.7-2.4-4.3-.6-6.2 1.2-8.7 2.4zm65.2 40.8c-21.1-.5-47.2-7.8-69.2-7.1-8.4.3-18.7 2.3-21.2 11 6.5 2.6 13.4 1.1 21.2.8 25.6-.8 56.7 10.6 69.2-4.7zm21.3-1.5c-3.7 0-4.8 2.6-5.5 5.5 1 1.1 3.4.8 5.5.8-.4-3.5 1-4 0-6.3zm46.3-3.2c-3.8-.6-5.3 4.2-3.9 6.3 2.5.4 3.1-1.1 4.7-1.6.6-2.4-1.3-2.3-.8-4.7zm65.3 4.7c-16.1-1.7-34.9-.7-49.5 1.6 8.6 8.1 39.5 2.9 49.5-1.6zM213.5 390c7.8 4.3 14.9 13.4 25.2 12.6-2.8-3.8-6.7-6.4-9.4-10.2 2.9-.2 5.4-.9 6.3-3.1-9.6-6.7-21.8-14.9-26.7-23.6 3.2 6.2 8.1 16.2 4.6 24.3zm100.6 6.3c-1.7-1.7-.9-5.9-3.1-7.1-.5 3.5 1.7 8.2 3.1 7.1zm-72.3 68.4c1.2 12.9 9.5 18.8 10.2 32.2-9.2-10.5-14.3-25-20.4-38.5-.6 16.4 4.3 26.5 8.6 37.7 3.3 8.6 6.4 18.7 14.9 21.2 4-.7 3.8-5.7 7.9-6.3 4.4.6 6.6 7.5 9.4 7.1-2.1-2.4-2.8-6.2-3.1-10.2.8-2.9 4.9-2.4 6.3-4.7-7.9-16.2-19.2-29-33.8-38.5z"/>
            </svg>
              Back-end
            </span>
            <div className="app-card__subtext">
              RESTful api built with 
              <ul>
                <li>Flask + PostreSQL</li>
                <li>Deployed on Heroku</li>
              </ul>
            </div>
            <div className="app-card-buttons">
              {/* <button class="content-button status-button"> */}
                <a href="https://github.com/benson00077/kosub_api_heroku" target="_blank" rel="noreferrer noopener">
                  <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" fill="white">
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                  </a>  
              {/* </button> */}
            <div className="menu"></div>
            </div>
          </div>

          <div className="app-card">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
              <g fill="#61DAFB">
                <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                <circle cx="420.9" cy="296.5" r="45.7"/>
                <path d="M520.5 78.1z"/>
              </g>
            </svg>
              Front-end
            </span>
            <div className="app-card__subtext"> 
              SPA built with
              <ul>
                <li>HTML + CSS</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="app-card-buttons">
              {/* <button class="content-button status-button"> */}
                <a href="https://github.com/benson00077/kosub_react" target="_blank" rel="noreferrer noopener">
                <svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20" fill="white">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                </a>
              {/* </button> */}
              <div className="menu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default About;
