import React, { useContext } from 'react';
import { UserName } from '../pages/UserNameProvider';

function MainPage() {
    const { name } = useContext(UserName);

    return (
        <div className="text-sky4">
            <h1>{name}</h1>
        </div>
    );
}

export default MainPage;