import React from 'react'

function ContentWrapper({ isSearchController, isAboutController, isHomeController, ...rest }) {
  const appCardsRenderer = (koList, zhList, enList) => {
    return (
      <React.Fragment>
        <div className="app-card">
          <span>
            {rest.appCardImg}
            {rest.appCardTitle}
          </span>

          <div className="app-card__subtext">{rest.appCardSubtext}</div>

          <div className="app-card-buttons">
            <button className="content-button status-button">{rest.appCardButton}</button>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className="content-wrapper">
      <div className="content-wrapper-header">
        <div className="content-wrapper-context">
          <h3 className="img-content">
            {rest.headerImg}
            {rest.headerTitle}
          </h3>
          <div className="content-text">{rest.headerContent}</div>
          <button className="content-button" onClick={rest.headerButtonHandler}>
            {rest.headerButton}
          </button>
        </div>
        <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""></img>
      </div>

      <div className="content-section">
        <div className="content-section-title">{rest.sectionTitle}</div>
        <div className="apps-card">{appCardsRenderer(rest.ko, rest.zh, rest.en)}</div>
      </div>
    </div>
  )
}

export default ContentWrapper
