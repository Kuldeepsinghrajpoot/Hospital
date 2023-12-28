'use client'

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Link from 'next/link'
import Img from 'next/image'
const Reset = ({ params }) => {
    const [password, setpassword] = useState(false)
    const [confirmPassword, setconfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams()
    const Signature = searchParams.get('signature');
    const slashpassword = (e) => {
        // console.log("value of e-->" + e);
        if (e === "confirmPassword") {
            setconfirmPassword(!confirmPassword)
        } else if (e === 'password') {
            setpassword(!password)
        }
    }
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
            // )
            ,
            confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match")
        }),
        onSubmit: async (values) => {
            console.log("values",values);
            setLoading(true); // Set loading to true when the form is submitted
            try {
                const res = await fetch("/api/reset-password", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(
                        values
                    ),
                });

                if (res.ok) {
                    toast.success('Successful Updated password', {
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
                    route.refresh();
                } else {
                    toast.error(' Invalid token', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            } catch (error) {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
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
                                    <Link href="/" className="app-brand-link gap-2">
                                        <span className="app-brand-logo ">
                                            <Img src="/img/favicon/favicon.ico" width={50} height={50} alt="Logo" />
                                        </span>
                                        <span className="app-brand-text demo text-body fw-bold ms-1">Uday Clinic</span>
                                    </Link>
                                </div>
                                {/* <!-- /Logo --> */}
                                <h4 className="mb-1 pt-2">Reset Password 🔒</h4>
                                {/* <p className="mb-4">for <span className="fw-bold">john.doe@email.com</span></p> */}
                                <form id="formAuthentication" onClick={handleSubmit}>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="password">New Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type={password ? "text" : "password"}
                                                id="password"
                                                className={errors.password && touched.password
                                                    ? "form-control  border-danger"
                                                    : "form-control"
                                                  }
                                                name="password"
                                                value={values.password}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            <span className={errors.password && touched.password ?"input-group-text cursor-pointer border-danger ":"input-group-text cursor-pointer"} onClick={() => slashpassword('password')}><i className={password ? "ti ti-eye" : "ti ti-eye-off"}></i></span>
                                        </div>
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                                        <div className="input-group input-group-merge">
                                            <input
                                                type={confirmPassword ? "text" : "password"}
                                                id="confirm-password"
                                                className={errors.confirmPassword && touched.confirmPassword
                                                    ? "form-control  border-danger"
                                                    : "form-control"
                                                  }
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.confirmPassword}
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password"
                                            />
                                            <span className={errors.confirmPassword && touched.confirmPassword ?"input-group-text cursor-pointer border-danger":"input-group-text cursor-pointer"} onClick={() => slashpassword('confirmPassword')}><i className={confirmPassword ? "ti ti-eye" : "ti ti-eye-off"}></i></span>
                                        </div>
                                    </div>
                                    <button
                                        className=" mb-2 flex justify-center items-center w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                                        type="submit"
                                        disabled={loading} // Disable the button when in the loading state
                                    >
                                        {loading ? (
                                            <>
                                                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                    </path>
                                                </svg>                         
                                                 Loading...
                                            </>
                                        ) : (
                                            'Set new password'
                                        )}
                                    </button>
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