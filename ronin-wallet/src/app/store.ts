import { Currency, User } from 'models';
import create from 'zustand';
import createContext from 'zustand/context';
import { devtools, persist } from 'zustand/middleware';
interface RoninAppStoreState {
    user: User;
    currencies: Currency[];
    clearUser: () => void;
}

const initUser = {
    id: '',
    name: '',
    username: '',
    avatar: '',
    roninAddress: '',
};

const { Provider, useStore } = createContext<RoninAppStoreState | any>();

const createStore = create<RoninAppStoreState>()(
    devtools(
        persist(
            (set) => ({
                user: initUser,
                currencies: [],
                clearUser: () => set(() => ({ user: initUser })),
            }),
            {
                name: 'ronin-store',
                getStorage: () => localStorage,
            }
        )
    )
);

export { Provider, useStore, createStore };
