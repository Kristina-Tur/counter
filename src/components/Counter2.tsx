import React, {useRef, useState} from 'react';
import {Button} from './Button';

export const Counter2 = () => {
    const [value, setValue] = useState(0)
    const ref = useRef<number>(0)
    const [line, setLine] = useState(0)
   /* let line= 0*/

    const styleLine = {
        width: `${line}px`,
        height: '10px',
        backgroundColor: 'green',
    }

    const INCHandler = () => {
        setValue(value + 1)
        if(line <= 340){
            setLine(line + 20)
        }

    }

    const RESETHandler = () => {
        setValue(0)
        setLine(0)
        /*line = 0*/
        ref.current = value
    }

    return (
        <div className={'containerCounter'}>
            <p className={'text'}>Max value: {ref.current ? ref.current : 0}</p>
            <div className={'text'}>{value}</div>
            <div className={'lineWrapper'}>
                <p style={styleLine}></p>
            </div>
            <Button title={'Увеличить'} onClick={INCHandler} disabled={false} className={''}/>
            <Button title={'Сбросить'} onClick={RESETHandler} disabled={false} className={''}/>
        </div>
    );
};