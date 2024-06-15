import React from 'react';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import UserNameProvider from './pages/UserNameProvider';

function MyApp() {
    return (
        <UserNameProvider>
            <div className="MyApp">
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </div>
        </UserNameProvider>
    )
}

export default MyApp;
