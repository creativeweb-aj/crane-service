import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbar-collapse" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to='' className="sidebar-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to='services' className="sidebar-link">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to='projects' className="sidebar-link">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to='about' className="sidebar-link">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to='contact' className="sidebar-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;