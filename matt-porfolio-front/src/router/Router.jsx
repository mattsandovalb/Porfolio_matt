import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from '../components/CRUD/Create';
import Edit from '../components/CRUD/Edit';
import Show from '../components/CRUD/Show';
import AdminView from '../views/AdminView/AdminView';
import Home from "../views/home/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>           
                <Route path="/show" element={<Show />}></Route>           
                <Route path="/create" element={<Create />}></Route>          
                <Route path="/edit/:id" element={<Edit />}></Route>             
                <Route path="/admin" element={<AdminView />}></Route>             
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
