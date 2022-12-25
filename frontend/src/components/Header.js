import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import '../navbar.css'
import { IconContext } from "react-icons";



function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            {/* <IconContext.Provider value={{ color: "undefined" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <img src={"/images/technouniq--preview.png"}  alt="image" className="img-fluid"/>
                                <AiIcons.AiOutlineClose />

                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                
            </IconContext.Provider> */}

            <header className="app-header app-header-dark">
                <div className="top-bar">

                    <div className="top-bar-brand">
                        <button className="hamburger hamburger-squeeze bg-primary mr-2" type="button" data-toggle="aside-menu" aria-label="toggle aside menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                        <a href="/business">
                            <img src="/images/technouniq--preview.png" className="img-fluid" height="30" />
                        </a>
                    </div>

                    <div className="top-bar-list">
                        <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
                            <button className="hamburger hamburger-squeeze bg-primary" type="button" data-toggle="aside" aria-label="toggle menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button>
                        </div>
                        {/* <div className="top-bar-item d-none d-md-flex">
                            <div id="_divWarningEmailNotVerified" className="bg-warning rounded mr-2 p-2">
                                <span className="text-dark">E-Mail not verified</span>
                                <a className="text-primary" href="/account">Verify Now</a>
                            </div>
                            <div id="_divWarningMobileNotVerified" className="bg-warning rounded mr-2 p-2">
                                <span className="text-dark">Mobile number not verified</span>
                                <a className="text-primary" href="/account">Verify Now</a>
                            </div>
                        </div> */}
                        <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
                            <div className="dropdown d-none d-md-flex">
                                <button className="btn-account" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="user-avatar user-avatar-md">
                                        <img src="/images/user-male-big.jpg" alt="User Profile" width="40" height="40" />
                                    </span>
                                    <span className="account-summary pr-lg-4 d-none d-lg-block">
                                        <span className="account-name" style={{ "width": "100px;" }}>Shweta Pedamkar</span>
                                        <span className="account-description" style={{ "width": "100px;" }}>hr@echeloncs.co.in</span>
                                    </span>
                                </button>
                                <div className="dropdown-menu">
                                    <div className="dropdown-arrow d-lg-none" x-arrow=""></div>
                                    <div className="dropdown-arrow ml-3 d-none d-lg-block"></div>
                                    <h6 className="dropdown-header d-none d-md-block d-lg-none account-name">Shweta Pedamkar</h6>
                                    <a className="dropdown-item" href="/account"><span className="dropdown-icon fa fa-fw fa-user"></span> Account Summary</a>
                                    <a className="dropdown-item" href="/account/password"><span className="dropdown-icon fa fa-fw fa-key"></span> Change Password</a>
                                    <a className="dropdown-item" href="/account/sessions"><span className="dropdown-icon fa fa-fw fa-tasks"></span> Login Sessions</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/logout"><span className="dropdown-icon fa fa-fw fa-sign-out"></span> Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="app-aside app-aside-expand-md app-aside-light">

                <div className="aside-content">

                    <header className="aside-header d-block d-md-none">

                        <button className="btn-account collapsed" type="button" data-toggle="collapse" data-target="#dropdown-aside" aria-expanded="false">
                            <span className="user-avatar user-avatar-lg">
                                <img src="/images/user-male-big.jpg" alt="User" />
                            </span>
                            <span className="account-icon"><span className="fa fa-caret-down fa-lg"></span></span>
                            <span className="account-summary">
                                <span className="account-name">Shweta Pedamkar</span>
                                <span className="account-description">hr@echeloncs.co.in</span>
                            </span>
                        </button>


                        <div id="dropdown-aside" className="dropdown-aside collapse" >
                            <div className="pb-3">
                                <a className="dropdown-item" href="/account"><span className="dropdown-icon fa fa-fw fa-user"></span> My Account</a>
                                <a className="dropdown-item" href="/account/password"><span className="dropdown-icon fa fa-fw fa-key"></span> Change Password</a>
                                <a className="dropdown-item" href="/account/sessions"><span className="dropdown-icon fa fa-fw fa-tasks"></span> Login Sessions</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/logout"><span className="dropdown-icon fa fa-fw fa-sign-out"></span> Logout</a>
                            </div>
                        </div>

                    </header>

                    <div className="aside-menu overflow-hidden ps">
                    {/* stacked-menu has-active stacked-menu-has-collapsible 
                     stacked-menu has-active stacked-menu-has-compact stacked-menu-has-hoverable 
                    */}
                        <nav id="stacked-menu" className=" stacked-menu has-active stacked-menu-has-collapsible   ">
                            <ul className="menu">

                                <li className="menu-item has-child">
                                    <a href="javascript: void(0)" className="menu-link"><span className="menu-icon fa fa-fw fa-building"></span> <span className="menu-text">Businesses</span> </a>
                                    <ul className="menu"><li className="menu-subhead">Businesses</li>
                                        <li className="menu-item"><a href="/business" className="menu-link" tabindex="-1">List of Businesses</a></li>
                                        <li className="menu-item"><a href="/business/add" className="menu-link" tabindex="-1">Add New Business</a></li>
                                    </ul>
                                </li>

                                <li className="menu-item has-child has-active">
                                    <a href="javascript: void(0)" className="menu-link"><span className="menu-icon fa fa-fw fa-user"></span> <span className="menu-text">My Account</span> </a>
                                    <ul className="menu"><li className="menu-subhead">My Account</li>
                                        <li className="menu-item has-active"><a href="/account" className="menu-link">Account Summary</a></li>
                                        <li className="menu-item"><a href="/account/password" className="menu-link">Change Password</a></li>
                                        <li className="menu-item"><a href="/account/sessions" className="menu-link">Login Sessions</a></li>
                                    </ul>
                                </li>

                                <li className="menu-item has-child ">
                                    <a href="javascript: void(0)" className="menu-link"><span className="menu-icon fa fa-fw fa-life-bouy"></span> <span className="menu-text">Support</span> </a>
                                    <ul className="menu"><li className="menu-subhead">Support</li>
                                        <li className="menu-item"><a href="/support" className="menu-link" tabindex="-1">My Tickets</a></li>
                                        <li className="menu-item"><a href="/support/create" className="menu-link" tabindex="-1">New Ticket</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-divider"></li>

                                <li className="menu-item">
                                    <a href="/logout" className="menu-link"><span className="menu-icon fa fa-fw fa-power-off"></span> <span className="menu-text">Logout</span></a>
                                </li>

                            </ul>
                        </nav>
                        <div className="ps__rail-x" style={{"left": "0px;", "bottom": "0px;"}}>
                            <div className="ps__thumb-x" tabindex="0" style={{"left": "0px;", "bottom": "0px;"}}></div>
                        </div>
                        <div className="ps__rail-y" style={{"top": "0px", "right": "0px;"}}>
                            <div className="ps__thumb-y" tabindex="0" style={{"top": "0px", "right": "0px;"}}></div>
                        </div>
                    </div>

                </div>

            </aside>
        </>
    );
}
export default Header