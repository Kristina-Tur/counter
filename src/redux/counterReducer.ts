type incCounterActionType = ReturnType<typeof incCounterAC>
type resetCounterActionType = ReturnType<typeof setCounterAC>

export type CounterActionsType = incCounterActionType |
    resetCounterActionType

const initialState:number = 0

export const counterReducer = (state: number = initialState, action: CounterActionsType) => {
    switch (action.type) {
        case "INC-COUNTER": {
            return state + 1
        }
        case "SET-COUNTER": {
            return action.payload.startValue
        }
        default: return state
    }
}

export const incCounterAC = () => {
    return {type: 'INC-COUNTER'} as const
}
export const setCounterAC = (startValue: number) => {
    return {type: 'SET-COUNTER', payload: {startValue}} as const
}
