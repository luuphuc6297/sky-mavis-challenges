import { Tty } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components/base/Typography/Error';
import { TextFiledLabel } from 'components/base/Typography/TextFiledLabel';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

export interface AmountFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    apiError?: any;
    htmlFor?: string;
}

const StyledInput = styled(TextField)({
    maxWidth: 438,
    width: 336,
    height: 40,
    borderRadius: 8,
    marginTop: 0,
});

const StyledMaxBtnLabel = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    width: 41,
    height: 20,
    background: '#EEF3FB',
    borderRadius: 8,
    fontSize: 10,
    lineHeight: '16px',
    fontFamily: 'SF Pro Text Medium',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export function AmountField({ name, control, apiError, label, ...inputProps }: AmountFieldProps) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    const handleMaxAmount = () => {};

    return (
        <>
            <Box>
                <TextFiledLabel htmlFor="amount">AMOUNT</TextFiledLabel>
            </Box>
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
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleMaxAmount} edge="end">
                                <StyledMaxBtnLabel>MAX</StyledMaxBtnLabel>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <Error error={true}>{error?.message || apiError}</Error>
        </>
    );
}
