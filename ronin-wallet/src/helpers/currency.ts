import { FastForexProps } from 'models';
import fastForexApis from 'services/fastForex';

export const convertToVnd = async (code: string | any, amount: number | any): Promise<FastForexProps> => {
    const result: FastForexProps = await fastForexApis.convertCurrency(code, amount);
    return result?.result?.VND;
};
