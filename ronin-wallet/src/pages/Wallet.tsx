import { Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Account, MyWallet, RoninStatus } from 'components';
import React from 'react';

const StyledGridContainer = styled(Grid)({
    height: '100vh',
});

const StyledContainer = styled(Container)({
    margin: '0 auto',
});

const WalletPage = () => {
    return (
        <StyledGridContainer container>
            <StyledContainer maxWidth="xs">
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <RoninStatus />
                    </Grid>
                    <Grid item>
                        <Account />
                    </Grid>
                </Grid>
                <Grid>
                    <MyWallet />
                </Grid>
            </StyledContainer>
        </StyledGridContainer>
    );
};

export default WalletPage;
