import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Grid, InputAdornment, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InputField, SendAssetAppBar, FromInputFiled } from 'components';
import { SendAssetFormProps } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SendAssetSchema } from './validation';

interface SendAssetProps {
    initialValues?: SendAssetFormProps;
    onSubmit?: (formValues: SendAssetFormProps) => void;
}

const StyledGridContainer = styled(Grid)(({ theme }) => ({
    height: '100vh',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    margin: '24px auto',
    [theme.breakpoints.down('sm')]: {
        width: theme.breakpoints.values.sm,
    },
}));

const SendAssetPage = ({ initialValues, onSubmit }: SendAssetProps) => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SendAssetFormProps>({
        defaultValues: initialValues,
        resolver: yupResolver(SendAssetSchema),
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <SendAssetAppBar />
            <StyledGridContainer container>
                <StyledContainer maxWidth="xs">
                    <FromInputFiled control={control} name="from" />

                    <InputField control={control} name="to" htmlFor="to" textLabel="TO" />
                </StyledContainer>
            </StyledGridContainer>
        </Box>
    );
};

export default SendAssetPage;
