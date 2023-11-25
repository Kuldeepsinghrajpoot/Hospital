'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const DoctorTable = () => {
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
            console.log(values)
            try {
                const response = await fetch("http://localhost:3000/api/doctor", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (!response.ok) {
                    toast.error('Someting went wrong', {
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

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kuldeep">
                            Add
                        </button>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="kuldeep" tabindex="-1" aria-hidden="true">
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
                                    <label className="form-label" for="modalEditUsername">First Name</label>
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
                                    <label className="form-label" for="modalEditUsername">Last Name</label>
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
                                    <label className="form-label" for="modalEditUsername">email </label>
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
                                    <label className="form-label" for="modalEditUsername">Phone Number</label>
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
                                    <label className="form-label" for="modalEditUsername">Password</label>
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
                                    <label className="form-label" for="modalEditUsername">Confirm Password</label>
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
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1">Add</button>
                                    <button
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
