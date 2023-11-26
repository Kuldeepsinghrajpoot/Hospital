'use client'
import React from 'react';
import Adduser from './addPatient/page'
import AddDoctor from './addDoctor/page'
const DoctorTable = () => {
    return (
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row mb-4">
                                    {/*/  Refer & Earn */}
                                    <Adduser></Adduser>
                                    <AddDoctor></AddDoctor>
                                </div>
                                {/*  */}
                            </div>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
                <div className="drag-target"></div>
            </div>
        </div>
    );
}

export default DoctorTable;
