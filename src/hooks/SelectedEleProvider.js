import { createContext, useContext, useState } from 'react'

export const SelectContex = createContext()

export const SelectedEleProvider = ({ children }) => {
  //e.g. {1000051718: true, 2000057849: true}
  const [select, setSelect] = useState({})
  return <SelectContex.Provider value={[select, setSelect]}>{children}</SelectContex.Provider>
}

export const useSelectContext = () => useContext(SelectContex)