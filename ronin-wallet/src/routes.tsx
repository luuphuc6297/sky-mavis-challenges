import React from 'react';
import { useRoutes } from 'react-router-dom';

const LoginContainer = React.lazy(() => import('containers/auth/Login'));
const WalletContainer = React.lazy(() => import('containers/wallet'));
const MainLayout = React.lazy(() => import('layouts/main'));
const SendAssetContainer = React.lazy(() => import('containers/transfer/SendAsset'));

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { path: '/login', element: <LoginContainer /> },
                {
                    path: '/wallet',
                    element: <WalletContainer />,
                },
                {
                    path: '/send',
                    element: <SendAssetContainer />,
                },
            ],
        },
    ]);
};
export default Router;
