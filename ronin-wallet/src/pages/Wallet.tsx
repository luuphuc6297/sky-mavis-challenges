import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Account, AssetCard, MyWallet, NavigateBar, RoninStatus, AssetListPopup, SendAssetAppBar } from 'components';
import React from 'react';

const StyledGridContainer = styled(Grid)({
    height: '100vh',
});

const StyledContainer = styled(Container)({
    margin: '0 auto',
});

const StyledAssetTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.text.primary,
}));

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
                <Grid>
                    <NavigateBar />
                </Grid>
                <StyledAssetTitle>Assets</StyledAssetTitle>
                <Grid>
                    <AssetCard />
                </Grid>
                <AssetListPopup />
                <SendAssetAppBar />
            </StyledContainer>
        </StyledGridContainer>
    );
};

export default WalletPage;
