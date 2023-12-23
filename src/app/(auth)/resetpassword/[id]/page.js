'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Link from 'next/link'
const Reset = ({ params }) => {
    const [password, setpassword] = useState("")
    // const [currentPassword, setcurrentPassword] = useState(false);
    // const [confirmPassword, setconfirmPassword] = useState(false);
    // const [newPassword, setnewPassword] = useState(false);
    const searchParams = useSearchParams()
    const Signature = searchParams.get('signature');
    // const slashpassword = (e) => {
    // console.log("value of e-->"+e);
    //     if (e === "confirmPassword") {
    //         setconfirmPassword(!confirmPassword)
    //     } else if (e === "newPassword") {
    //         setnewPassword(!newPassword)
    //     } else if (e === "currentPassword") {
    //         setcurrentPassword(!currentPassword)
    //     }
    // }
    const initialize = {
        email: params.id,
        token: Signature,
        password: "",
        confirmPassword: '',
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialize,
        validationSchema: Yup.object({
            confirmPassword: Yup.string().required('Please Enter current password'),
            password: Yup
                .string()
                .required('Please Enter password')
            // .matches(
            //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
            ,
            confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: async (values) => {
            console.log(values);
            const res = await fetch("/api/reset-password", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(
                    values
                ),
            });

            if (!res.ok) {
                toast.error('invalid token', {
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
                toast.success('Successful loged in', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                route.refresh()
            }
        }
    })
    return (
        <div>
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner py-4">
                        {/* <!-- Reset Password --> */}
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
                                        <span className="app-brand-text demo text-body fw-bold ms-1">Vuexy</span>
                                    </a>
                                </div>
                                {/* <!-- /Logo --> */}<div className="alert alert-danger">
                                    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
                                </div>
                                <h4 className="mb-1 pt-2">Reset Password 🔒</h4>
                                <p className="mb-4">for <span className="fw-bold">john.doe@email.com</span></p>
                                <form id="formAuthentication" onClick={handleSubmit}>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">New Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                name="password"
                                                value={values.password}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                className="form-control"
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmPassword}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                            <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                        </div>
                                    </div>
                                    <button type='submit' className="btn btn-primary d-grid w-100 mb-3">Set new password</button>
                                    <div className="text-center">
                                        <Link href="/login">
                                            <i className="ti ti-chevron-left scaleX-n1-rtl"></i>
                                            Back to login
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- /Reset Password --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset;
