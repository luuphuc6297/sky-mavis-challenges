import { Box, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { EURIconUrl } from 'assets';
import React from 'react';

const StyledCard = styled(Card)(({ theme }) => ({
    paddingLeft: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#F7F9FC',
    boxShadow: 'none',
    '&:hover': {
        transform: 'scale(1.05)',
        transitionDuration: '0.5s',
        backgroundColor: '#e1e3e6',
    },
}));

const StyledCurrenciesIconWrapper = styled(Box)(({ theme }) => ({
    marginRight: 16,
}));

const StyledCurrenciesIcon = styled('img')(({ theme }) => ({
    width: 32,
    height: 32,
}));

const StyledCurrency = styled(Typography)(({ theme }) => ({
    marginBottom: 4,
}));
const StyledVnd = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '16px',
    color: '#8F9BB3',
}));

export const AssetCard = () => {
    return (
        <StyledCard>
            <Box sx={{ display: 'flex' }}>
                <StyledCurrenciesIconWrapper sx={{ display: 'flex', alignItems: 'center' }}>
                    <StyledCurrenciesIcon src={EURIconUrl} />
                </StyledCurrenciesIconWrapper>
                <Box>
                    <StyledCurrency variant="body2">50 EUR</StyledCurrency>
                    <StyledVnd>1,531,972 VND</StyledVnd>
                </Box>
            </Box>
        </StyledCard>
    );
};
