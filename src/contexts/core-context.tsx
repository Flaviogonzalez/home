import React, { createContext } from "react";


export const CoreContext = createContext({} as any);

export const CoreProvider = ({ children } : {children : React.ReactNode}) => {
    return (
        <CoreContext.Provider value={{
            
        }}>
            {children}
        </CoreContext.Provider>
    )
}