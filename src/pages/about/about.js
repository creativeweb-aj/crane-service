import React from "react";
import {useExternalScript} from '../../hooks/useExternalScript';

const About = () => {
    useExternalScript('/assets/js/script.js')

    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(/assets/images/banner/banner1.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">About</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">company</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
                        <div className="col-lg-6">
                            <h3 className="column-title">Who We Are</h3>
                            <p>when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible
                                vermin.</p>
                            <blockquote>
                                <p>Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus
                                    autemn ec tincidunt nunc posuere ut</p>
                            </blockquote>
                            <p>He lay on his armour-like back, and if he lifted. ultrices ultrices sapien, nec tincidunt nunc posuere
                                ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isn’t anything embarrassing.</p>

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
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="1789">0</span></h2>
                                    <h3 className="ts-facts-title">Total Projects</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact2.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="647">0</span></h2>
                                    <h3 className="ts-facts-title">Staff Members</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact3.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="4000">0</span></h2>
                                    <h3 className="ts-facts-title">Hours of Work</h3>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                                <div className="ts-facts-img">
                                    <img loading="lazy" src="/assets/images/icon-image/fact4.png" alt="facts-img" />
                                </div>
                                <div className="ts-facts-content">
                                    <h2 className="ts-facts-num"><span className="counterUp" data-count="44">0</span></h2>
                                    <h3 className="ts-facts-title">Countries Experience</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="ts-team" className="ts-team">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h2 className="section-title">Quality Service</h2>
                            <h3 className="section-sub-title">Professional Team</h3>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div id="team-slide" className="team-slide">
                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team1.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Nats Stenman</h3>
                                            <p className="ts-designation">Chief Operating Officer</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team2.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Angela Lyouer</h3>
                                            <p className="ts-designation">Innovation Officer</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team3.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Mark Conter</h3>
                                            <p className="ts-designation">Safety Officer</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team4.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Ayesha Stewart</h3>
                                            <p className="ts-designation">Finance Officer</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team5.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Dave Clarkte</h3>
                                            <p className="ts-designation">Civil Engineer</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="ts-team-wrapper">
                                        <div className="team-img-wrapper">
                                            <img loading="lazy" className="w-100" src="/assets/images/team/team6.jpg" alt="team-img" />
                                        </div>
                                        <div className="ts-team-content">
                                            <h3 className="ts-name">Elton Joe</h3>
                                            <p className="ts-designation">Site Supervisor</p>
                                            <p className="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                                            <div className="team-social-icons">
                                                <a target="_blank" href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-twitter"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-google-plus"></i></a>
                                                <a target="_blank" href="#"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
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

export default About;