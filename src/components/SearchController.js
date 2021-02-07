import React, { useState }from 'react'
import axios from 'axios'
import ContentWrapperSearch from './ContentWrapperSearch'

function SearchController(props) {

    const {ko, zh, en, id} = props
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawResponse, setDrawResponse] = useState({})


    const toggleDrawer = (id) => {
        setIsDrawerOpen(!isDrawerOpen)
        if (Object.keys(drawResponse).length === 0){
        axios
            .get(`http://127.0.0.1:5000/sub/search/all?id=${id}&contextrange=5000`)
            .then(res => {
                console.log(res)
                setDrawResponse(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            setIsDrawerOpen(!isDrawerOpen)
            setDrawResponse({})
        }
    }

    const headerButtonHandler = () => {
        setIsDrawerOpen(false)
        setDrawResponse({})
    }

    
    return (
        <React.Fragment>

          <ContentWrapperSearch 
            isSearchController={true} 
            ko={ko} zh={zh} en={en} id={id} 
            toggleDrawer={toggleDrawer}
            headerTitle="Context" 
            sectionTitle="Query Result"
            
            isDrawerOpen={isDrawerOpen}   
            drawerResponseKo={drawResponse.ko} 
            drawerResponseZh={drawResponse.zh} 
            drawerResponseEn={drawResponse.en} 
            drawerResponseId={drawResponse.id}
            headerButton={'close'}
            headerButtonHandler={headerButtonHandler}

            />
         
        </React.Fragment>
    )

}

export default SearchController
