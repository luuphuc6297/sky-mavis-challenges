import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    password: yup.string().required('Password is required.').min(8, 'Type at least 8 characters.'),
});

export const SendAssetSchema = yup.object().shape({
    from: yup.string().required(),
    to: yup.string().required('To address required').min(16, 'Type at least 16 characters.'),
    assets: yup.string().required().oneOf(['usd', 'yen', 'eur'], 'Please select either usd, yen or eur.'),
    amount: yup.number().required().positive('Please enter a positive number.'),
});
