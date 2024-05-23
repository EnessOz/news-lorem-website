import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './homepage';
import { DetailPage } from './detailPage';
import { Politics } from './politics';

export const RoutePage = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/siyaset' element={<Politics />}></Route>
                <Route path='/:id' element={<DetailPage />}></Route>
            </Routes>
        </Router>
    );
};
