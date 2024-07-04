import React, {useState} from 'react';
import {Button} from '../components/Button';

type CounterType = {
    counter: number
    maxValue: number
    startValue: number
    incCounter: () => void
    resetCounter: () => void
    error: null | string
}

export const Counter = ({counter, maxValue, startValue, incCounter, resetCounter, error}: CounterType) => {
    return (
        <div className={'container'}>
            <div className={`counter ${counter === maxValue ? 'colorCounter' : ''}`}>
                {error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    <div>{counter}</div>
                )}
            </div>
            <div className={'buttonWrapper'}>
                <Button className={'button'} title={'INC'} onClick={incCounter} disabled={counter === maxValue}/>
                <Button className={'button'} title={'RESET'} onClick={resetCounter} disabled={counter === startValue}/>
            </div>
        </div>
    );
};