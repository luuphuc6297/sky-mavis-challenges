import { yupResolver } from '@hookform/resolvers/yup';
import { User } from 'models';
import { useForm } from 'react-hook-form';
import { LoginSchema } from './validation';

export interface LoginFormProps {
    initialValues?: User;
    onSubmit?: (formValues: User) => void;
}

const LoginPage = ({ initialValues, onSubmit }: LoginFormProps) => {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm<User>({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(LoginSchema),
    });

    const handleFormSubmit = async (formValues: User) => {
        try {
            // Clear previous submission error
            // await onSubmit?.(formValues);
            // dispatch(authActions.clearError());
        } catch (error: any) {
            console.log('error', error);
        }
    };
    return <form onSubmit={handleSubmit(handleFormSubmit)}></form>;
};

export default LoginPage;
