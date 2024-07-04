import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from '../components/Button';
import {InputSettings} from "../components/InputSettings";

type CounterSettingType = {
    startValue: string
    maxValue: string
    getStartValue: (event: ChangeEvent<HTMLInputElement>) => void
    getMaxValueInput: (event: ChangeEvent<HTMLInputElement>) => void
    setInCounter: () => void
    error: string | null
    clearError: () => void
}

export const CounterSetting = ({getStartValue, getMaxValueInput, setInCounter, error, clearError, startValue, maxValue}: CounterSettingType) => {


    return (
        <div className={'container'}>
                <div className={'valueSettingsWrapper'}>
                    <InputSettings
                        value={startValue}
                        title={'start value:'}
                        getValue={getStartValue}
                        error={error}
                        clearError={clearError}
                    />
                    <InputSettings
                        value={maxValue}
                        title={'max value:'}
                        getValue={getMaxValueInput}
                        error={error}
                        clearError={clearError}
                    />
                </div>
                <div className={'buttonWrapper'}>
                    <Button className={'button'} title={'SET'} onClick={setInCounter}
                            disabled={!!error}/>
                </div>
            </div>
    );
};