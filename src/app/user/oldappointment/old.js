'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './loading'
const Page = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/appointmentsDetalis', {
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

    return (
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <div className="layout-page">
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                {loading ? (
                                    <div><Loading></Loading></div> // Show a loader while fetching data
                                ) : (
                                    <div className="row">
                                        {data.length === 0 ? (
                                            <div>No Appointment</div>
                                        ) : (
                                            data.map((e) => {
                                                const { Name, Appointment, Doctor, Status, Problem, AppointmentDate, Phone, Email } = e;
                                                const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                                const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', options);
                                                return (
                                                   
                                                        <div className="col-xxl-4 mb-4  w-fit" key={e._id}>
                                                            <div className="card h-100  w-full " >
                                                                <div className="card-header text-center">
                                                                    <div className="w-96">
                                                                        <h5 className="mb-1">{Name}</h5>
                                                                        <p className="text-muted">{Problem}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="card-body">
                                                                    <ul className="p-0 m-0">
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-regular fa-calendar-check fa-lg"></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Appointment Id</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{e._id}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-calendar-days fa-lg"></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Date</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{standardDate}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-user-doctor fa-lg"></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Doctor</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{Doctor}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-regular fa-envelope fa-lg"></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Email</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{Email}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-regular fa-envelope fa-lg"></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Status</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{Status}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                                            <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-phone fa-lg" ></i></div>
                                                                            <div className="d-flex justify-content-between w-100 flex-wrap">
                                                                                <h6 className="mb-0 ms-3">Phone</h6>
                                                                                <div className="d-flex">
                                                                                    <p className="mb-0 fw-semibold">{Phone}</p>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <button className=" bg-indigo-700 text-white px-2 py-2  rounded-md shadow-md flex justify-center mb-0 ms-3 text-center my-10">Appointment</button>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                )
                                            })
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                {/* Overlay, Drag Target Area */}
            </div>
        </div>
    );
};

export default Page;
