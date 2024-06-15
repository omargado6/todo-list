import React, { createContext, useState } from 'react';

export const UserName = createContext();

function UserNameProvider({ children }) {
    const [name, setName] = useState("Raymond");
    return (
        <UserName.Provider value={{ name, setName }}>
            {children}
        </UserName.Provider>
    );
}
export default UserNameProvider;