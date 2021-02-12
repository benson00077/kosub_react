import React, {useState, useEffect} from 'react'


function useSelectSentence(idList) {

    const [sentencesID_SelectedList, setSentencesID_SelectedList] = useState([])
    const [ifsentences_SelectedList, setIfsentences_SelectedList] = useState([])

    // Initialize Array: [... , true, true]: include {responseLength}  of true  
    useEffect(() => {
        if (idList) {
            let tempList = Array.from(Array(idList.length), ele => false)
            setIfsentences_SelectedList([...tempList])
        }
        console.log(' ------ useSelectSentence.js --- useEffect render ------')
    }, [idList])



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



    // Access array of true false for CSS for selected or not 
    const ifSentence_Selected_ClickHandler = (i) => {
        const afterSwitch = [...ifsentences_SelectedList]
        afterSwitch[i] = !ifsentences_SelectedList[i]
        setIfsentences_SelectedList([...afterSwitch])
    }

    return [{sentencesID_SelectedList, ifsentences_SelectedList}, {sentenceID_ClickHandler, ifSentence_Selected_ClickHandler}]
}

export default useSelectSentence
