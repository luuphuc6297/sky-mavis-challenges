import { RoninAppStoreState, useStore } from 'app/store';
import WalletPage from 'pages/Wallet';
import React from 'react';

const WalletContainer = () => {
    // const currencies = useQuery<ListResponse<Currency>, Error>('currencies', currencyApi.getCurrencies);

    const { user, getWallet }: RoninAppStoreState | any = useStore();

    React.useEffect(() => {
        if (user) {
            (async () => {
                await getWallet();
            })();
        }
    }, [getWallet, user]);
    return <WalletPage />;
};
export default WalletContainer;
