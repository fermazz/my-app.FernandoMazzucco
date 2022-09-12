import React, {createContext, useState} from "react";

const DarkModeContext = createContext()

const DarkModeProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false); 
    // false o true /Ligth o Dark

    // Forma de modificar el estado
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {props.children}
            </DarkModeContext.Provider>
        </>
    )
}

export { DarkModeContext, DarkModeProvider}