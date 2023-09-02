import React, { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import DOMPurify from "dompurify";
import { API } from "../constant/api";

const BaseUrl = API.Base_Url;

const Footer = () => {
    const [siteInfo, setSiteInfo] = useState(null);
    const [socialLinks, setSocialLinks] = useState([]);
    const [workingDays, setWorkingDays] = useState([]);
    const [cranes, setCranes] = useState([]);

    const { request, response } = useRequest()
    const { request: socialRequest, response: socialResponse } = useRequest()
    const { request: workingDayRequest, response: workingDayResponse } = useRequest()
    const { request: craneRequest, response: craneResponse } = useRequest()

    useEffect(() => {
        request('GET', 'home/site-info')
        socialRequest('GET', 'home/social-links')
        workingDayRequest('GET', 'home/working-days')
        craneRequest('GET', 'home/cranes')
    }, [])

    useEffect(() => {
        if (response && response?.status === "SUCCESS") {
            setSiteInfo(response?.data?.site_info)
        }
        if (socialResponse && socialResponse?.status === "SUCCESS") {
            setSocialLinks(socialResponse?.data?.social_links)
        }
        if (workingDayResponse && workingDayResponse?.status === "SUCCESS") {
            setWorkingDays(workingDayResponse?.data?.working_days)
        }
        if(craneResponse && craneResponse?.status === "SUCCESS"){
            setCranes(craneResponse?.data?.cranes)
        }
    }, [response, socialResponse, workingDayResponse, craneResponse])

    return (
        <>
            <footer id="footer" className="footer bg-overlay">
                <div className="footer-main">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-lg-4 col-md-6 footer-widget footer-about">
                                <h3 className="widget-title">About Us</h3>
                                <img loading="lazy" width={200} className="footer-logo" src={`${BaseUrl}` + `${siteInfo?.logo}`} alt="Constra" />
                                <p>
                                    Your reliable partner for lifting solutions. With a fleet of advanced cranes and a commitment to safety, we deliver efficient and trusted lifting services for diverse needs.
                                </p>
                                <div className="footer-social">
                                    <ul>
                                        {socialLinks && socialLinks.map((data, index) => (
                                            <li>
                                                <a href={data?.link} aria-label={data?.social_page?.name}
                                                    dangerouslySetInnerHTML={{
                                                        __html: DOMPurify.sanitize(data?.social_page?.icon)
                                                    }}>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
                                <h3 className="widget-title">Cranes</h3>
                                <ul className="list-arrow">
                                    {cranes && cranes.map((data, index) => (
                                        <li>{data?.name}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
                                <h3 className="widget-title">Working Hours</h3>
                                <div className="working-hours">
                                    {workingDays && workingDays.map((data, index) => (
                                        <>
                                            <br /> {data?.day} <span className="text-right">24x7 Hour</span>
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="copyright-info">
                                    <span>
                                        Copyright &copy; {new Date().getFullYear()}
                                        <br/>
                                        Developed by innovative thinkers <a href="https://adot.co.in" rel="noreferrer" target="_blank">ADOT</a>
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