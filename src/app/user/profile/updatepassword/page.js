'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useSession} from 'next-auth/react'
import { toast } from 'react-toastify';
import Link from 'next/link'
const UpdateData = () => {
    const {data:session}=useSession();
    // console.log('user session -->',session?.user?.id);
    const [currentPassword, setcurrentPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);
    const [newPassword, setnewPassword] = useState(false);
    const slashpassword = (e) => {
        // console.log("value of e-->"+e);
        if (e === "confirmPassword") {
            setconfirmPassword(!confirmPassword)
        } else if (e === "newPassword") {
            setnewPassword(!newPassword)
        } else if (e === "currentPassword") {
            setcurrentPassword(!currentPassword)
        }
    }
    const initialize = {
        currentPassword: '',
        newPassword: "",
        confirmPassword: '',
        userId:session?.user?.id
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialize,
        validationSchema: Yup.object({
            currentPassword: Yup.string().required('Please Enter current password'),
            newPassword: Yup
                .string()
                .required('Please Enter New password')
            // .matches(
            //   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
            //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            // ),
            ,
            confirmPassword: Yup.string().required().oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        }),
        onSubmit: async (values) => {
            
            const res = await fetch("/api/updatepassword", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (!res.ok) {
                toast.error(' Please enter right Email and password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // route.replace('/login')
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
                // route.replace('/user')
            }
        }
    })
    return (
        <>
            < div>   <div className="layout-wrapper layout-content-navbar ">
                    <div className="layout-container">
                        <div className="layout-page">
                            <div className="content-wrapper">
                                {/* <!-- Content --> */}
                                <div className="container-xxl flex-grow-1 container-p-y">
                                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Account</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="nav nav-pills flex-column flex-md-row mb-4">
                                                <li className="nav-item">
                                                    <Link className="nav-link " href="/user/profile"
                                                    ><i className="ti-xs ti ti-users me-1"></i> Account</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <div className="nav-link active  cursor-pointer" ><i className="ti-xs ti ti-lock me-1"></i> Security</div>
                                                </li>
                                            </ul>
                                            <div className="card mb-4">
                                                <h5 className="card-header">Change Password</h5>
                                                <div className="card-body">
                                                    <form id="formAccountSettings" onSubmit={handleSubmit}>
                                                    {/* <input type="text" name='userId'  value={session?.user?.id} /> */}
                                                        <div className="row">
                                                            <div className="mb-3 col-md-6 form-password-toggle">
                                                                <label className="form-label" htmlFor="currentPassword">Current Password</label>
                                                                <div className="input-group input-group-merge">
                                                                    <input
                                                                        className={`w-full  px-3 py-2 form-control ${errors.currentPassword && touched.currentPassword
                                                                            ? "border border-danger"
                                                                            : ""
                                                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.currentPassword && touched.currentPassword
                                                                                ? "focus: border-red-500"
                                                                                : ""
                                                                            }`}
                                                                        type={currentPassword ? 'text' : 'password'}

                                                                        name="currentPassword"
                                                                        id="currentPassword"
                                                                        value={values.currentPassword}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                                    />
                                                                    <span className="input-group-text cursor-pointer" onClick={() => slashpassword('currentPassword')}><i className={currentPassword ? "ti ti-eye" : "ti ti-eye-off"}></i></span>
                                                                </div>
                                                                {errors.currentPassword && touched.currentPassword ? (
                                                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                                        {errors.currentPassword}
                                                                    </span>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="mb-3 col-md-6 form-password-toggle">
                                                                <label className="form-label" htmlFor="newPassword">New Password</label>
                                                                <div className="input-group input-group-merge">
                                                                    <input
                                                                        className={`w-full  px-3 py-2 form-control ${errors.newPassword && touched.newPassword
                                                                            ? "border border-danger"
                                                                            : ""
                                                                            } border border-gray-300 rounded-md focus:outline-none  ${errors.newPassword && touched.newPassword
                                                                                ? "focus: border-red-500"
                                                                                : ""
                                                                            }`}
                                                                        type={newPassword ? 'text' : 'password'}
                                                                        id="newPassword"
                                                                        name="newPassword"
                                                                        value={values.newPassword}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                                    />
                                                                    <span className="input-group-text cursor-pointer" onClick={() => slashpassword('newPassword')}><i className={newPassword ? "ti ti-eye" : "ti ti-eye-off"}></i></span>
                                                                </div>
                                                                {errors.newPassword && touched.newPassword ? (
                                                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                                        {errors.newPassword}
                                                                    </span>
                                                                ) : null}
                                                            </div>
                                                            <div className="mb-3 col-md-6 form-password-toggle">
                                                                <label className="form-label" htmlFor="confirmPassword">Confirm New Password</label>
                                                                <div className="input-group input-group-merge">
                                                                    <input
                                                                        className={`w-full  px-3 py-2 form-control ${errors.confirmPassword && touched.confirmPassword
                                                                            ? "border border-danger"
                                                                            : ""
                                                                            } border border-[#7367F0] rounded-md focus:outline-none  ${errors.confirmPassword && touched.confirmPassword
                                                                                ? "focus: border-red-500"
                                                                                : "border border-[#7367F0]"
                                                                            }`}
                                                                        type={confirmPassword ? 'text' : 'password'}
                                                                        name="confirmPassword"
                                                                        id="confirmPassword"
                                                                        value={values.confirmPassword}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                                    />
                                                                    <span className="input-group-text cursor-pointer" onClick={() => slashpassword('confirmPassword')}><i className={confirmPassword ? "ti ti-eye" : "ti ti-eye-off"}></i></span><br />
                                                                </div>
                                                                {errors.confirmPassword && touched.confirmPassword ? (
                                                                    <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                                                        {errors.confirmPassword}
                                                                    </span>
                                                                ) : null}
                                                            </div>
                                                            <div className="col-12 mb-4">
                                                                <h6>Password Requirements:</h6>
                                                                <ul className="ps-3 mb-0">
                                                                    <li className="mb-1">Minimum 8 characters long - the more, the better</li>
                                                                    <li className="mb-1">At least one lowercase character</li>
                                                                    <li>At least one number, symbol, or whitespace character</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                
                                                                <button type='submit' className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">Save changes</button>

                                                                <button type="reset" className="btn btn-label-secondary">Cancel</button>
                                                            </div>
                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <h5 className="card-header">Delete Account</h5>
                                                <div className="card-body">
                                                    <div className="mb-3 col-12">
                                                        <div className="alert alert-warning">
                                                            <h6 className="alert-heading fw-bold mb-1">Are you sure you want to delete your account?</h6>
                                                            <p className="mb-0">Once you delete your account, there is no going back. Please be certain.</p>
                                                        </div>
                                                    </div>
                                                    <form id="formAccountDeactivation" >
                                                        <div className="form-check mb-3">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                name="accountActivation"
                                                                id="accountActivation"
                                                            />
                                                            <label className="form-check-label" htmlFor="accountActivation">I confirm my account deactivation</label>
                                                        </div>
                                                        <button type="submit" className="btn btn-danger deactivate-account">Deactivate Account</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
                <div className="layout-overlay layout-menu-toggle"></div>
                <div className="drag-target"></div>
            </div>
            {/* </div> */}
        </>
    )
}

export default UpdateData;
