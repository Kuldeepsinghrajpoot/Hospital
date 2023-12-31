'use client'

import { useFormik } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import moment from 'moment-timezone'

const Appointment = ({ data }) => {
    const [loading, setloading] = useState(false);
    const [date, setdate] = useState({});
   
    const originalDate = moment.tz(date, "Asia/Kolkata");
    // const originalDate = moment.utc(appointmentDate);
    const formattedDates = originalDate.format("MMMM Do YYYY");

    const initialize = {
        Name: '',

        Doctor: '',
        Status: '',
        AppointmentDate: formattedDates,
        Phone: '',
        Email: '',
        Age: '',
        Gender: '',
        UserId: '',
        Address: ''
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialize,
        validationSchema: Yup.object({

            Name: Yup.string().required("feild is required"),
            Phone: Yup.string().required("feild is required"),
            Age: Yup.string().required("feild is required"),
            Gender: Yup.string().required("feild is required"),
            Gender: Yup.string().required("feild is required"),
            Doctor: Yup.string().required("feild is required"),
            Address: Yup.string().required("this field is requried"),
            AppointmentDate: Yup.string().required("feild is required"),


        }),

        onSubmit: async (values, { resetForm }) => {
            setloading(true)
            try {
                const response = await fetch("/user/api", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Handle success, e.g., show a success message or redirect
                    // console.log('Registration successful');
                    toast.success('Registraion Successful', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    resetForm();
                } else {
                    // Handle errors, e.g., show an error message
                    console.error('Registration failed', response);
                }
            } catch (error) {
                // Handle network or other errors
                console.error('An error occurred', error);
            } finally {
                setloading(false)
            }
        }

    })

    // const [values.Age, setSelectedOption] = useState('Select');
    const options = Array.from({ length: 100 }, (_, index) => (index + 1).toString());


    return (
        <>
            <div className="layout-wrapper layout-content-navbar w-96 absolute">
                <div className="layout-container w-96">
                    <div className="layout-page w-96">
                        <div className="content-wrapper w-96">
                            {/* <!-- Content --> */}

                            <div className="container-xxl flex-grow-1 container-p-y ">
                                <div className="col-xxl relative   d-flex justify-center ">
                                    <div className="card mb-4 md:w-4/12">
                                        <div className="card-header  ">
                                            <h5 className="mb-0 text-center">Appointment</h5>

                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-icon-default-fullname">Full Name</label>
                                                    <div className="input-group input-group-merge">
                                                        <span id="basic-icon-default-fullname2" className="input-group-text"><i className="ti ti-user"></i></span>
                                                        <input
                                                            type="text"
                                                            onChange={handleChange}
                                                            value={values.Name}
                                                            name='Name'
                                                            className="form-control"
                                                            id="basic-icon-default-fullname"
                                                            placeholder="John Doe"
                                                            aria-label="John Doe"
                                                            aria-describedby="basic-icon-default-fullname2"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="modalEditUserName">Doctor</label>
                                                    <select
                                                        className="form-select"
                                                        id="exampleFormControlSelect1"
                                                        aria-label="Default select example"
                                                        name='Doctor'
                                                        onChange={handleChange}
                                                        value={values.Doctor}>
                                                        <option value="Select">Select</option>
                                                        {data.map((value, index) => (
                                                            <option key={index} value={value.name}>
                                                                {value.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-icon-default-phone">Phone No</label>
                                                    <div className="input-group input-group-merge">
                                                        <span id="basic-icon-default-phone2" className="input-group-text"><i className="ti ti-phone"></i></span>
                                                        <input
                                                            type="text"
                                                            onChange={handleChange}
                                                            value={values.Phone}
                                                            id="basic-icon-default-phone"
                                                            className="form-control phone-mask"
                                                            placeholder="658 799 8941"
                                                            aria-label="658 799 8941"
                                                            name='Phone'
                                                            aria-describedby="basic-icon-default-phone2"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlSelect1" className="form-label">
                                                        Age
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="exampleFormControlSelect1"
                                                        aria-label="Default select example"
                                                        name='Age'
                                                        onChange={handleChange}
                                                        value={values.Age}
                                                    >
                                                        <option value="Select">Select</option>
                                                        {options.map((value, index) => (
                                                            <option key={index} value={value}>
                                                                {value}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <label htmlFor="exampleFormControlSelect1" className="form-label">
                                                    Gender
                                                </label>
                                                <div className=" grid grid-cols-3 mb-3 gap-2">
                                                    {/* <label htmlFor="Gender" className="form-label">Gender</label> */}

                                                    <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700 ">
                                                        <input onChange={handleChange} onBlur={handleBlur} id="Gender-1" type="radio" value={"Male"} name="Gender" />
                                                        <label htmlFor="Gender-1" className="w-full py-2 "> Male</label>

                                                    </div>
                                                    <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                                        <input onChange={handleChange} onBlur={handleBlur} id="Gender-2" type="radio" value={"Female"} name="Gender" />
                                                        <label htmlFor="Gender-2" className="w-full py-2 "> Female</label>

                                                    </div>
                                                    <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                                        <input onChange={handleChange} onBlur={handleBlur} id="Gender-3" type="radio" value={"Other"} name="Gender" />
                                                        <label htmlFor="Gender-3" className="w-full py-2 "> Other</label>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-icon-default-message">Appointment Date</label>
                                                    <div className="input-group input-group-merge">
                                                        <span id="basic-icon-default-message2" className="input-group-text"><i className="ti ti-message-dots"></i></span>
                                                        <input
                                                            type='date'
                                                            name='AppointmentDate'
                                                            value={date}
                                                            onChange={(e)=>setdate(e.target.value)}
                                                            id="basic-icon-default-message"
                                                            className="form-control"
                                                            placeholder="Hi, Do you have any problem?"
                                                            aria-label="Hi, Do you have any probelm?"
                                                            aria-describedby="basic-icon-default-message2"
                                                        ></input>

                                                        {/* <input type="text" value={values.UserId} onChange={handleChange} name='UserId'  /> */}
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label" htmlFor="basic-icon-default-message">Address</label>
                                                    <div className="input-group input-group-merge">
                                                        <span id="basic-icon-default-message2" className="input-group-text"><i className="ti ti-message-dots"></i></span>
                                                        <textarea
                                                            type='text'
                                                            name='Address'
                                                            value={values.Address}
                                                            onChange={handleChange}
                                                            id="basic-icon-default-message"
                                                            className="form-control"
                                                            placeholder="enter your address"
                                                            aria-label="enter your address"
                                                            aria-describedby="basic-icon-default-message2"
                                                        ></textarea>

                                                        {/* <input type="text" value={values.UserId} onChange={handleChange} name='UserId'  /> */}
                                                    </div>
                                                </div>
                                                <button
                                                    className="flex drop-shadow-2xl justify-center  w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                                                    type="submit"
                                                    disabled={loading} // Disable the button when in the loading state
                                                >
                                                    {loading ? (
                                                        <>
                                                            <svg width="20"  height="20" fill="currentColor" class="mr-2 drop-shadow-2xl animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                                </path>
                                                            </svg>                          Processing...
                                                        </>
                                                    ) : (
                                                        'Submit'
                                                    )}
                                                </button>                                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appointment;

