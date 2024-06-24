import React from 'react';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';

function MyApp() {
    return (
        <div className="MyApp">
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </div>
    )
}

export default MyApp;
