import Link from 'next/link';
import React from 'react';

const page = () => {
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
              <form id="formAuthentication" className="mb-3" action="auth-reset-password-basic.html" method="POST">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoFocus
                  />
                </div>
                <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
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

export default page;
