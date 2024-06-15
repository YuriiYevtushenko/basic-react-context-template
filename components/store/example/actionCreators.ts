import {contextExampleConstants} from "@/components/store/example/constants";

const incrementCounter = () => {
    return {type: contextExampleConstants.increment_counter}
}
const setCounter=(payload:number)=>{
    return {type: contextExampleConstants.set_counter,payload}
}
export type actionCreatorsExampleType=ReturnType<typeof actionCreatorsExample[keyof typeof actionCreatorsExample]>
export const actionCreatorsExample = {
    incrementCounter,setCounter
}