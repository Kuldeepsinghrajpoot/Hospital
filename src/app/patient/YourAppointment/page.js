import React from 'react';
import axios from 'axios'
const getData = async () => {
    const response = await axios.get('http://localhost:3000/patient/api', {
        catch: "no-store"
    });
    const data = response.data.Appointment;
    return data;
}

const page = async () => {
    const data = await getData();
    return (
        <>
            <div className=" lg:mx-20 md:mx:20    object-center container-p-y absolute  top-4">
                <h4 className="fw-bold  "></h4>
                <div className="row ">
                    {data.map((e) => {
                        const { Name, Appointment, Doctor, Status, Problem, Date, Phone, Email } = e;
                        // const date = Date
                        // const inputDate = new Date(Date);
                        //     const day = inputDate.getUTCDate();
                        //     const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(inputDate);
                        //     const year = inputDate.getUTCFullYear();
                        return (
                            <div className="col-xxl-4 mt-4 w-full" key={e._id}>
                                <div className="card h-100 w-fit" >
                                    <div className="card-header text-center">
                                        <div className="w-96">
                                            <h5 className="mb-1">{Name}</h5>
                                            <small className="text-muted">{Problem}</small>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="p-0 m-0">
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-regular fa-calendar-check fa-lg"></i></div>
                                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                                    <h6 className="mb-0 ms-3">Appointment Id</h6>
                                                    <div className="d-flex">
                                                        <p className="mb-0 fw-semibold">{e._id}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-solid fa-calendar-days fa-lg"></i></div>
                                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                                    <h6 className="mb-0 ms-3">Date</h6>
                                                    <div className="d-flex">
                                                        <p className="mb-0 fw-semibold">{Date}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-solid fa-user-doctor fa-lg"></i></div>
                                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                                    <h6 className="mb-0 ms-3">Doctor</h6>
                                                    <div className="d-flex">
                                                        <p className="mb-0 fw-semibold">{Doctor}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-regular fa-envelope fa-lg"></i></div>
                                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                                    <h6 className="mb-0 ms-3">Email</h6>
                                                    <div className="d-flex">
                                                        <p className="mb-0 fw-semibold">{Email}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-regular fa-envelope fa-lg"></i></div>
                                                <div className="d-flex justify-content-between w-100 flex-wrap">
                                                    <h6 className="mb-0 ms-3">Status</h6>
                                                    <div className="d-flex">
                                                        <p className="mb-0 fw-semibold">{Status}</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-2 pb-1 d-flex justify-content-between align-items-center">
                                                <div className="badge bg-label-success rounded p-2"><i class="fa-solid fa-phone fa-lg" ></i></div>
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
                    })}
                </div>
            </div>
        </>
    );
}

export default page;
