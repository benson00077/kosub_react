import {useState} from 'react'

function useSelectSentenceId() {

    const [sentencesID_SelectedList, setSentencesID_SelectedList] = useState([])

    // Access array of sentence ID
    const sentenceID_ClickHandler = (id) => {
        let tempList = []
        // cancel or push selection to list
        if (sentencesID_SelectedList.includes(id)) {
            tempList = sentencesID_SelectedList.filter(ele => ele !== id)
        } else {
            tempList = [...sentencesID_SelectedList, id]
        }
        // setSentencesID_SelectedList([...new Set(tempList)])
        setSentencesID_SelectedList([...tempList])
    }

    return [sentencesID_SelectedList, sentenceID_ClickHandler]
}

export default useSelectSentenceId
