"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import Img from 'next/image'
import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha';
import YourContext from '../../context/createContext';
export default function LoginForm() {
;
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const [password, setpassword] = useState(false);
  const slashpassword = (e) => {
    // console.log("value of e-->"+e);
    if (e === "password") {
      setpassword(!password)
    }
  }
  const [loading, setLoading] = useState(false);
  const route = useRouter();
  const initialValues = {
    Email: "",
    password: ""
  }

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      Email: Yup.string().required("First Name is required"),
      password: Yup.string().required("Enter valid password ")
    }),

    onSubmit: async (values) => {
      if (!recaptchaValue) {
        toast.error(' Please fill the recaptcha', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Handle the case where reCAPTCHA is not completed
        return;
      }
      setLoading(true); // Set loading to true when the form is submitted
      try {
        const email = values.Email;
        const password = values.password
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
          recaptcha: recaptchaValue,
        });
        if (res.ok) {
          route.replace('page')
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
        } else {
          toast.error(' Please enter vaild credentials', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return;
        }
      } catch (error) {
        toast.error(' Please enter vaild credentials', {
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
          <div className="authentication-inner">
            {/* <!-- Login --> */}
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
                <h4 className="mb-1 pt-2">Welcome to Uday clinic! 👋</h4>
                <p className="mb-4">Please sign-in to your account</p>
                <form id="formAuthentication" className="mb-3" action="index.html" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      className={errors.Email && touched.Email
                        ? "form-control border border-danger"
                        : "form-control"
                      }
                      id="email"
                      name="Email"
                      value={values.Email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email or username"
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">Password</label>
                      <Link href="/forgot">
                        <small>Forgot Password?</small>
                      </Link>
                    </div>
                    <div className={errors.password && touched.password
                      ? "border border-danger input-group input-group-merge "
                      : "input-group input-group-merge "
                    }   >
                      <input
                        type={password ? 'text' : 'password'}
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span className="input-group-text cursor-pointer" onClick={() => slashpassword('password')}><i className={password ? "ti ti-eye" : "ti ti-eye-off"}></i></span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember-me" />
                      <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                    </div>
                  </div>
                  <div className="mb-3">
                  <ReCAPTCHA  className="flex justify-center mb-2" sitekey="6Lfe9T8pAAAAAM8Mu3vv7svYB4t7KksBMbuYPjme" onChange={(value) => setRecaptchaValue(value)} />

                    <button
                      className=" flex justify-center items-center w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                      type="submit"
                      disabled={loading} // Disable the button when in the loading state
                    >
                      {loading ? (
                        <>
                          <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                            </path>
                          </svg>                          Loading...
                        </>
                      ) : (
                        'Login'
                      )}
                    </button>
                    
                  </div>
                </form>
                <p className="text-center">
                  <span>New on our platform?</span>
                  <Link href="/register">
                    <span>Create an account</span>
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
            {/* <!-- /Register --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export function generateMetadata({ params }) {
  return {
    title: 'Login',
    deScription: 'Generated by create next app'
  }
}