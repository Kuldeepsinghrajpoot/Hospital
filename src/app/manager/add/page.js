import React from 'react';
import Adduser from './addPatient/page'

import Patient from './todaysPatients/page'
const DoctorTable = () => {
    return (
        <div>
            <div className="layout-wrapper layout-content-navbar  h-96 md:h-48">
                <div className="layout-container h-10">
                    <div className="layout-page h-10">
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row mb-4">
                                    {/*/  Refer & Earn */}
                                    <Adduser></Adduser>
                                    {/* <AddDoctor></AddDoctor> */}
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
            <div>
                <Patient></Patient>
            </div>
        </div>
    );
}

export default DoctorTable;

export async function generateMetadata() {
    return {
        title: 'Add Patient / Doctor',
        deScription: 'Register'
    }
}