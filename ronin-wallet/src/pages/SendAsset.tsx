import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RoninAppStoreState, useStore } from 'app/store';
import { FromInputFiled, InputField, SendAssetAppBar, SelectAssetsField } from 'components';
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
    const { currencies }: RoninAppStoreState | any = useStore();

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
                <StyledContainer maxWidth="sm">
                    <FromInputFiled control={control} name="from" />

                    <InputField control={control} name="to" htmlFor="to" textLabel="TO" />

                    <SelectAssetsField />
                </StyledContainer>
            </StyledGridContainer>
        </Box>
    );
};

export default SendAssetPage;
