import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from './layout/Counter';
import {CounterSetting} from './layout/CounterSetting';
import {useDispatch, useSelector} from "react-redux";
import {CounterActionsType, incCounterAC, setCounterAC} from "./redux/counterReducer";
import {AppRootStateType} from "./redux/store";
import {counterSettingsType, getMaxValueAC, getStartValueAC} from "./redux/counterSettimgsReducer";

/*const getFromLocalStorage = <T, >(key: string): T | null => {
    const data = localStorage.getItem(key)
    if (!data) return null

    return JSON.parse(data)
}*/

function App() {
    //const [counter, setCounter] = useState(/*getFromLocalStorage<number>('counterStartValue') ||*/ 0)
    //const [startValue, setStartValue] = useState(/*getFromLocalStorage<number>('counterStartValue') ||*/ 0);
    //const [maxValue, setMaxValue] = useState(/*getFromLocalStorage<number>('counterMaxValue') ||*/ 0);
    const [error, setError] = useState<null | string>(null)

    const counter = useSelector<AppRootStateType, number>(state => state.counter)
    const {startValue, maxValue} = useSelector<AppRootStateType, counterSettingsType>(state => state.counterSettings)

    const dispatch = useDispatch()

    /*useEffect(() => {
        const startValueIsString = localStorage.getItem('counterStartValue')
        const maxValueIsString = localStorage.getItem('counterMaxValue')

        if (startValueIsString && maxValueIsString) {
            const startValueNumber = JSON.parse(startValueIsString)
            const maxValueNumber = JSON.parse(maxValueIsString)

            setStartValue(startValueNumber)
            setMaxValue(maxValueNumber)
            setCounter(startValueNumber)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [maxValue])*/

    const incCounter = () => {
        /*setCounter(counter + 1)*/
        dispatch(incCounterAC())
    }

    const resetCounter = () => {
       /* setCounter(startValue)*/
        dispatch(setCounterAC(startValue))
    }

    const getStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = parseInt(event.currentTarget.value)
        if (valueToNumber < 0) {
            setError('set the correct value')
            return
        }
       /* setStartValue(valueToNumber)*/
        dispatch(getStartValueAC(valueToNumber))
    }

    const getMaxValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = parseInt(event.currentTarget.value)
        if (valueToNumber < 0) {
            setError('set the correct value')
            return
        }
        /*setMaxValue(valueToNumber)*/
        dispatch(getMaxValueAC(valueToNumber))
    }

    const SetInCounter = () => {
        setError(null)

        if (startValue === maxValue || startValue > maxValue) {
            setError('set the correct value')
            return
        }
        /*setCounter(startValue)*/
        dispatch(setCounterAC(startValue))
    }

    const clearError = () => {
        setError(null)
    }

    return (
        <div className="App">
            <CounterSetting
                startValue={`${startValue}`}
                maxValue={`${maxValue}`}
                getStartValue={getStartValue}
                getMaxValueInput={getMaxValueInput}
                setInCounter={SetInCounter}
                error={error}
                clearError={clearError}
            />
            <Counter
                counter={counter}
                startValue={startValue}
                maxValue={maxValue}
                incCounter={incCounter}
                resetCounter={resetCounter}
                error={error}
            />
        </div>
    );
}

export default App;
