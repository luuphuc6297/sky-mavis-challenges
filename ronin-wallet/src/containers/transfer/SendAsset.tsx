import React from 'react';
import { SendAssetFormProps } from 'models';
import { SendAssetPage } from 'pages';

const SendAssetContainer = () => {
    const initialValues: SendAssetFormProps = {
        from: '7300377738883334',
        to: '',
        assets: '',
        amount: 0,
    } as SendAssetFormProps;

    React.useEffect(() => {
        localStorage.removeItem('access_token');
    });

    const handleSendAssets = async (formValues: SendAssetFormProps) => {
        //TODO: call api to login
    };

    return <SendAssetPage initialValues={initialValues} onSubmit={handleSendAssets} />;
};

export default SendAssetContainer;
