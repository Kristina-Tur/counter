import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';

type CounterSettingType = {
    getStartValue: (event: ChangeEvent<HTMLInputElement>) => void
    getMaxValueInput: (event: ChangeEvent<HTMLInputElement>) => void
    setInCounter: () => void
    error: string | null
    clearError: () => void
}

export const CounterSetting = ({getStartValue, getMaxValueInput, setInCounter, error, clearError}: CounterSettingType) => {


    return (
        <div className={'container'}>
                <div className={'valueSettingsWrapper'}>
                    <p className={'valueSettingsPar'}>
                        start value:
                        <input
                            onChange={getStartValue}
                            onFocus={clearError}
                            className={error ? 'inputError' : 'valueSettingsInput '}
                            type={'number'}
                        />
                    </p>
                    <p className={'valueSettingsPar'}>
                        max value:
                        <input
                            onChange={getMaxValueInput}
                            onFocus={clearError}
                            className={error ? 'inputError' : 'valueSettingsInput '}
                            type={'number'}
                        />
                    </p>
                </div>
                <div className={'buttonWrapper'}>
                    <Button className={'button'} title={'SET'} onClick={setInCounter}
                            disabled={!!error}/>
                </div>
            </div>
    );
};