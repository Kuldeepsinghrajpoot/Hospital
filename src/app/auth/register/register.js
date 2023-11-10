"use client"

import React, { useEffect, useState } from 'react';
import Img from 'next/image'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import Cookies from 'js-cookie';
import {useRouter} from 'next/navigation'
import Link from 'next/link';
const Register = () => {

    const route = useRouter()



    const initialValues = {
        FirstName: "",
        LastName: "",
        Email: "",
        password: "",
        ConfirmPassword: "",
        ContactNumber: "",
        DOB: '',
        Gender: "",
        Address: "",
        Problem: "",
    }

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            FirstName: Yup.string().required("First Name is required"),
            LastName: Yup.string().required("Lastname is required"),
            Email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
            ConfirmPassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"),null],"password must match"),
            ContactNumber: Yup.string().required("Contact Number is required"),
            DOB: Yup.string().required("Date of birth is required"),
            Gender: Yup.string().required("Gender is required"),
            Address: Yup.string().required("Address is required"),
            Problem: Yup.string().required("Problem is requried"),

            // message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch("http://localhost:3000/api/mongodb", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Handle success, e.g., show a success message or redirect
                    console.log('Registration successful');
                } else {
                    // Handle errors, e.g., show an error message
                    console.error('Registration failed', response);
                }
            } catch (error) {
                // Handle network or other errors
                console.error('An error occurred', error);
            }
        }
    })

    useEffect(() => {
        const isAuthenticated = Cookies.get('token'); // Check if the user has a valid token
    
        if (isAuthenticated) {
          // If the user is already authenticated, redirect to a different page (e.g., the dashboard)
          route.push('/page');
        }
      })

    return (
        <>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic ">
                    <div className="authentication-inner py-4">
                        {/* <!-- Register Card --> */}
                        <div className="card">
                            <div className="card-body">
                                {/* <!-- Logo --> */}
                                <div className="app-brand justify-content-center mb-4 mt-2">
                                    <a href="index.html" className="app-brand-link gap-2">
                                        <span className="app-brand-logo demo">
                                            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                                    fill="#7367F0"
                                                />
                                                <path
                                                    opacity="0.06"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                                    fill="#161616"
                                                />
                                                <path
                                                    opacity="0.06"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                                    fill="#161616"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                                    fill="#7367F0"
                                                />
                                            </svg>
                                        </span>
                                        <span className="app-brand-text demo text-body fw-bold ms-1">Uday clinic</span>
                                    </a>
                                </div>
                                {/* <!-- /Logo --> */}
                                <h4 className="mb-3 pt-2 text-center">Patient Registration</h4>
                                {/* <p className="mb-4 text-center">Make your app management easy and fun!</p> */}

                                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit} >
                                    <div className=" mb-3">
                                        <label htmlFor="FirstName" className="form-label">Last Name</label>
                                        <input onChange={handleChange}
                                            type="text"
                                            className={`w-full  px-3 py-2 ${errors.FirstName && touched.FirstName
                                                ? "border border-danger"
                                                : ""
                                                } border border-gray-300 rounded-md focus:outline-none  ${errors.name && touched.name
                                                    ? "focus: border-red-500"
                                                    : ""
                                                }`}
                                            id="FirstName"
                                            name="FirstName"
                                            value={values.FirstName}
                                            onBlur={handleBlur}

                                            placeholder="Enter your FirstName"
                                        // autoFocus
                                        />
                                        {errors.FirstName && touched.FirstName ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.FirstName}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input onChange={handleChange}
                                            type="text"
                                            className={`w-full  px-3 py-2 ${errors.LastName && touched.LastName
                                                ? "border border-danger"
                                                : ""
                                                } border border-gray-300 rounded-md focus:outline-none  ${errors.name && touched.name
                                                    ? "focus: border-red-500"
                                                    : ""
                                                }`}
                                            id="LastName"
                                            name="LastName"
                                            value={values.LastName}
                                            onBlur={handleBlur}

                                            placeholder="Enter your lastname"
                                        // autoFocus
                                        />
                                        {errors.LastName && touched.LastName ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.LastName}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3 ">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onChange={handleChange} onBlur={handleBlur} type="email" value={values.Email} className={`form-control  ${errors.Email && touched.Email
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.Email && touched.Email
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="Email" name="Email" placeholder="Enter your email" />

                                        {errors.Email && touched.Email ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.Email}
                                            </span>
                                        ) : null}

                                    </div>
                                    {/* password */}
                                    <div className=" form-password-toggle mb-3">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={handleChange}
                                                type="password"
                                                id="password"
                                                // className="form-control"
                                                className={`form-control  ${errors.password && touched.password
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.password && touched.password
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`}
                                                name="password"
                                                onBlur={handleBlur}
                                                value={values.password}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />

                                            <span className={`input-group-text cursor-pointer${errors.password && touched.password
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.password && touched.password
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`} ><i className="ti ti-eye-off"></i></span>
                                        </div>
                                        {errors.password && touched.password ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.password}
                                            </span>
                                        ) : null}
                                    </div>

                                    {/* confirm passwrod */}

                                    <div className=" form-password-toggle mb-3">
                                        <label className="form-label" htmlFor="password">Confirm Password</label>
                                        <div className="input-group input-group-merge">
                                            <input onChange={handleChange}
                                                type="password"
                                                id="password"
                                                // className="form-control"
                                                className={`form-control  ${errors.ConfirmPassword && touched.ConfirmPassword
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.ConfirmPassword && touched.password
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`}
                                                name="ConfirmPassword"
                                                onBlur={handleBlur}
                                                value={values.ConfirmPassword}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />

                                            <span className={`input-group-text cursor-pointer${errors.ConfirmPassword && touched.ConfirmPassword
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.ConfirmPassword && touched.ConfirmPassword
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`} ><i className="ti ti-eye-off"></i></span>
                                        </div>
                                        {errors.ConfirmPassword && touched.ConfirmPassword ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.ConfirmPassword}
                                            </span>
                                        ) : null}
                                    </div>

                                    {/* contact number */}
                                    <div className=" mb-3">
                                        <label htmlFor="contactnumber" className="form-label">contact Number</label>
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.ContactNumber} type="text" className={`form-control ${errors.ContactNumber && touched.ContactNumber
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.ContactNumber && touched.pContactNumberassword
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="ContactNumber" name="ContactNumber" placeholder="Enter your email" />
                                        {errors.ContactNumber && touched.ContactNumber ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.ContactNumber}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3">
                                        <label htmlFor="dob" className="form-label">DOB</label>
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.DOB} type="date" className={`form-control ${errors.DOB && touched.DOB
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.DOB && touched.DOB
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="DOB" name="DOB" placeholder="DDDDMMMMYYYY" />
                                        {errors.DOB && touched.DOB ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.DOB}
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className=" grid grid-cols-3 gap-1">
                                        {/* <label htmlFor="gender" className="form-label">Gender</label> */}

                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700 ">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-1" type="radio" value={"Male"} name="Gender" />
                                            <label htmlFor="gender-1" className="w-full py-2 "> Male</label>

                                        </div>
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-2" type="radio" value={"Female"} name="Gender" />
                                            <label htmlFor="gender-2" className="w-full py-2 "> Female</label>

                                        </div>
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-3" type="radio" value={"Other"} name="Gender" />
                                            <label htmlFor="gender-3" className="w-full py-2 "> Other</label>
                                        </div>
                                    </div>
                                    {errors.Gender && touched.Gender ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.Gender}
                                        </span>
                                    ) : null}
                                    {/* Address */}
                                    <div className=" mb-3">
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.Address} type="text" className={`form-control ${errors.Address && touched.Address
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.Address && touched.Address
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="Address" name="Address" placeholder="Address" />
                                        {errors.Address && touched.Address ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.Address}
                                            </span>
                                        ) : null}

                                    </div>

                                    <div className=" mb-3">
                                        <label htmlFor="problem" className="form-label">Patient Problem</label>
                                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.Problem} type="text"className={`form-control ${
                                                    errors.Problem && touched.Problem
                                                      ? "border border-danger"
                                                      : ""
                                                  } border border-gray-300 rounded-md focus:outline-none  ${
                                                    errors.Problem && touched.Problem
                                                      ? "focus: border-red-500"
                                                      : "focus:border-indigo-500"
                                                  }`}id="Problem" name="Problem" placeholder="patient Problem" />
                                        {errors.Problem && touched.Problem ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.Problem}
                                            </span>
                                        ) : null}
                                    </div>

                                    <button type='submit' className="btn btn-primary d-grid w-100  text-center content-center">Sign up</button>
                                </form>

                                <p className="text-center">
                                    <span>Already have an account?</span>
                                    <Link href="../../user/login">
                                        <span>Sign in instead</span>
                                    </Link>
                                </p>

                                <div className="divider my-4">
                                    <div className="divider-text">or</div>
                                </div>

                                <div className="d-flex justify-content-center">
                                    <a href="" className="btn btn-icon btn-label-facebook me-3">
                                        <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                                    </a>

                                    <a href="" className="btn btn-icon btn-label-google-plus me-3">
                                        <i className="tf-icons fa-brands fa-google fs-5"></i>
                                    </a>

                                    <a href="" className="btn btn-icon btn-label-twitter">
                                        <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Register Card --> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
