import React, { useState } from 'react'

export const SearchContext = React.createContext()

export const SearchContextProvider = props => {
    const [searchResult, setSearchResult] = useState({
        queryLanguage: 'ko',
        mainQuery: '',
        result: { id: [], ko: [], zh: [], en: [] },
        result_number: 0,
        isLoading: false,
        noResult: false
    });
    // status: unsearched, searched, noResult, isLoading

    return (
        <SearchContext.Provider value={[searchResult, setSearchResult]}>
            {props.children}
        </SearchContext.Provider>);
}