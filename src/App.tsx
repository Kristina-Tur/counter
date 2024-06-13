import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter2} from './components/Counter2';
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Exam} from './exam';
import {Button} from "./components/Button";
import {json} from "node:stream/consumers";


function App() {
    const [counter, setCounter] = useState(0)
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [error, setError] = useState<null | string>(null)

    useEffect(() => {
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
    }, [maxValue])

    const incCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(0)
    }

    const getStartValue = (event: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = parseInt(event.currentTarget.value)
        setStartValue(valueToNumber)
    }

    const getMaxValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        const valueToNumber = parseInt(event.currentTarget.value)
        setMaxValue(valueToNumber)
    }

    const SetInCounter = () => {
        setError(null)
        if(startValue === maxValue || startValue > maxValue){
            setError('set the correct value')
        }else{
            setCounter(startValue)
        }
    }

    const clearError = () => {
        setError(null)
        setCounter(0)
    }

    return (
        <div className="App">
            <CounterSetting
                getStartValue={getStartValue}
                getMaxValueInput={getMaxValueInput}
                setInCounter={SetInCounter}
                error={error}
                clearError={clearError}
            />
            <Counter
                counter={counter}
                maxValue={maxValue}
                incCounter={incCounter}
                resetCounter={resetCounter}
                error={error}
            />
        </div>
    );
}

export default App;
