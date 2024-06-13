import React, {useState} from 'react';
import {Button} from './Button';

type CounterType = {
    counter: number
    maxValue: number
    incCounter: () => void
    resetCounter: () => void
    error: null | string
}

export const Counter = ({counter, maxValue, incCounter, resetCounter, error}: CounterType) => {


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
                <Button className={'button'} title={'RESET'} onClick={resetCounter} disabled={counter === 0}/>
            </div>
        </div>
    );
};