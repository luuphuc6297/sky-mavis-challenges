import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    apiError?: any;
    InputProps?: any;
}

const StyledInput = styled(TextField)({
    maxWidth: 438,
    height: 40,
    borderRadius: 8,
    marginTop: 0,
    // border: '1px solid #C5CEE0',
});

export function InputField({ name, control, label, apiError, InputProps, ...inputProps }: InputFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <StyledInput
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                label={label}
                inputProps={inputProps}
                InputProps={InputProps}
            />
            <Error error={true}>{error?.message || apiError}</Error>
        </>
    );
}
