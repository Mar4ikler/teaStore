import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';


import Catalog from "../catalog/Catalog";
import Product from "../product/Product";
import Main from "../main/Main";
import Review from "../reviews/Review";
import NotFound from "../notFound/NotFound";
import Cabinet from "../cabinet/Cabinet";
import Login from "../login/Login";
import Registration from "../registration/Registration";
import Cart from "../cart/Cart";
import {getUser} from "../cabinet/cabinetFunctions";
import {responseHandler} from "../helpers/responseHandler";
import Admin from "../admin/Admin";
import AdminPage from "../adminPage/AdminPage";
import ChatForm from "../chat/ChatForm";

export default function AppRouter() {
    const [user, setUser] = useState(null);

    async function fetchData() {
        const response = await getUser();
        const body = await responseHandler(response)
        setUser(body);
    }

    useEffect(() => {
        if(!user && window.localStorage.getItem('token')) {
            fetchData();
        }
    }, [])

    if(window.localStorage.getItem('token') && user?.role === 1) {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/catalog" element={<Admin/>} />
                    <Route path="/reviews" element={<Review/>} />
                    <Route path="/cabinet" element={<Cabinet/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registry" element={<Registration/>} />
                    <Route path="/cart" element={<AdminPage/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Router>
        );
    }

    if(window.localStorage.getItem('token')) {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/catalog" element={<Catalog/>} />
                    <Route path="/reviews" element={<Review/>} />
                    <Route path="/cabinet" element={<Cabinet/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registry" element={<Registration/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/chat" element={<ChatForm/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Router>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/registry" element={<Registration/>} />
                <Route path="*" element={<Navigate to={"/notFound"}/>} />
                <Route path="/notFound" element={<NotFound/>} />
            </Routes>
        </Router>
    );


};


