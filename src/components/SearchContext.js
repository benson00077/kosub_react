import React, { useState } from 'react'

export const SearchContext = React.createContext()

export const SearchContextProvider = props => {
    const [SearchResult, setSearchResult] = useState({
        queryLanguage: 'ko',
        mainQuery: '',
        result: {id:[], ko:[], zh:[], en:[]},
        result_number: 0
    });

    return (
        <SearchContext.Provider value={[SearchResult, setSearchResult]}>
            {props.children}
        </SearchContext.Provider>);
}

