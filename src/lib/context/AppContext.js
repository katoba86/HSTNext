import React, { createContext, useState } from 'react';
export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [ user, setUser ] = useState({
        name:'Silvia'
    });
    const storeUser = user => {
        setUser({
            name: user.name,
        })
    }
    const logout = () => {
        setUser({});
    }
    return (
        <AppContext.Provider value={{ user,  storeUser }}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;