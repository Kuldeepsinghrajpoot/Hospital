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
                if (!response.ok) {
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
                } else {
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
                                        className="btn btn-primary  w-100"
                                        type="submit"
                                        disabled={loading} // Disable the button when in the loading state
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border me-1" role="status" aria-hidden="true"></span>
                                                Loading...
                                            </>
                                        ) : (
                                            'Sign up'
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
