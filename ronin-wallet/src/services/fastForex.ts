import { FASTFOREX_API_KEY } from 'constant/common';
import { FastForexProps } from 'models';
import axiosServicesClient from './axiosServicesClient';

// All of apis defaults base on USD
const fastForexApis = {
    // Fetch multiple currency rates at once
    fetchMultiExchangeRate(): Promise<FastForexProps> {
        const url = '/fetch-multi';
        return axiosServicesClient.get(url, {
            params: {
                to: 'JPY%2CEUR',
                api_key: FASTFOREX_API_KEY,
            },
        });
    },
    // Convert an amount of one currency into another currency
    convertCurrency(to: string, amount: number): Promise<FastForexProps> {
        const url = '/convert?to=VND&amount=10&api_key=9b04816be2-92dd6507b9-rdb35j';
        return axiosServicesClient.get(url, {
            params: {
                to: to,
                amount: amount,
                api_key: FASTFOREX_API_KEY,
            },
        });
    },
};
export default fastForexApis;
