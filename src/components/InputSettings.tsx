// @flow
import * as React from 'react';
import {ChangeEvent} from "react";

type InputSettingsType = {
    value: string
    title: string
    getValue: (event: ChangeEvent<HTMLInputElement>) => void
    error: string | null
    clearError: () => void
};
export const InputSettings = ({title, value, getValue, clearError, error}: InputSettingsType) => {
    return (
        <p className={'valueSettingsPar'}>
            {title}
            <input
                onChange={getValue}
                onFocus={clearError}
                className={error ? 'inputError' : 'valueSettingsInput '}
                type={'number'}
                value={value}
            />
        </p>
    );
};