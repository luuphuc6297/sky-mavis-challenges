import create from 'zustand';
import createContext from 'zustand/context';
import { devtools, persist } from 'zustand/middleware';

const initUser = {
    id: '',
    status: '',
    firstName: '',
    lastName: '',
    password: '',
};

const { Provider, useStore } = createContext();

const createStore = create<any>()(
    devtools(
        persist(
            (set) => ({
                user: initUser,
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
