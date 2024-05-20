import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';

type CounterSettingType = {
    setCounter: (value: string, maxValue: string) => void
}

export const CounterSetting = ({setCounter}: CounterSettingType) => {
    const [value, setValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const getValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)

    }
    const getMaxValueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(event.currentTarget.value)
    }
    /*useEffect(() => {
        let valueIsString = localStorage.getItem('counterValue')
        if (valueIsString !== null) {
            let newValue = JSON.parse(valueIsString)
            setValue(newValue)
        }
    }, [])*/

    return (
        <div className={'container'}>
            <div className={'valueSettingsWrapper'}>
                <p className={'valueSettingsPar'}>
                    start value:
                    <input onChange={getValueInput} className={'valueSettingsInput'} type={'number'}/>
                </p>
                <p className={'valueSettingsPar'}>
                    max value:
                    <input onChange={getMaxValueInput} className={'valueSettingsInput'} type={'number'}/>
                </p>
            </div>
            <div className={'buttonWrapper'}>
                <Button className={'button'} title={'SET'} onClick={() => setCounter(value, maxValue)} disabled={false}/>
            </div>
        </div>
    );
};