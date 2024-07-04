import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {counterSettingsReducer} from "./counterSettimgsReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    counterSettings: counterSettingsReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>