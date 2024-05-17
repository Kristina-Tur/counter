import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';
import {Counter2} from './components/Counter2';


//во втором каунтере один юсстэйт, а изменение юсрейф
function App() {
    const [value, setValue] = useState(0)
    const [disabledINC, setDisabledINC] = useState(false)
    const [disabledRESET, setDisabledRESET] = useState(true)

    const INCHandler = () => {
        setValue(value + 1)

        setDisabledRESET(false)

        if (value === 4) {
            setDisabledINC(true)
        }
    }

    const RESETHandler = () => {
        setValue(0)
        setDisabledINC(false)
        setDisabledRESET(true)
    }

    return (
        <div className="App">
            <div className={'container'}>
                <div className={`counter ${value === 5 ? 'colorCounter' : ''}`}>{value}</div>
                <div className={'buttonWrapper'}>
                    <Button className={'button'} title={'INC'} onClick={INCHandler} disabled={disabledINC}/>
                    <Button className={'button'} title={'RESET'} onClick={RESETHandler} disabled={disabledRESET}/>
                </div>
            </div>
            <Counter2/>
        </div>
    );
}

export default App;
