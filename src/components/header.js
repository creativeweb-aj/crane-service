import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { API } from "../constant/api";
import useRequest from "../hooks/useRequest";

const BaseUrl = API.Base_Url;

const Header = () => {
    const [siteInfo, setSiteInfo] = useState(null);

    const { request, response } = useRequest()

    useEffect(() => {
        request('GET', 'home/site-info')
    }, [])

    useEffect(() => {
        if (response && response?.status === "SUCCESS") {
            setSiteInfo(response?.data?.site_info)
        }
    }, [response])

    return (
        <>
            <header id="header" className="header-one">
                <div className="bg-white">
                    <div className="container">
                        <div className="logo-area">
                            <div className="row align-items-center">
                                <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                                    <Link to='/' className="text-nowrap logo-img">
                                        <img loading="lazy" src={siteInfo?.logo} alt={siteInfo?.site_name} />
                                    </Link>
                                </div>

                                <div className="col-lg-9 header-right">
                                    <ul className="top-info-box">
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Call Us</p>
                                                    <p className="info-box-subtitle">{siteInfo?.mobile}</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="info-box">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Email Us</p>
                                                    <p className="info-box-subtitle">{siteInfo?.email}</p>
                                                </div>
                                            </div>
                                        </li>
                                        {/* <li className="last">
                                            <div className="info-box last">
                                                <div className="info-box-content">
                                                    <p className="info-box-title">Global Certificate</p>
                                                    <p className="info-box-subtitle">ISO 9001:2017</p>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;