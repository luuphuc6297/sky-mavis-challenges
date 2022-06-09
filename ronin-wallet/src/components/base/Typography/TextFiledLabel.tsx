import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/system';
import React from 'react';

interface CustomInputLabelProps {
    children?: string;
    htmlFor?: string;
}
const CustomInputLabel = styled(InputLabel)({
    fontSize: 10,
    fontWeight: 700,
    lineHeight: '16px',
    color: '#57627B',
    textAlign: 'left',
});

export function TextFiledLabel({ htmlFor, children }: CustomInputLabelProps) {
    return <CustomInputLabel htmlFor={htmlFor}>{children}</CustomInputLabel>;
}
