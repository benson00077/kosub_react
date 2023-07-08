import { useSelectContext } from '../hooks/SelectedEleProvider'
import { useShowHideContext } from '../hooks/ShowHideEleProvider'

function AppCards({ speechResult, getSelectedIds }) {
  const [showLang, _] = useShowHideContext()
  const { ko, zh, en } = showLang

  const [selected, setSelected] = useSelectContext()
  const lineSelectHandler = (e, id) => {
    if (selected[id]) {
      const copied = { ...selected }
      delete copied[id]
      setSelected(copied)
      getSelectedIds(Object.keys(copied))
    } else {
      setSelected({ [id]: true, ...selected })
      getSelectedIds(Object.keys({ [id]: true, ...selected }))
    }
  }

  const formatBreakRow = (subtitles) => {
    if (!subtitles) return <p className="lg:w-1/3">{'🫥'}</p>
    return (
      <p className="lg:w-1/3">
        {subtitles.map((subtitle, i) => {
          return (
            <span key={i}>
              {subtitle} <br />
            </span>
          )
        })}
      </p>
    )
  }

  return (
    <>
      {/* <div className={styles.appCardOne}> */}
      <div className="p-4 bg-sky-600/10 rounded-lg">
        <>
          {speechResult.map((entity) => {
            const id = entity.timeId
            return (
              <div
                onClick={(e) => lineSelectHandler(e, id)}
                key={id}
                className={`lg:flex space-x-8 py-2 px-4 hover:bg-blue-600/75 rounded-2xl cursor-pointer ${
                  selected[id] ? 'bg-blue-600/40' : ''
                }`}
              >
                {ko && formatBreakRow(entity.subtitles)}
                {zh && formatBreakRow(entity.subtitlesZh)}
                {en && formatBreakRow(entity.subtitlesEn)}
              </div>
            )
          })}
        </>
        {/* <div className="app-card-buttons" >
                    <button className="content-button status-button"> ^ </button>
                </div> */}
      </div>
    </>
  )
}

export default AppCards
