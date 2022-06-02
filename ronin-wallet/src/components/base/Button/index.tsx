import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const SubmitBtn = styled(Button)({
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    marginBottom: 24,
});

export const SubmitButton = ({ children, ...props }: any) => {
    return (
        <SubmitBtn type="submit" variant="contained" fullWidth {...props}>
            {children}
        </SubmitBtn>
    );
};
