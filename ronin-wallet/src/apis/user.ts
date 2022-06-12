import { User, Wallet } from 'models';
import axiosClient from './axiosClient';

const userApis = {
    getCurrentUser(): Promise<User> {
        const url = `/users/9d4e77b4-efc2-4c8a-9b26-86207c60d6f5`;
        return axiosClient.get(url);
    },
    getWallet(): Promise<Wallet> {
        const url = '/wallets/';
        return axiosClient.get(url);
    },
};

export default userApis;
