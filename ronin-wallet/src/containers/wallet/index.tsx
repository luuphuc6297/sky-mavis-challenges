import { RoninAppStoreState, useStore } from 'app/store';
import WalletPage from 'pages/Wallet';
import React from 'react';

const WalletContainer = () => {
    const { user, wallet, getWallet }: RoninAppStoreState | any = useStore();

    React.useEffect(() => {
        if (user?.id) {
            (async () => {
                await getWallet(user?.roninAddress);
            })();
        }
    }, [user]);

    return <>{wallet?.assets && <WalletPage />}</>;
};
export default WalletContainer;
