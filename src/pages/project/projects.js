import React from "react";
import {useExternalScript} from '../../hooks/useExternalScript';

const Projects = () => {
    useExternalScript('/assets/js/script.js')

    return (
        <>
            <div id="banner-area" className="banner-area" style={{backgroundImage:'url(/assets/images/banner/banner1.jpg)'}}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Project</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Project</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">All Projects</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="main-container" className="main-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="shuffle-btn-group">
                                <label className="active" for="all">
                                    <input type="radio" name="shuffle-filter" id="all" value="all" checked="checked"/>Show All
                                </label>
                                <label for="commercial">
                                    <input type="radio" name="shuffle-filter" id="commercial" value="commercial"/>Commercial
                                </label>
                                <label for="education">
                                    <input type="radio" name="shuffle-filter" id="education" value="education"/>Education
                                </label>
                                <label for="government">
                                    <input type="radio" name="shuffle-filter" id="government" value="government"/>Government
                                </label>
                                <label for="infrastructure">
                                    <input type="radio" name="shuffle-filter" id="infrastructure" value="infrastructure"/>Infrastructure
                                </label>
                                <label for="residential">
                                    <input type="radio" name="shuffle-filter" id="residential" value="residential"/>Residential
                                </label>
                                <label for="healthcare">
                                    <input type="radio" name="shuffle-filter" id="healthcare" value="healthcare"/>Healthcare
                                </label>
                            </div>


                            <div className="row shuffle-wrapper">
                                <div className="col-1 shuffle-sizer"></div>

                                <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project1.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project1.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">Capital Teltway Building</a>
                                                </h3>
                                                <p className="project-cat">Commercial, Interiors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;healthcare&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project2.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project2.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">Ghum Touch Hospital</a>
                                                </h3>
                                                <p className="project-cat">Healthcare</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 shuffle-item"
                                    data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project3.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project3.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">TNT East Facility</a>
                                                </h3>
                                                <p className="project-cat">Government</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 shuffle-item"
                                    data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project4.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project4.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">Narriot Headquarters</a>
                                                </h3>
                                                <p className="project-cat">Infrastructure</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 shuffle-item"
                                    data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project5.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project5.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">Kalas Metrorail</a>
                                                </h3>
                                                <p className="project-cat">Infrastructure</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;residential&quot;]">
                                    <div className="project-img-container">
                                        <a className="gallery-popup" href="/assets/images/projects/project6.jpg">
                                            <img className="img-fluid" src="/assets/images/projects/project6.jpg" alt="project-image"/>
                                                <span className="gallery-icon"><i className="fa fa-plus"></i></span>
                                        </a>
                                        <div className="project-item-info">
                                            <div className="project-item-info-content">
                                                <h3 className="project-item-title">
                                                    <a href="projects-single.html">Ancraft Avenue House</a>
                                                </h3>
                                                <p className="project-cat">Residential</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="general-btn text-center">
                                <a className="btn btn-primary" href="projects.html">View All Projects</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects;