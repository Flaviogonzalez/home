import React, { createContext, useState, useEffect, useCallback, useRef } from "react";

interface IntersectionContext {

}

export const IntersectionContext = createContext({} as IntersectionContext);

export const IntersectionProvider = ({ children } : {children : React.ReactNode}) => {



    return (
        <IntersectionContext.Provider value={{

        }}>
            {children}
        </IntersectionContext.Provider>
    )
}