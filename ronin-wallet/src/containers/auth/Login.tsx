import { User } from 'models';
import { LoginPage } from 'pages';
import React from 'react';

const LoginContainer = () => {
    const initialValues: User = {
        email: '',
        password: '',
    } as User;

    React.useEffect(() => {
        localStorage.removeItem('access_token');
    });

    const handleLogin = async (formValues: User) => {
        //TODO: call api to login
    };

    return <LoginPage initialValues={initialValues} onSubmit={handleLogin} />;
};

export default LoginContainer;
