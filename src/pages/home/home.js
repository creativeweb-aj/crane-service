import React, { useEffect, useState } from "react";
import { useExternalScript } from '../../hooks/useExternalScript';
import DOMPurify from "dompurify";
import useRequest from "../../hooks/useRequest";
import { NavLink } from "react-router-dom";
import { API } from "../../constant/api";

const BaseUrl = API.Base_Url;

const Home = () => {
    const [siteInfo, setSiteInfo] = useState(null);
    const [about, setAbout] = useState(null);
    const [keyPoints, setKeyPoints] = useState([])
    const [cranes, setCranes] = useState([]);
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    const { request, response } = useRequest()
    const { request: craneRequest, response: craneResponse } = useRequest()
    const { request: projectRequest, response: projectResponse } = useRequest()
    const { request: serviceRequest, response: serviceResponse } = useRequest()
    const { request: testimonialRequest, response: testimonialResponse } = useRequest()
    const { request: siteInfoRequest, response: siteInfoResponse } = useRequest()

    useEffect(() => {
        request('GET', 'home/about')
        craneRequest('GET', 'home/cranes')
        projectRequest('GET', 'home/projects')
        serviceRequest('GET', 'home/services')
        testimonialRequest('GET', 'home/testimonials')
        siteInfoRequest('GET', 'home/site-info')

        return () => {
            let script = document.querySelector(`script[src="/assets/js/script.js"]`);
            if(script){
                script.remove()
            }
        };
    }, [])

    useEffect(() => {
        if (keyPoints.length > 0 && projects.length > 0 && services.length > 0 && testimonials.length > 0) {
            let script = document.createElement('script')
            script.src = "/assets/js/script.js"
            document.body.appendChild(script)
        }
        if (response && response?.status === "SUCCESS") {
            setAbout(response?.data?.about)
            setKeyPoints(response?.data?.key_points)
        }
        if (craneResponse && craneResponse?.status === "SUCCESS") {
            setCranes(craneResponse?.data?.cranes)
        }
        if (projectResponse && projectResponse?.status === "SUCCESS") {
            setProjects(projectResponse?.data?.projects)
        }
        if (serviceResponse && serviceResponse?.status === "SUCCESS") {
            setServices(serviceResponse?.data?.services)
        }
        if (testimonialResponse && testimonialResponse?.status === "SUCCESS") {
            setTestimonials(testimonialResponse?.data?.testimonials)
        }
        if(siteInfoResponse && siteInfoResponse.status === "SUCCESS"){
            setSiteInfo(siteInfoResponse?.data?.site_info)
        }
    }, [response, craneResponse, projectResponse, serviceResponse, testimonialResponse, siteInfoResponse, keyPoints, projects, services, testimonials])

    return (
        <>
            <div className="banner-carousel banner-carousel-1 mb-0">
                <div className="banner-carousel-item" style={{ backgroundImage: 'url(/assets/images/slider-main/bg1.jpeg)' }}>
                    <div className="slider-content">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12 text-center">
                                    <h2 className="slide-title" data-animation-in="slideInLeft">10 Years of excellence in</h2>
                                    <h3 className="slide-sub-title" data-animation-in="slideInRight">Crane Service</h3>
                                    <p data-animation-in="slideInLeft" data-duration-in="1.2">
                                        <NavLink to='services' className="slider btn btn-primary">Our Services</NavLink>
                                        <NavLink to='contact' className="slider btn btn-primary border">Contact Now</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-carousel-item" style={{ backgroundImage: 'url(/assets/images/slider-main/bg2.jpeg)' }}>
                    <div className="slider-content text-left">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12">
                                    <h2 className="slide-title-box" data-animation-in="slideInDown">Best Service</h2>
                                    <h3 className="slide-title" data-animation-in="fadeIn">When Service Matters</h3>
                                    <h3 className="slide-sub-title" data-animation-in="slideInLeft">Your Choice is Simple</h3>
                                    <p data-animation-in="slideInRight">
                                        <NavLink to='projects' className="slider btn btn-primary border">Our Projects</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-carousel-item" style={{ backgroundImage: 'url(/assets/images/slider-main/bg3.jpeg)' }}>
                    <div className="slider-content text-right">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-md-12">
                                    <h2 className="slide-title" data-animation-in="slideInDown">Know more</h2>
                                    <h3 className="slide-sub-title" data-animation-in="fadeIn">Discover Our Excellence Within</h3>
                                    <p className="slider-description lead" data-animation-in="slideInRight">
                                        Delivering Excellence in Crane Services for Your Best Projects. Where Quality Lifting Meets Dedicated Service.
                                    </p>
                                    <div data-animation-in="slideInLeft">
                                        <NavLink to='about' className="slider btn btn-primary border">About Us</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="call-to-action-box no-padding">
                <div className="container">
                    <div className="action-style-box">
                        <div className="row align-items-center">
                            <div className="col-md-8 text-center text-md-left">
                                <div className="call-to-action-text">
                                    <h3 className="action-title">{siteInfo?.tagline}</h3>
                                </div>
                            </div>
                            <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                                <div className="call-to-action-btn">
                                    <a href={`tel:`+`${siteInfo?.mobile}`} className="btn btn-dark text-white">Call Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="ts-features" className="ts-features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ts-intro">
                                <h2 className="into-title">About Us</h2>
                                <h3 className="into-sub-title">{about?.title}</h3>
                                <p dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(about?.description)
                                }}></p>
                            </div>

                            <div className="gap-20"></div>

                            <div className="row">
                                {keyPoints && keyPoints.map((data, index) => (
                                    <>
                                        <div className="col">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <img width={40} src={`${BaseUrl}` + `${data?.icon}`} alt={data?.name} />
                                                </div>
                                                <div className="col-lg-9">
                                                    <h5>{data?.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        {index === 1 ? (<div class="w-100"></div>) : ''}
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <h3 className="into-sub-title">Cranes</h3>

                            <div className="accordion accordion-group" id="our-values-accordion">
                                {cranes && cranes.map((data, index) => (
                                    <>
                                        {index === 0 ? (
                                            <div className="card">
                                                <div className="card-header p-0 bg-transparent" id={`card-` + `${data?.id}`}>
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-block text-left" type="button" data-toggle="collapse"
                                                            data-target={`#collapse-` + `${data?.id}`} aria-expanded="true" aria-controls={`collapse-` + `${data?.id}`}>
                                                            {data?.name}
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id={`collapse-` + `${data?.id}`} className="collapse show" aria-labelledby={`card-` + `${data?.id}`}
                                                    data-parent="#our-values-accordion">
                                                    <div className="card-body">
                                                        {data?.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="card">
                                                <div className="card-header p-0 bg-transparent" id={`card-` + `${data?.id}`}>
                                                    <h2 className="mb-0">
                                                        <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse"
                                                            data-target={`#collapse-` + `${data?.id}`} aria-expanded="false" aria-controls={`collapse-` + `${data?.id}`}>
                                                            {data?.name}
                                                        </button>
                                                    </h2>
                                                </div>

                                                <div id={`collapse-` + `${data?.id}`} className="collapse" aria-labelledby={`card-` + `${data?.id}`}
                                                    data-parent="#our-values-accordion">
                                                    <div className="card-body">
                                                        {data?.description}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="facts" className="facts-area dark-bg">
                <div className="container">
                    <div className="facts-wrapper">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 ts-facts">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact1.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="1000">0</span></h2>
                                    <h3 className="ts-facts-title">Total Projects</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact2.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="20">0</span></h2>
                                    <h3 className="ts-facts-title">Staff Members</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact3.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="10000">0</span></h2>
                                    <h3 className="ts-facts-title">Hours of Work</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact4.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="10">0</span></h2>
                                    <h3 className="ts-facts-title">State Experience</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="ts-service-area" className="ts-service-area pb-0">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <h2 className="section-title">We Provide Service In</h2>
                            <h3 className="section-sub-title">What We Do</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            {services && services.map((data, index) => (
                                <>
                                    {index <= 2 ? (
                                        <div className="ts-service-box d-flex">
                                            <div className="ts-service-box-img">
                                                <img width={70} loading="lazy" src={`${BaseUrl}` + `${data?.icon}`} alt={data?.name} />
                                            </div>
                                            <div className="ts-service-box-info">
                                                <h3 className="service-box-title">{data?.name}</h3>
                                                <p>{data?.description}</p>
                                            </div>
                                        </div>
                                    ) : ('')}
                                </>
                            ))}
                        </div>

                        <div className="col-lg-4 text-center">
                            <img loading="lazy" className="img-fluid" src="/assets/images/services/service.png" alt="service-avater-image" />
                        </div>

                        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
                            {services && services.map((data, index) => (
                                <>
                                    {index >= 3 ? (
                                        <div className="ts-service-box d-flex">
                                            <div className="ts-service-box-img">
                                                <img width={70} loading="lazy" src={`${BaseUrl}` + `${data?.icon}`} alt={data?.name} />
                                            </div>
                                            <div className="ts-service-box-info">
                                                <h3 className="service-box-title"><a href="#">{data?.name}</a></h3>
                                                <p>{data?.description}</p>
                                            </div>
                                        </div>
                                    ) : ('')}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section id="project-area" className="project-area solid-bg">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="section-title">Work of Excellence</h2>
                            <h3 className="section-sub-title">Recent Projects</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="row shuffle-wrapper">
                                <div className="col-1 shuffle-sizer"></div>
                                {projects && projects.map((data, index) => (
                                    <>
                                        {index <= 5 ? (
                                            <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
                                                <div className="project-img-container">
                                                    <a className="gallery-popup" href={`${BaseUrl}` + `${data?.image}`} aria-label="project-img">
                                                        <img src={`${BaseUrl}` + `${data?.image}`} alt={data?.title} width={400} height={300} />
                                                        <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                                    </a>
                                                    <div className="project-item-info">
                                                        <div className="project-item-info-content">
                                                            <h3 className="project-item-title">
                                                                <a href="projects-single.html">{data?.title}</a>
                                                            </h3>
                                                            <p className="project-cat">{data?.crane?.name}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : ('')}
                                    </>
                                ))}
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="general-btn text-center">
                                <NavLink to='projects' className="btn btn-primary">View All Projects</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="column-title">Testimonials</h3>
                            <div id="testimonial-slide" className="testimonial-slide">
                                {testimonials && testimonials.map((data, index) => (
                                    <div className="item">
                                        <div className="quote-item">
                                            <span className="quote-text">
                                                {data?.comment}
                                            </span>
                                            <div className="quote-item-footer">
                                                <img loading="lazy" className="testimonial-thumb" src={`${BaseUrl}` + `${data?.client_image}`}
                                                    alt={data?.client_name} />
                                                <div className="quote-item-info">
                                                    <h3 className="quote-author">{data?.client_name}</h3>
                                                    {/* <span className="quote-subtext">Chairman, OKT</span> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0">

                            <h3 className="column-title">Happy Clients</h3>

                            <div className="row all-clients">
                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client1.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>

                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client2.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>

                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client3.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>

                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client4.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>

                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client5.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>

                                <div className="col-sm-4 col-6">
                                    <figure className="clients-logo">
                                        <a href="#!"><img loading="lazy" className="img-fluid" src="/assets/images/clients/client6.png"
                                            alt="clients-logo" /></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;

