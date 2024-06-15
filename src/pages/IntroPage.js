import React from 'react';
import SignIn from '../components/SignIn';

function IntroPage() {
    return (
        <div className="IntroPage bg-sky3 w-full h-screen flex justify-center items-center ">
            <div className="text-white">
                <SignIn />
            </div>
        </div>
    )
}

export default IntroPage