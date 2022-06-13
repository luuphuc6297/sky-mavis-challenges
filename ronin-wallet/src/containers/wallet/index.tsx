import { RoninAppStoreState, useStore } from 'app/store';
import WalletPage from 'pages/Wallet';
import React from 'react';

const WalletContainer = () => {
    const { user, getWallet }: RoninAppStoreState | any = useStore();

    React.useEffect(() => {
        if (user?.id) {
            (async () => {
                await getWallet(user?.roninAddress);
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return <>{user && <WalletPage />}</>;
};
export default WalletContainer;
