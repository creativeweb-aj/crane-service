import React from "react";
import TopHeader from "../components/topHeader";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <>
            <TopHeader/>
            <Header/>
            <Outlet />
            <Footer/>
        </>
    )
}
export default HomeLayout;