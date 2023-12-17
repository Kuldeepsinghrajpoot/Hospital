import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import axios from 'axios'

const getData = async () => {
    try {
        const response = await axios.get(`${process.env.URI}/api/appointmentsDetalis`, {
            // You can set additional configurations here
        });
        const data = response.data.Appointment;
        return data;
      // Set loading to false when data is fetched
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error fetching data:', error);
        // Update loading state in case of error
    }
};

const page = async() => {
    const session = await getServerSession(authOptions)
    const data = await getData();
    if (!data) {
        return;
    }
    return (
        <>
            <div className="container-xxl   object-center container-p-y absolute top-10">
                <h4 className="fw-bold  mb-4"></h4>

                <div className="row d-flex justify-content-center">
                    {/* <!-- Monthly Campaign State --> */}
                    <div className="col-xl-4">
                        <div className="card h-100">
                            <div className="card-header text-center">
                                <div className="">
                                    <h5 className="mb-1"></h5>
                                    <small className="text-muted">{session?.user?.name}</small>
                                </div>

                            </div>
                            <div className="card-body">
                                <ul className="p-0 m-0">
                                    <li className="mb-4 pb-1 d-flex justify-content-between align-items-center">
                                        <div className="badge bg-label-success rounded p-2"><i className="ti ti-mail ti-sm"></i></div>
                                        <div className="d-flex justify-content-between w-100 flex-wrap">
                                            <h6 className="mb-0 ms-3">Email</h6>
                                            <div className="d-flex">
                                                <p className="mb-0 fw-semibold">{session?.user?.email}</p>
                                               
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
}

export default page;
export const metadata = {
    title: 'Dashboard',
  }