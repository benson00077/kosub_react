import { useShowHideContext } from '../../context/ShowHideLanContext'
import TogglerButton from '../ToggleButton'

function SentencesToolKit() {
  const [showLang, setShowLang] = useShowHideContext()

  const showHideHandler = (flag) => {
    if (!Object.keys(showLang).includes(flag)) {
      console.error('Flag is wrong.')
      return
    }
    const copied = { ...showLang }
    copied[flag] = !copied[flag]
    setShowLang(copied)
  }

  return (
    <div class="space-y-4 relative ">
      <TogglerButton
        text="Korean"
        onClickCb={() => {
          showHideHandler('ko')
        }}
      />
      <TogglerButton
        text="Chinese"
        onClickCb={() => {
          showHideHandler('zh')
        }}
      />
      <TogglerButton
        text="English"
        onClickCb={() => {
          showHideHandler('en')
        }}
      />
    </div>
  )
}

export default SentencesToolKit
