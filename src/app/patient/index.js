'use client'
import React from 'react';
import Table from '../page/table/page'
import Img from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
const Page = () => {
    // console.log(params);
    const router = usePathname();
    // alert(router)

    return (
        <div>
            <div className="layout-wrapper    layout-horizontal layout-without-menu ">
                <div className="layout-container absolute ">
                    {/* Navbar */}


                    {/* / Navbar */}

                    {/* Layout container */}
                    <nav className="layout-page">
                        {/* Content wrapper */}
                        <div className="content-wrapper">
                            {/* Menu */}
                            <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal menu bg-menu-theme flex-grow-0">
                                <div className="container-xxl d-flex h-100">
                                    <ul className="menu-inner">
                                        {/* Dashboards */}
                                        <li className={router == "/patient" ? "menu-item active" : "menu-item"} >
                                            <Link href="/patient" className="menu-link menu-toggle">
                                                <i className=" ti ti-smart-home"></i>
                                                <div data-i18n="Dashboards">Dashboards</div>
                                            </Link>

                                        </li>

                                        {/* Apps */}
                                        <li className={router == "/patient/YourAppointment" ? " menu-item active" : "menu-item "}>

                                            <Link href="/patient/YourAppointment" className="menu-link  menu-toggle">
                                                <i className="menu-icon tf-icons ti ti-layout-grid-add"></i>
                                                <div data-i18n="Apps">YourAppointment</div>
                                            </Link>

                                        </li>

                                        {/* Pages */}
                                        <li className={router == "/patient/profile" ? " menu-item active" : "menu-item "}>

                                            <Link href="/patient/profile" className="menu-link   menu-toggle">
                                                <i className="menu-icon tf-icons ti ti-file"></i>

                                                <div data-i18n="Pages">Profile</div>
                                            </Link>
                                        </li>
                                        <li className={router == "/patient/appointment" ? " menu-item active" : "menu-item "}>

                                            <Link href={"/patient/appointment"} className="menu-link  menu-toggle ">
                                                <i className="menu-icon tf-icons ti ti-file"></i>

                                                <div data-i18n="Pages">Crate new Appoinment</div>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div>hi</div>
                                </div>
                            </aside>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <Table></Table> */}
        </div>



    );
}

export default Page;
