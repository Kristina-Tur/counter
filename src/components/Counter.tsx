import React from 'react';
import {Button} from './Button';

type CounterType = {
    value: number
    counter: number
    maxCounter: number
    incCounter: () => void
    resetCounter: () => void
}

export const Counter = ({value, counter, maxCounter, incCounter, resetCounter}: CounterType) => {
    return (
        <div className={'container'}>
            <div className={`counter ${value === maxCounter ? 'colorCounter' : ''}`}>
                {value}
            </div>
            <div className={'buttonWrapper'}>
                <Button className={'button'} title={'INC'} onClick={incCounter} disabled={value === maxCounter}/>
                <Button className={'button'} title={'RESET'} onClick={resetCounter} disabled={value === counter}/>
            </div>
        </div>
    );
};