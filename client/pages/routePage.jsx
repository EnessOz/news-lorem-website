
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from './homepage';
import { DetailPage } from './detailPage';

export const RoutePage = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='#' element={<DetailPage />}></Route>
            </Routes>
        </Router>
    );
};
