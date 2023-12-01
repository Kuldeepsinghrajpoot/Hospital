'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './loading'
const Appointment = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        try {
            const response = await axios.get("/api/appointmentsDetalis", {
                // You can set additional configurations here
            });
            const data = response.data.Appointment;
            setData(data);
            setLoading(false); // Set loading to false when data is fetched
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error fetching data:', error);
            setLoading(false); // Update loading state in case of error
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!data) {
        return;
    }
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <div className="layout-page">
                    <div className="content-wrapper">
                        {/* Content */}
                        {loading ? (
                            <div><Loading></Loading></div> // Show a loader while fetching data
                        ) : (
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    {data.length === 0 ? (
                                        <div>No Appointment</div>
                                    ) : (

                                        data.map((e) => {
                                            const { Name, Appointment, Doctor, Status, Problem, _id, AppointmentDate, Age, Phone, Email } = e;
                                            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                            const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', options);
                                            return (
                                                <div className="col-xl-4 col-md-6 mb-4" key={Email}>
                                                    <div className="card h-100">
                                                        <div className="card-header d-flex bg-red-700 ">
                                                            <div className=" ">
                                                                <h5 className="m-0 me-2 ">{Name}</h5>
                                                                <h5 className="m-0 me-2">Age-{Age}</h5>

                                                                <small className="text-muted">Problem - {Problem}</small>
                                                            </div>
                                                        </div>
                                                        <div className="card-body pb-0">
                                                            <ul className="p-0 m-0">
                                                                <li className="d-flex mb-3">

                                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                        {/* appointment id */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2 ">
                                                                                <div className="badge bg-label-success rounded p-2">
                                                                                    <i className="fa-regular fa-calendar-check fa-lg">
                                                                                    </i>
                                                                                </div>

                                                                                <h6 className="mb-0">Appointment id</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{_id}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* date */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2 ">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-calendar-days fa-lg"></i></div>

                                                                                <h6 className="mb-0">Date</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{standardDate}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* Doctor */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-user-doctor fa-lg"></i></div>

                                                                                <h6 className="mb-0">Doctor</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Doctor}</small>
                                                                            </div>
                                                                        </div>

                                                                        {/* email */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-regular fa-envelope fa-lg"></i></div>

                                                                                <h6 className="mb-0">Email</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Email}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* status */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-regular fa-envelope fa-lg"></i></div>

                                                                                <h6 className="mb-0">Status</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Status}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* Phone */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-phone fa-lg" ></i></div>

                                                                                <h6 className="mb-0">Phone</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Phone}</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </li>
                                                            </ul>
                                                            <div id="reportBarChart"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    )}
                                </div>
                            </div>


                        )}



                        <div className="content-backdrop fade"></div>

                    </div>
                    {/* Content wrapper */}
                </div>
                {/* / Layout page */}
            </div>

            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle"></div>

            {/* Drag Target Area To SlideIn Menu On Small Screens */}
            <div className="drag-target"></div>
        </div>
    );
}

export default Appointment;
