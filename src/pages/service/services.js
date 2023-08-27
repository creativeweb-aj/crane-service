import React, { useEffect, useState } from "react";
import useRequest from "../../hooks/useRequest";
import { useExternalScript } from '../../hooks/useExternalScript';
import { API } from "../../constant/api"; 

const BaseUrl = API.Base_Url;

const Services = () => {
    const [services, setServices] = useState([]);

    const { request, response } = useRequest()

    useEffect(() => {
        request('GET', 'home/services')
        return () => {
            let script = document.querySelector(`script[src="/assets/js/script.js"]`);
            if(script){
                script.remove()
            }
        };
    }, [])

    useEffect(() => {
        if (response && response?.status === "SUCCESS") {
            setServices(response?.data?.services)
        }
        if(services.length > 0){
            let script = document.createElement('script')
            script.src =  "/assets/js/script.js"
            document.body.appendChild(script)
        }
    }, [response, services])

    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(/assets/images/banner/banner1.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Service</h1>
                                    {/* <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Services</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">All Services</li>
                                        </ol>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="main-container pb-2">
                <div className="container">
                    <div className="row">
                        {services && services.map((data, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-5">
                                <div className="ts-service-box">
                                    <div className="ts-service-image-wrapper">
                                        <img loading="lazy" className="w-100" src={data?.image} alt="service-image" width={300} height={250} />
                                    </div>
                                    <div className="d-flex">
                                        <div className="ts-service-box-img">
                                            <img loading="lazy" src={data?.icon} alt="service-icon" width={50} height={50} />
                                        </div>
                                        <div className="ts-service-info">
                                            <h3 className="service-box-title"><a href="service-single.html">{data?.name}</a></h3>
                                            <p>{data?.description}</p>
                                            {/* <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                                className="fa fa-caret-right"></i> Learn more</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;