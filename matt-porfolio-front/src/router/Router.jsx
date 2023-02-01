import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from '../components/CRUD/Create';
import Show from '../components/CRUD/Show';
import Home from "../views/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>             
                <Route path="/create" element={<Create />}></Route>             
                <Route path="/show" element={<Show />}></Route>             
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
