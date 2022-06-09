import { InputAdornment, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import React from 'react';
import { Control, useController } from 'react-hook-form';

interface FromInputFiledProps {
    name: string;
    control: Control<any>;
    label?: string;

    apiError?: any;
    htmlFor?: string;
    InputProps?: any;
}

const StyledFromInputField = styled(TextField)(({ theme }) => ({
    marginTop: 0,
    height: 40,
    width: 336,
    '&.MuiInputBase-root': {
        backgroundColor: '#C5CEE0',
        fontWeight: 400,
        fontSize: 14,
    },
}));

const StyledInputAdornment = styled(InputAdornment)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 16,
    fontStyle: 'normal',
    marginTop: '0 !important',
    backgroundColor: '#C5CEE0',
}));

const StyledPrefix = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
}));

export const FromInputFiled = ({ name, control, apiError, InputProps, ...inputProps }: FromInputFiledProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <TextFiledLabel htmlFor="from">FROM</TextFiledLabel>
            <StyledFromInputField
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                inputProps={inputProps}
                InputProps={{
                    startAdornment: (
                        <StyledInputAdornment position="start">
                            <StyledPrefix>My wallet</StyledPrefix>
                        </StyledInputAdornment>
                    ),
                }}
            />
            <Error error={true}>{error?.message || apiError}</Error>
        </>
    );
};
