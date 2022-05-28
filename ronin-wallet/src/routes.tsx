import React from 'react';
import { useRoutes } from 'react-router-dom';
const MainLayout = React.lazy(() => import('layouts/main'));

const Router = () => {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { index: true, path: '/login', element: <div>Login page</div> },
                { path: '/wallet', element: <div>Wallet page</div> },
            ],
        },
    ]);
};
export default Router;
