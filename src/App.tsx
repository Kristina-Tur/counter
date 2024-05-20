import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter2} from './components/Counter2';
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';
import {Exam} from './exam';


function App() {
    const counter = 0
    const maxCounter = 5
    const [value, setValue] = useState(0)

    const incCounter = () => {
        setValue(value + 1)
    }

    const resetCounter = () => {
        setValue(0)
    }
    /*useEffect(() => {
        let valueIsString = localStorage.getItem('counterValue')
        if (valueIsString !== null) {
            let newValue = valueIsString
            setValue(newValue)
        }
    }, [])*/
    const setCounter = (startValue: string, maxValue: string) => {
        /*localStorage.setItem('counterValue', startValue)
        localStorage.setItem('counterMaxValue', maxValue)*/

    }



    return (
        <div className="App">
            <CounterSetting setCounter={setCounter}/>
            <Counter
                counter={counter}
                maxCounter={maxCounter}
                value={value}
                incCounter={incCounter}
                resetCounter={resetCounter}
            />
            {/*<Counter2/>*/}
            {/*<Exam/>*/}
        </div>
    );
}

export default App;
