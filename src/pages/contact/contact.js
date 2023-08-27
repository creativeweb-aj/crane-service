import React, { useEffect, useState } from "react";
import {useExternalScript} from '../../hooks/useExternalScript';
import useRequest from "../../hooks/useRequest";

const Contact = () => {
    useExternalScript('/assets/js/script.js')
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
            <div id="banner-area" className="banner-area" style={{backgroundImage:'url(/assets/images/banner/banner1.jpg)'}}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Contact</h1>
                                    {/* <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ol>
                                    </nav> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="main-container">
                <div className="container">

                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className="section-title">Reaching our Office</h2>
                            <h3 className="section-sub-title">Find Our Location</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fas fa-map-marker-alt mr-0"></i>
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Visit Our Office</h4>
                                    <p>{siteInfo?.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fa fa-envelope mr-0"></i>
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Email Us</h4>
                                    <p>{siteInfo?.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="ts-service-box-bg text-center h-100">
                                <span className="ts-service-icon icon-round">
                                    <i className="fa fa-phone-square mr-0"></i>
                                </span>
                                <div className="ts-service-box-content">
                                    <h4>Call Us</h4>
                                    <p>{siteInfo?.mobile}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="gap-60"></div>

                    <div className="google-map">
                        <div id="map" className="map" data-latitude="40.712776" data-longitude="-74.005974"
                            data-marker="/assets/images/marker.png" data-marker-name="Constra"></div>
                    </div>

                    <div className="gap-40"></div>

                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="column-title">We love to hear</h3>
                            <form id="contact-form" action="#" method="post" role="form">
                                <div className="error-container"></div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control form-control-name" name="name" id="name" placeholder="" type="text"
                                                required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-email" name="email" id="email" placeholder="" type="email"
                                                required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Subject</label>
                                            <input className="form-control form-control-subject" name="subject" id="subject" placeholder=""
                                                required/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control form-control-message" name="message" id="message" placeholder="" rows="10"
                                        required></textarea>
                                </div>
                                <div className="text-right"><br/>
                                    <button className="btn btn-primary solid blank" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;