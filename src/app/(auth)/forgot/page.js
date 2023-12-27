'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Link from 'next/link'
const Forgot = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: '',
  }
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      email: Yup.string().required("First Name is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true); // Set loading to true when the form is submitted

      try {
        const res = await fetch("/api/mail", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!res.ok) {
          throw new Error("Invalid Email id");
        }

        toast.success('Password reset link sent to your email account', {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
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
    },
  });
  return (
    <div>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-4">
            {/* <!-- Forgot Password --> */}
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
                    <span className="app-brand-text demo text-body fw-bold">Vuexy</span>
                  </a>
                </div>
                {/* <!-- /Logo --> */}
                <h4 className="mb-1 pt-2">Forgot Password? 🔒</h4>
                <p className="mb-4">Enter your email and we{"'"}ll send you instructions to reset your password</p>
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      className={errors.email ? "form-control border border-danger" : 'form-control '}
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email"
                      autoFocus
                    />
                  </div>
                  <button
                      className="btn btn-primary  w-100 bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full"
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
                        'Send Reset Link'
                      )}
                    </button>
                  {/* <button class="btn btn-primary  w-100" type="button" disabled>
                    <span class="spinner-border me-1" role="status" aria-hidden="true"></span>
                    Loading...
                  </button> */}

                </form>
                <div className="text-center">


                  <Link href="./login" className="d-flex align-items-center justify-content-center">
                    <i className="ti ti-chevron-left scaleX-n1-rtl"></i>
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- /Forgot Password --> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Forgot;