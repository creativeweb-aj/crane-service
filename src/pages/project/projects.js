import React, { useEffect, useState } from "react";
import { useExternalScript } from '../../hooks/useExternalScript';
import useRequest from "../../hooks/useRequest";
import { API } from "../../constant/api";

const BaseUrl = API.Base_Url;

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const { request, response } = useRequest()

    useEffect(() => {
        request('GET', 'home/projects')
        return () => {
            let script = document.querySelector(`script[src="/assets/js/script.js"]`);
            if(script){
                script.remove()
            }
        };
    }, [])

    useEffect(() => {
        console.info('response project --> '+response)
        if (response && response?.status === "SUCCESS") {
            setProjects(response?.data?.projects)
        }
        if(projects.length > 0){
            let script = document.createElement('script')
            script.src =  "/assets/js/script.js"
            document.body.appendChild(script)
        }
    }, [response, projects])

    return (
        <>
            <div id="banner-area" className="banner-area" style={{ backgroundImage: 'url(/assets/images/banner/banner1.jpg)' }}>
                <div className="banner-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="banner-heading">
                                    <h1 className="banner-title">Project</h1>
                                    {/* <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb justify-content-center">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item"><a href="#">Project</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">All Projects</li>
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
                        <div className="col-12">
                            <div className="row shuffle-wrapper">
                                <div className="col-1 shuffle-sizer"></div>
                                {projects && projects.map((data, index) => (
                                    <div className="col-lg-4 col-md-6 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
                                        <div className="project-img-container">
                                            <a className="gallery-popup" href={`${BaseUrl}` + `${data?.image}`}>
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
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;