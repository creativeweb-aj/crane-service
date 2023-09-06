import React from "react";
import TopHeader from "../components/topHeader";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeLayout = () => {
    return (
        <>  
            <TopHeader/>
            <Header/>
            <ToastContainer />
            <Outlet />
            <Footer/>
        </>
    )
}
export default HomeLayout;