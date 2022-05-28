import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { MainBackground } from 'assets';
import AuthProvider from 'lib/AuthProvider';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
    children?: React.ReactElement;
}

const StyledMainLayout = styled(Box)({
    background: MainBackground,
});

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <StyledMainLayout>
            <AuthProvider>
                {children}
                <Outlet />
            </AuthProvider>
        </StyledMainLayout>
    );
};
export default MainLayout;
