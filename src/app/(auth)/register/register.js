"use client"

import React, { useEffect, useState } from 'react';
import Img from 'next/image'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import {useRouter} from 'next/navigation'
import Link from 'next/link';
const Register = () => {

    const route = useRouter()
    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        contactnumber: "",
        dob: '',
        gender: "",
        address: "",
        problem: "",
        role:"user"
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("lastname is required"),
            email: Yup.string().required("email is required"),
            password: Yup.string().required("Password is required"),
            confirmpassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"),null],"password must match"),
            contactnumber: Yup.string().required("Contact Number is required"),
            dob: Yup.string().required("Date of birth is required"),
            gender: Yup.string().required("gender is required"),
            address: Yup.string().required("address is required"),
            problem: Yup.string().required("problem is requried"),
            // message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch("/api/mongodb", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if(!response.ok){
                    toast.error(' something went wrong', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }else{
                    toast.success('Successful Account created', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    route.replace('/login')     
                  }
            } catch (error) {
                // Handle network or other errors
                console.error('An error occurred', error);
            }
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
                                    <a href="" className="app-brand-link gap-2">
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
                                        <label htmlFor="name" className="form-label">First Name</label>
                                        <input onChange={handleChange}
                                            type="text"
                                            className={`w-full  px-3 py-2 ${errors.name && touched.name
                                                ? "border border-danger"
                                                : ""
                                                } border border-gray-300 rounded-md focus:outline-none  ${errors.name && touched.name
                                                    ? "focus: border-red-500"
                                                    : ""
                                                }`}
                                            id="name"
                                            name="name"
                                            value={values.name}
                                            onBlur={handleBlur}

                                            placeholder="Enter your name"
                                        // autoFocus
                                        />
                                        {errors.name && touched.name ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.name}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input onChange={handleChange}
                                            type="text"
                                            className={`w-full  px-3 py-2 ${errors.lastname && touched.lastname
                                                ? "border border-danger"
                                                : ""
                                                } border border-gray-300 rounded-md focus:outline-none  ${errors.name && touched.name
                                                    ? "focus: border-red-500"
                                                    : ""
                                                }`}
                                            id="lastname"
                                            name="lastname"
                                            value={values.lastname}
                                            onBlur={handleBlur}

                                            placeholder="Enter your lastname"
                                        // autoFocus
                                        />
                                        {errors.lastname && touched.lastname ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.lastname}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3 ">
                                        <label htmlFor="email" className="form-label">email</label>
                                        <input onChange={handleChange} onBlur={handleBlur} type="email" value={values.email} className={`form-control  ${errors.email && touched.email
                                            ? "border border-danger"
                                            : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.email && touched.email
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="email" name="email" placeholder="Enter your email" />

                                        {errors.email && touched.email ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.email}
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
                                                className={`form-control  ${errors.confirmpassword && touched.confirmpassword
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.confirmpassword && touched.password
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`}
                                                name="confirmpassword"
                                                onBlur={handleBlur}
                                                value={values.confirmpassword}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />

                                            <span className={`input-group-text cursor-pointer${errors.confirmpassword && touched.confirmpassword
                                                    ? "border border-danger"
                                                    : ""
                                                    } border border-gray-300 rounded-md focus:outline-none  ${errors.confirmpassword && touched.confirmpassword
                                                        ? "focus: border-red-500"
                                                        : "focus:border-indigo-500"
                                                    }`} ><i className="ti ti-eye-off"></i></span>
                                        </div>
                                        {errors.confirmpassword && touched.confirmpassword ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.confirmpassword}
                                            </span>
                                        ) : null}
                                    </div>

                                    {/* contact number */}
                                    <div className=" mb-3">
                                        <label htmlFor="contactnumber" className="form-label">contact Number</label>
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.contactnumber} type="text" className={`form-control ${errors.contactnumber && touched.contactnumber
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.contactnumber && touched.pcontactnumberassword
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="contactnumber" name="contactnumber" placeholder="Enter your email" />
                                        {errors.contactnumber && touched.contactnumber ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.contactnumber}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className=" mb-3">
                                        <label htmlFor="dob" className="form-label">dob</label>
                                        <input onChange={handleChange} onBlur={handleBlur} value={values.dob} type="date" className={`form-control ${errors.dob && touched.dob
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.dob && touched.dob
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="dob" name="dob" placeholder="DDDDMMMMYYYY" />
                                        {errors.dob && touched.dob ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.dob}
                                            </span>
                                        ) : null}
                                    </div>

                                    <div className=" grid grid-cols-3 gap-1">
                                        {/* <label htmlFor="gender" className="form-label">gender</label> */}

                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700 ">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-1" type="radio" value={"Male"} name="gender" />
                                            <label htmlFor="gender-1" className="w-full py-2 "> Male</label>

                                        </div>
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-2" type="radio" value={"Female"} name="gender" />
                                            <label htmlFor="gender-2" className="w-full py-2 "> Female</label>

                                        </div>
                                        <div className="flex items-center pl-4 border gap-2 border-gray-200 rounded dark:border-gray-700">
                                            <input onChange={handleChange} onBlur={handleBlur} id="gender-3" type="radio" value={"Other"} name="gender" />
                                            <label htmlFor="gender-3" className="w-full py-2 "> Other</label>
                                        </div>
                                    </div>
                                    {errors.gender && touched.gender ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.gender}
                                        </span>
                                    ) : null}
                                    {/* address */}
                                    <div className=" mb-3">
                                        <label htmlFor="address" className="form-label">address</label>
                                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.address} type="text" className={`form-control ${errors.address && touched.address
                                                ? "border border-danger"
                                                : ""
                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.address && touched.address
                                                ? "focus: border-red-500"
                                                : "focus:border-indigo-500"
                                            }`} id="address" name="address" placeholder="address" />
                                        {errors.address && touched.address ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.address}
                                            </span>
                                        ) : null}

                                    </div>

                                    <div className=" mb-3">
                                        <label htmlFor="problem" className="form-label">Patient problem</label>
                                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.problem} type="text"className={`form-control ${
                                                    errors.problem && touched.problem
                                                      ? "border border-danger"
                                                      : ""
                                                  } border border-gray-300 rounded-md focus:outline-none  ${
                                                    errors.problem && touched.problem
                                                      ? "focus: border-red-500"
                                                      : "focus:border-indigo-500"
                                                  }`}id="problem" name="problem" placeholder="patient problem" />
                                        {errors.problem && touched.problem ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.problem}
                                            </span>
                                        ) : null}
                                    </div>

                                    <button type='submit' className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">Sign up</button>
                                </form>

                                <p className="text-center">
                                    <span>Already have an account?</span>
                                    <Link href="/login">
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
