import React, {useState} from 'react';
import './App.css';
import {Counter2} from './components/Counter2';
import {Counter} from './components/Counter';
import {CounterSetting} from './components/CounterSetting';


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

    const setCounter = (value: string, maxValue: string) => {
        localStorage.setItem('counterValue', value)
        localStorage.setItem('counterMaxValue', maxValue)
        alert(value + maxValue)
    }

   /* useEffect(() => {
        let valueIsString = localStorage.getItem('counterValue')
        if (valueIsString !== null) {
            let newValue = JSON.parse(valueIsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])


    const onClickHandlerSetItem = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue+1', JSON.stringify(value))
    }

    const onClickHandlerGetItem = () => {
        let valueIsString = localStorage.getItem('counterValue')
        if (valueIsString !== null) {
            let newValue = JSON.parse(valueIsString)
            setValue(newValue)
        }
    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue+1')
    }*/

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
            <Counter2/>
        </div>
    );
}

export default App;
