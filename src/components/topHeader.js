import React from "react";

const TopHeader = () => {

    return (
        <>
            <div id="top-bar" className="top-bar">
                <div classNameName="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="top-info text-center text-md-left">
                                <li><i className="fas fa-map-marker-alt"></i>
                                    <p className="info-text">9051 Constra Incorporate, USA</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                            <ul className="list-unstyled">
                                <li>
                                    <a title="Facebook" href="https://facebbok.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-facebook-f"></i></span>
                                    </a>
                                    <a title="Twitter" href="https://twitter.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-twitter"></i></span>
                                    </a>
                                    <a title="Instagram" href="https://instagram.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-instagram"></i></span>
                                    </a>
                                    <a title="Linkdin" href="https://github.com/themefisher.com">
                                        <span className="social-icon"><i className="fab fa-github"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader;