import currencyApi from 'apis/currencies';
import { Currency, ListResponse } from 'models';
import WalletPage from 'pages/Wallet';
import React from 'react';
import { useQuery } from 'react-query';

const WalletContainer = () => {
    const currencies = useQuery<ListResponse<Currency>, Error>('currencies', currencyApi.getCurrencies);


    return <WalletPage />;
};
export default WalletContainer;
