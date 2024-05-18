import React, {useState} from 'react';
import {Button} from './Button';

export const Counter2 = () => {
    const [value, setValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [line, setLine] = useState(0)
   /* const [lineWrapper, setLineWrapper] = useState(0)*/

    const styleLine = {
        width: `${line}px`,
        height: '10px',
        backgroundColor: 'green',
    }

    /*const lineWrapperStyle = {
        width: lineWrapper,
        height: '40px',
        border: '2px solid green'
    }*/

    const INCHandler = () => {
        setValue(value + 1)
        if(line <= 340){
            setLine(line + 20)
        }

    }

    const RESETHandler = () => {
        setValue(0)
        setMaxValue(value)
        setLine(0)
    }

    return (
        <div className={'containerCounter'}>
            <p>Max value: {maxValue}</p>
            <div>{value}</div>
            <div className={'lineWrapper'}>
                <p style={styleLine}></p>
            </div>
            <Button title={'Увеличить'} onClick={INCHandler} disabled={false} className={''}/>
            <Button title={'Сбросить'} onClick={RESETHandler} disabled={false} className={''}/>
        </div>
    );
};