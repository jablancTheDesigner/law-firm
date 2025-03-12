import {createContext, useContext} from 'react';
import { useState } from 'react';

export const AppContext = createContext({
    brandName: 'theLawFirm',
    isSignedIn: false,
    setIsSignedIn: () => {}
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {
    const [brandName, setBrandName] = useState("theLawFirm");
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <AppContext.Provider value={{isSignedIn, setIsSignedIn, brandName, setBrandName}}>
            {children}
        </AppContext.Provider>
    )
}