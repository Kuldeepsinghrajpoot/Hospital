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
        role: ""
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
            role:Yup.string().required("role is required"),
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
                const data = await response.json();
                // console.log("data",data);
                if (data.status === 409) {
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
                    // resetForm()
                    // route.replace('/login')
                } else {
                    toast.success('Successfully created', {
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
            <div class="col-xl-4 col-lg-6 col-md-6">
                <div class="card h-100">
                    <div class="row h-100">
                        <div class="col-sm-5">
                            <div class="d-flex align-items-end h-100 justify-content-center mt-sm-0 mt-3">
                                <img
                                    src="/img/illustrations/add-new-roles.png"
                                    class="img-fluid mt-sm-4 mt-md-0"
                                    alt="add-new-roles"
                                    width="83"
                                />
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="card-body text-sm-end text-center ps-sm-0">
                                <button
                                    data-bs-target="#addRoleModal"
                                    data-bs-toggle="modal"
                                    class="btn btn-primary mb-2 text-nowrap add-new-role"
                                >
                                    Add New Role
                                </button>
                                <p class="mb-0 mt-1">Add role, if it does not exist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="modal fade" id="addRoleModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-add-new-role">
                    <div class="modal-content p-3 p-md-5">
                        <button
                            type="button"
                            class="btn-close btn-pinned"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <div class="modal-body">
                            <div class="text-center mb-4">
                                <h3 class="role-title mb-2">Add New Role</h3>
                                <p class="text-muted">Set role permissions</p>
                            </div>
                            {/* <!-- Add role form --> */}
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
                                    <div className=" grid grid-cols-2 gap-1">
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="role" type="radio" value={"Doctor"} name="role" />
                                            <label htmlFor="role" className="w-full py-2 "> Doctor</label>
                                        </div>
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="role" type="radio" value={"Manager"} name="role" />
                                            <label htmlFor="role" className="w-full py-2 "> Manager</label>
                                        </div>
                                        
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

        </>

    );
}

export default DoctorTable;
