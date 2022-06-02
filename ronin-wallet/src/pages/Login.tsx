import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, CircularProgress, Container, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LogoUrl } from 'assets';
import { InputField, SubmitButton } from 'components';
import { TextFiledLabel } from 'components/base/Typography';
import { User } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginSchema } from './validation';

export interface LoginFormProps {
    initialValues?: User;
    onSubmit?: (formValues: User) => void;
}

const Logo = styled('img')({
    width: 114,
    height: 160,
    marginBottom: 24,
});

const Title = styled(Typography)({
    marginBottom: 8,
});

const StyledCaption = styled(Typography)({
    marginBottom: 24,
});
const StyledGridContainer = styled(Grid)(({ theme }) => ({
    height: '100vh',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
    textAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
        width: theme.breakpoints.values.sm,
    },
}));

const LoginPage = ({ initialValues, onSubmit }: LoginFormProps) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm<User>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(LoginSchema),
    });

    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleFormSubmit = async (formValues: User) => {
        try {
            // Clear previous submission error
            // await onSubmit?.(formValues);
            // dispatch(authActions.clearError());
        } catch (error: any) {
            console.log('error', error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <StyledGridContainer container>
                <StyledContainer maxWidth="xs">
                    <Logo src={LogoUrl} />
                    <Title variant="h1" color="textPrimary" gutterBottom>
                        Ronin Wallet
                    </Title>
                    {/* @ts-ignore */}
                    <StyledCaption variant="caption" component="p">
                        Your Digital Passport
                    </StyledCaption>
                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <TextFiledLabel htmlFor="password">ENTER PASSWORD</TextFiledLabel>
                        <InputField
                            id="password"
                            name="password"
                            type="password"
                            control={control}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <SubmitButton disabled={!isValid || isSubmitting}>
                            {isSubmitting && <CircularProgress size={16} color="primary" />}
                            &nbsp;Unlock
                        </SubmitButton>
                    </form>
                </StyledContainer>
            </StyledGridContainer>
        </Box>
    );
};

export default LoginPage;
