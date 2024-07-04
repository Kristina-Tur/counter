import {ChangeEvent} from "react";

type getStartValueActionType = ReturnType<typeof getStartValueAC>
type getMaxValueActionType = ReturnType<typeof getMaxValueAC>

type CounterSettingsActionsType = getStartValueActionType |
    getMaxValueActionType

export type counterSettingsType = {
    startValue: number
    maxValue: number
}

const initialState: counterSettingsType = {
    startValue: 0,
    maxValue: 0
}

export const counterSettingsReducer = (state: counterSettingsType = initialState, action: CounterSettingsActionsType) => {
    switch (action.type){
        case "GET-START-VALUE":{
            return {...state, startValue: action.payload.value}
        }
        case "GET-MAX-VALUE":{
            return {...state, maxValue: action.payload.value}
        }
        default: return state
    }

}

export const getStartValueAC = (value: number) => {
    return {type: 'GET-START-VALUE', payload: {value}} as const
}
export const getMaxValueAC = (value: number) => {
    return {type: 'GET-MAX-VALUE', payload: {value}} as const
}
