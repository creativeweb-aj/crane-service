import React from "react";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer bg-overlay">
                <div className="footer-main">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-4 col-md-6 footer-widget footer-about">
                                <h3 className="widget-title">About Us</h3>
                                <img loading="lazy" width="200px" className="footer-logo" src="/assets/images/footer-logo.png" alt="Constra" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                                    labore et dolore magna aliqua.</p>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="https://facebook.com/themefisher" aria-label="Facebook"><i
                                            className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/themefisher" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li><a href="https://instagram.com/themefisher" aria-label="Instagram"><i
                                            className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://github.com/themefisher" aria-label="Github"><i className="fab fa-github"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                                <h3 className="widget-title">Working Hours</h3>
                                <div className="working-hours">
                                    We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
                                    Hotline and Contact form.
                                    <br /><br /> Monday - Friday: <span className="text-right">10:00 - 16:00 </span>
                                    <br /> Saturday: <span className="text-right">12:00 - 15:00</span>
                                    <br /> Sunday and holidays: <span className="text-right">09:00 - 12:00</span>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                                <h3 className="widget-title">Services</h3>
                                <ul className="list-arrow">
                                    <li><a href="service-single.html">Pre-Construction</a></li>
                                    <li><a href="service-single.html">General Contracting</a></li>
                                    <li><a href="service-single.html">Construction Management</a></li>
                                    <li><a href="service-single.html">Design and Build</a></li>
                                    <li><a href="service-single.html">Self-Perform Construction</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="copyright-info">
                                    <span>Copyright &copy;
                                        <script>
                                            document.write(new Date().getFullYear())
                                        </script>, Designed &amp; Developed by <a href="https://adot.co.in" rel="noreferrer" target="_blank">ADOT</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div id="back-to-top" data-spy="affix" data-offset-top="10" className="back-to-top position-fixed">
                            <button className="btn btn-primary" title="Back to Top">
                                <i className="fa fa-angle-double-up"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;