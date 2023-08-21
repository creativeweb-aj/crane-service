import React from "react";
import {useExternalScript} from '../../hooks/useExternalScript';

const Services = () => {
    useExternalScript('/assets/js/script.js')

    return (
        <>
            <div id="banner-area" className="banner-area" style={{backgroundImage:'url(/assets/images/banner/banner1.jpg)'}}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Service</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Services</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">All Services</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="main-container pb-2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service1.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon1.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">Zero Harm Everyday</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service2.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon2.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">Virtual Construction</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service3.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon3.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">Build To Last</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service4.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon4.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">EXTERIOR DESIGN</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service5.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon5.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">RENOVATION</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="ts-service-box">
                                <div className="ts-service-image-wrapper">
                                    <img loading="lazy" className="w-100" src="/assets/images/services/service6.jpg" alt="service-image"/>
                                </div>
                                <div className="d-flex">
                                    <div className="ts-service-box-img">
                                        <img loading="lazy" src="/assets/images/icon-image/service-icon6.png" alt="service-icon"/>
                                    </div>
                                    <div className="ts-service-info">
                                        <h3 className="service-box-title"><a href="service-single.html">SAFETY MANAGEMENT</a></h3>
                                        <p>You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for
                                            talent like. Lorem ipsum dolor suscipit.</p>
                                        <a className="learn-more d-inline-block" href="service-single.html" aria-label="service-details"><i
                                            className="fa fa-caret-right"></i> Learn more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;