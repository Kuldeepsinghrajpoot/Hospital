"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import Img from 'next/image'

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup'


export default function LoginForm() {
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
      setLoading(true); // Set loading to true when the form is submitted

      try {
        const email = values.Email;
        const password = values.password
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });


        if (res.ok) {
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
          route.push('/login')
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
        route.refresh()
        // route.replace('/user')


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
            {/* <!-- Login --> */}
            <div className="card">
              <div className="card-body">
                {/* <!-- Logo --> */}
                <div className="app-brand justify-content-center mb-4 mt-2">
                  <Link href="/" className="app-brand-link gap-2">
                    <span className="app-brand-logo ">
                      <Img src="/img/favicon/favicon.ico" width={50} height={50} alt="Logo" />
                    </span>
                    <span className="app-brand-text demo text-body fw-bold ms-1">Uday</span>
                  </Link>
                </div>
                {/* <!-- /Logo --> */}
                <h4 className="mb-1 pt-2">Welcome to uday clinic! 👋</h4>
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
                    <button
                      className="btn btn-primary  w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
                      type="submit"
                      disabled={loading} // Disable the button when in the loading state
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border me-1" role="status" aria-hidden="true"></span>
                          Loading...
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