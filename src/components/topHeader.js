import React, { useEffect, useState } from "react";
import useRequest from "../hooks/useRequest";
import DOMPurify from "dompurify";

const TopHeader = () => {
    const [siteInfo, setSiteInfo] = useState(null);
    const [socialLinks, setSocialLinks] = useState([]);

    const { request, response } = useRequest()
    const { request: socialRequest, response: socialResponse } = useRequest()

    useEffect(() => {
        request('GET', 'home/site-info')
        socialRequest('GET', 'home/social-links')
    }, [])

    useEffect(() => {
        if (response && response?.status === "SUCCESS") {
            setSiteInfo(response?.data?.site_info)
        }
        if(socialResponse && socialResponse?.status === "SUCCESS"){
            setSocialLinks(socialResponse?.data?.social_links)
        }
    }, [response, socialResponse])

    return (
        <>
            <div id="top-bar" className="top-bar">
                <div classNameName="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <ul className="top-info text-center text-md-left">
                                <li><i className="fas fa-map-marker-alt"></i>
                                    <p className="info-text">{siteInfo?.address}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 top-social text-center text-md-right">
                            <ul className="list-unstyled">
                                <li>
                                    {socialLinks && socialLinks.map((data, index) => (
                                        <a title={data?.social_page?.name} href={data?.link} target="_blank">
                                            <span className="social-icon" dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(data?.social_page?.icon)
                                            }}></span>
                                        </a>
                                    ))}
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