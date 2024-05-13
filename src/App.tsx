import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    let [value, setValue] = useState(0)

    const onClickHandler = () => {
        setValue(value + 1)
    }

    useEffect(() => {
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
    }


    return (
        <div className="App">
            <div>{value}</div>
            <button onClick={onClickHandler}>+</button>
            {/*<button onClick={onClickHandlerSetItem}>setToLocalStorage</button>
            <button onClick={onClickHandlerGetItem}>getFromLocalStorage</button>
            <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>*/}
        </div>
    );
}

export default App;
