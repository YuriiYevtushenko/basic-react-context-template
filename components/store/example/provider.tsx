'use client'
import React, {useReducer} from "react";
import {
    ContextExample,
    ContextExampleDispatch,
    exampleReducer,
    initStateCounter
} from "@/components/store/example/index";


export const ContextProviderExample = ({children,}: { children: React.ReactNode }) => {
    const setPredefinedData = () => {
        return initStateCounter
    }

    const [state, dispatch] = useReducer(exampleReducer, initStateCounter, setPredefinedData)


    return <ContextExample.Provider value={state}>
        <ContextExampleDispatch.Provider value={dispatch}>
            {children}
        </ContextExampleDispatch.Provider>
    </ContextExample.Provider>
}