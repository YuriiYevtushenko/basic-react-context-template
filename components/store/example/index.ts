'use client'
import React, {Dispatch, useContext} from "react";
import {contextExampleConstants} from "@/components/store/example/constants";
import {actionCreatorsExample, actionCreatorsExampleType} from "@/components/store/example/actionCreators";
interface IExample{
    counter:number
}

export const initStateCounter:IExample = {
    counter:0
}

export const ContextExample = React.createContext<IExample>(initStateCounter);
export const ContextExampleDispatch = React.createContext<Dispatch<actionCreatorsExampleType>>(()=> {});


export const useContextExample = () => useContext(ContextExample);
export const useContextExampleDispatch = () => useContext(ContextExampleDispatch);

export const exampleReducer = (state: IExample, action:actionCreatorsExampleType) => {
    switch (action.type) {
        case contextExampleConstants.increment_counter:{
            return {...state,counter:state.counter++}
        }
        case contextExampleConstants.set_counter:{
            const {payload} =action as ReturnType<typeof actionCreatorsExample.setCounter>
            return {...state,counter:payload }
        }
        default:
            return state
    }
};


