import {useState, useEffect} from 'react'

function useIfSelectSentence(idList) {

    const [ifsentences_SelectedList, setIfsentences_SelectedList] = useState([])

    // Initialize Array: [... , true, true]: include {responseLength}  of true  
    useEffect(() => {
        if (idList) {
            let tempList = Array.from(Array(idList.length), ele => false)
            setIfsentences_SelectedList([...tempList])
        }
        console.log(' ------ useSelectSentence.js --- useEffect render ------')
    }, [idList])


    // Access array of true false for CSS for selected or not 
    const ifSentence_Selected_ClickHandler = (i) => {
        const afterSwitch = [...ifsentences_SelectedList]
        afterSwitch[i] = !ifsentences_SelectedList[i]
        setIfsentences_SelectedList([...afterSwitch])
    }

    return [ifsentences_SelectedList, ifSentence_Selected_ClickHandler]
}

export default useIfSelectSentence
