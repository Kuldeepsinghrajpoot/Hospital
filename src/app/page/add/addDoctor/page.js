'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const DoctorTable = () => {
    const [loading, setloading] = useState(false);
    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        contactnumber: "",
        gender: "",
        address: "",
        zipcode: "",
        dob: "",
        role: "Doctor"
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("Last Name is required"),
            email: Yup.string().required("email is required"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "password must match"),
            contactnumber: Yup.string().required("Contact Number is required"),
            // message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values) => {
            setloading(true)
            try {
                const response = await fetch("/api/doctor", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (!response.ok) {
                    toast.error('This email already register', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    resetForm()
                    // route.replace('/login')
                } else {
                    toast.success('Successful created', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    resetForm()
                    // route.replace('/user')
                }
            } catch (error) {
                // Handle network or other errors
                console.error('An error occurred', error);
            } finally {
                setloading(false)
            }
        }
    })
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="mb-3 ti ti-user ti-lg"></i>
                        <h5>Add New Doctor</h5>

                        <button type="button" className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " data-bs-toggle="modal" data-bs-target="#kuldeep">
                            Add
                        </button>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="kuldeep" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3 className="mb-2">Add New Doctor</h3>
                                {/* <p className="text-muted">Add new use</p> */}
                            </div>
                            <form id="editUserForm" className="row g-3" onSubmit={handleSubmit} >
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">First Name</label>
                                    <input
                                        type="text"
                                        id="modalEditUsername"
                                        name="name"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.name && touched.name
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.name && touched.name
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}

                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                        placeholder="Enter your First Name"
                                    // autoFocus
                                    />
                                    {errors.name && touched.name ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.name}
                                        </span>
                                    ) : null}


                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">Last Name</label>
                                    <input
                                        type="text"
                                        id="modalEditUsername"
                                        name="lastname"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.lastname && touched.lastname
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.lastname && touched.lastname
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}

                                        value={values.lastname}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                        placeholder="Enter your Last Name"
                                    // autoFocus
                                    />
                                    {errors.lastname && touched.lastname ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.lastname}
                                        </span>
                                    ) : null}


                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">email </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.email && touched.email
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.email && touched.email
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}

                                        value={values.email}
                                        onBlur={handleBlur}
                                        placeholder="Enter your email"

                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.email}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">Phone Number</label>
                                    <input
                                        type="text"
                                        id="modalEditUsername"
                                        name="contactnumber"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.contactnumber && touched.contactnumber
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.contactnumber && touched.contactnumber
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}
                                        value={values.contactnumber}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                        placeholder="Enter your Phone Number"
                                    />
                                    {errors.contactnumber && touched.contactnumber ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.contactnumber}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">Password</label>
                                    <input
                                        type="text"
                                        id="password"
                                        name="password"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.password && touched.password
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.password && touched.password
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}

                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                        placeholder="Password" />
                                    {errors.password && touched.password ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.password}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" htmlFor="modalEditUsername">Confirm Password</label>
                                    <input
                                        type="text"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        // className="form-control"
                                        className={`w-full  px-3 py-2 ${errors.confirmPassword && touched.confirmPassword
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.confirmPassword && touched.confirmPassword
                                                ? "focus: border-red-500"
                                                : ""
                                            }`}

                                        value={values.confirmPassword}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                        placeholder="Confirm Password"
                                    // autoFocus
                                    />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.confirmPassword}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="col-12 px-3 gap-4 text-center flex justify-start">
                                    <button
                                        className=" flex justify-center items-center  bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                                        type="submit"
                                        disabled={loading} // Disable the button when in the loading state
                                    >
                                        {loading ? (
                                            <>
                                                <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                    </path>
                                                </svg>                          Processing...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>                                    <button
                                        type="reset"
                                        className="btn btn-label-secondary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-backdrop fade"></div>
            <div className="layout-overlay layout-menu-toggle"></div>
            <div className="drag-target"></div>
        </>
    );
}

export default DoctorTable;
