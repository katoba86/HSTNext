import React from 'react';
import {useReducer} from "react";

export const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children,initialState,reducer }) => {

    const [globalState,dispatch] = useReducer(reducer,initialState);
    return (
        <Store.Provider value={[globalState,dispatch]}>{children}></Store.Provider>
    );
};