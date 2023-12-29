"use client"

import React, { useEffect, useState } from 'react';
import Img from 'next/image'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const Register = () => {
    const [loading, setLoading] = useState(false);

    const options = Array.from({ length: 100 }, (_, index) => (index + 1).toString());
    const route = useRouter()
    const initialValues = {
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        contactnumber: "",
        Age: '',
        gender: "",
        address: "",
        role: "user"
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("lastname is required"),
            email: Yup.string().required("email is required"),
            password: Yup.string().required("Password is required"),
            confirmpassword: Yup.string().required("Confirm password is required").oneOf([Yup.ref("password"), null], "password must match"),
            contactnumber: Yup.string().required("Contact Number is required"),
            Age: Yup.string().required("Date of birth is required"),
            gender: Yup.string().required("gender is required"),
            address: Yup.string().required("address is required"),

            // message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await fetch("/api/mongodb", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                const res =await response.json();
                if (res.status===403) {
                    toast.error(' This email already register', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                } else {
                    toast.success('Successfully Account created', {
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
            } finally {
                setLoading(false);
            }
        }
    })
    const [password, setpassword] = useState(false);
    const [confirmpassword, setconfirmpassword] = useState(false);
    const slashpassword = (e) => {
        // console.log("value of e-->"+e);
        if (e === "confirmpassword") {
            setconfirmpassword(!confirmpassword)
        } else if (e === "password") {
            setpassword(!password)
        }
    }
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
                                    <Link href="/login" className="app-brand-link gap-2">
                                        <span className=" demo">
                                        <Img src="/img/favicon/favicon.ico" width={50} height={50} alt="Logo" />

                                        </span>
                                        <span className="app-brand-text demo text-body fw-bold ms-1">Uday clinic</span>
                                    </Link>
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
                                                ? "form-control border border-danger"
                                                 : "form-control"
                                                } `}
                                            id="name"
                                            name="name"
                                            value={values.name}
                                            onBlur={handleBlur}
                                            placeholder="Enter your name"
                                        autoFocus
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
                                                ? "form-control border border-danger"
                                                 : "form-control"
                                                } `}
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
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input onChange={handleChange} onBlur={handleBlur} type="email" value={values.email} className={`form-control  ${errors.email && touched.email
                                            ? "form-control border border-danger"
                                            : "form-control"
                                            } `} id="email" name="email" placeholder="Enter your email" />

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
                                                type={password ? 'text' : 'password'}

                                                id="password"
                                                // className="form-control"
                                                className={`form-control  ${errors.password && touched.password
                                                    ? "form-control border border-danger"
                                                    : "form-control"
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
                                                ? "form-control border border-danger"
                                                : "form-control"
                                                } `} >


                                                <span className=" cursor-pointer" onClick={() => slashpassword('password')}><i className={password ? "ti ti-eye" : "ti ti-eye-off"}></i></span><br />

                                            </span>
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
                                                type={confirmpassword ? 'text' : 'password'}

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
                                                }`} >

                                                <span className=" cursor-pointer" onClick={() => slashpassword('confirmpassword')}><i className={confirmpassword ? "ti ti-eye" : "ti ti-eye-off"}></i></span><br />

                                            </span>
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
                                             ? "form-control border border-danger"
                                             : "form-control"
                                            }`} id="contactnumber" name="contactnumber" placeholder="Enter your email" />
                                        {errors.contactnumber && touched.contactnumber ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.contactnumber}
                                            </span>
                                        ) : null}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="modalEditUserName">Age</label>
                                        <select
                                            
                                            id="exampleFormControlSelect1"
                                            aria-label="Default select example"
                                            name='Age'
                                            className={`form-select form-control ${ values.Age=='Select'
                                                ? "form-control border border-danger"
                                                : "form-control"
                                               }`}
                                            onChange={handleChange}
                                            value={values.Age}>
                                            <option value="Select">Select</option>
                                            {options.map((value, index) => (
                                                <option key={index} value={value}>
                                                    {value}
                                                </option>
                                            ))}
                                            
                                        </select>
                                    </div>
                                    <label htmlFor="gender" className="form-label mb-2">Gender</label>
                                    <div className=" grid grid-cols-3 gap-1">
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
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <textarea onChange={handleChange} onBlur={handleBlur} value={values.address} type="text" className={`form-control ${errors.address && touched.address
                                            ? "form-control border border-danger"
                                            : "form-control"
                                            }`} id="address" name="address" placeholder="address" />
                                        {errors.address && touched.address ? (
                                            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                {errors.address}
                                            </span>
                                        ) : null}
                                    </div>
                                    <button
                      className="flex justify-center  w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
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
                        'Register'
                      )}
                    </button>
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
