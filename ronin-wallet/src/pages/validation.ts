import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    password: yup.string().required('Password is required.').min(8, 'Type at least 8 characters.'),
});
