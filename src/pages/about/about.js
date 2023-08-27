import React, { useEffect, useState } from "react";
import { useExternalScript } from '../../hooks/useExternalScript';
import DOMPurify from "dompurify";
import useRequest from "../../hooks/useRequest";
import { API } from "../../constant/api";

const BaseUrl = API.Base_Url;

const About = () => {
    const [about, setAbout] = useState(null);
    const [persons, setPersons] = useState([]);

    const { request, response } = useRequest()

    useEffect(() => {
        request('GET', 'home/about')
        return () => {
            let script = document.querySelector(`script[src="/assets/js/script.js"]`);
            if(script){
                script.remove()
            }
        };
    }, [])

    useEffect(() => {
        if (response && response?.status === "SUCCESS") {
            setAbout(response?.data?.about)
            setPersons(response?.data?.persons)
        }
        if (persons.length > 0) {
            let script = document.createElement('script')
            script.src = "/assets/js/script.js"
            document.body.appendChild(script)
        }
    }, [response, persons])

    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(/assets/images/banner/banner1.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">About</h1>
                                    {/* <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="column-title">{about?.title}</h3>
                            <span dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(about?.description)
                            }}></span>
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0">

                            <div id="page-slider" className="page-slider small-bg">

                                <div className="item" style={{ backgroundImage: 'url(/assets/images/slider-pages/slide-page1.jpg)' }}>
                                    <div className="container">
                                        <div className="box-slider-content">
                                            <div className="box-slider-text">
                                                <h2 className="box-slide-title">Leadership</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" style={{ backgroundImage: 'url(/assets/images/slider-pages/slide-page2.jpg)' }}>
                                    <div className="container">
                                        <div className="box-slider-content">
                                            <div className="box-slider-text">
                                                <h2 className="box-slide-title">Relationships</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item" style={{ backgroundImage: 'url(/assets/images/slider-pages/slide-page3.jpg)' }}>
                                    <div className="container">
                                        <div className="box-slider-content">
                                            <div className="box-slider-text">
                                                <h2 className="box-slide-title">Performance</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section >

            <section id="ts-team" className="ts-team">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="section-title">Quality Service</h2>
                            <h3 className="section-sub-title">Team</h3>
                        </div>
                    </div>

                    <div className="row">
                        {persons && persons.map((data, index) => (
                            <div className="col-lg-6 text-center">
                                <img className="rounded" loading="lazy" width={250} height={250} src={`${BaseUrl}` + `${data?.image}`} alt="team-img" />
                                <p className="lead text-capitalize">{data?.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;