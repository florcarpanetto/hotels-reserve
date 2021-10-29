/**
 * Dependencies
 */
import { createContext, useState } from 'react';

/**
  * Context
  */
export const AppContext = createContext();

/**
  * Provider Wrapper
  */
export function AppProvider({children}) {
    const [currentOption, setCurrentOption] = useState("default")

    const providerValue = {currentOption, setCurrentOption};

        return (
        <AppContext.Provider value={providerValue}>
            {children}
        </AppContext.Provider>
        )
}