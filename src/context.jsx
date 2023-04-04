import {createContext, useState, useContext, useEffect} from "react"

const GlobalContext = createContext()

import data from "./data.json"

//custom hook
export const useGlobalContext = () => useContext(GlobalContext)


const AppContext = ({children}) => {
    const [globalDest, setGlobalDest] = useState('moon')
    const [globalCrew, setGlobalCrew] = useState('douglas hurley')
    const [globalTech, setGlobalTech] = useState('launch vehicle')

    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width: 45em)").matches)

    const checkIsDesktop = (x) => {
        // console.log(`checkIsDesktop: ${x.matches}`)
        setIsDesktop(x.matches)
    }

    useEffect( () => {
        // for technology page, image need to change to portrait
        var x = window.matchMedia("(min-width: 45em)")
        x.addEventListener('change', checkIsDesktop)
        // console.log(`IsDesktop: ${isDesktop}`)
    },[])

    return (
        <GlobalContext.Provider
          value={{data,
          globalDest, setGlobalDest,
          globalCrew, setGlobalCrew,
          globalTech, setGlobalTech,
          isDesktop}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext