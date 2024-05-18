import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Counter2} from './components/Counter2';


//во втором каунтере один юсстэйт, а изменение юсрейф
function App() {
    const counter = 0
    const maxCounter = 5
    const [value, setValue] = useState(0)

    const INCHandler = () => {
        setValue(value + 1)
    }

    const RESETHandler = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <div className={'container'}>
                <div className={`counter ${value === 5 ? 'colorCounter' : ''}`}>{value}</div>
                <div className={'buttonWrapper'}>
                    <Button className={'button'} title={'INC'} onClick={INCHandler} disabled={value === maxCounter}/>
                    <Button className={'button'} title={'RESET'} onClick={RESETHandler} disabled={value === counter}/>
                </div>
            </div>
            <Counter2/>
        </div>
    );
}

export default App;
