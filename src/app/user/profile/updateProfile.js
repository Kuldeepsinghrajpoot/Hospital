'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link'
import Img from 'next/image'
const UpdateData = ({ firstName, lastName, email, contactNumber, dOB, gender, address, problem }) => {


  const [FirstName, setFirstName] = useState(firstName);
  const [LastName, setLastName] = useState(lastName);
  const [Email, setEmail] = useState(email);
  const [ContactNumber, setContactNumber] = useState(contactNumber);
  const [DOB, setDOB] = useState(dOB);
  const [Gender, setGender] = useState(gender);
  const [Address, setAddress] = useState(address);
  const [Problem, setProblem] = useState(problem);
  // loading

  const [loading, setloading] = useState(false);


  const handleSubmit = async (e) => {
    setloading(true);
    const url = process.env.API_URI;
    e.preventDefault();

    try {
      const res = await fetch(`/api/individualUserInformation`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ FirstName, LastName, Email, ContactNumber, DOB, Address, Gender }),
      });


      if (!res.ok) {
        toast.error(' Failed to update profile', {
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
        toast.success('Successful updated Profile', {
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
      // router.refresh();
      // router.push("/user/profile");
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false)
    }
  };
  return (
    <>

      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <div class="layout-page">
            <div className="content-wrapper">
              {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> Account</h4>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-4">
                      <li className="nav-item">
                        <div className="nav-link active cursor-pointer"
                        ><i className="ti-xs ti ti-users me-1"></i> Account</div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" href="/doctor/profile/updatepassword"><i className="ti-xs ti ti-lock me-1"></i> Security</Link>
                      </li>
                    </ul>
                    <div class="card mb-4">
                      <h5 class="card-header">Profile Details</h5>
                      {/* <!-- Account --> */}
                      <div class="card-body">
                        <div class="d-flex align-items-start align-items-sm-center gap-4">
                          <Img
                            src="/img/avatars/14.png"
                            alt="user-avatar"
                            class="d-block w-px-100 h-px-100 rounded"
                            id="uploadedAvatar"
                            width={100}
                            height={100}
                          />
                          <div class="button-wrapper">
                            <label for="upload" class="btn btn-primary me-2 mb-3" tabindex="0">
                              <span class="d-none d-sm-block">Upload new photo</span>
                              <i class="ti ti-upload d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="upload"
                                class="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button type="button" class="btn btn-label-secondary account-image-reset mb-3">
                              <i class="ti ti-refresh-dot d-block d-sm-none"></i>
                              <span class="d-none d-sm-block">Reset</span>
                            </button>

                            <div class="text-muted">Allowed JPG, GIF or PNG. Max size of 800K</div>
                          </div>
                        </div>
                      </div>
                      <hr class="my-0" />
                      <div class="card-body">
                        <form id="formAccountSettings" onSubmit={handleSubmit} >


                          <div className="row" >


                            <div className="mb-3 col-md-6" >
                              <label htmlFor="firstName" className="form-label">FirstName</label>
                              <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={FirstName}
                                onChange={(e) => setFirstName(e.target.value)}

                                autoFocus
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="lastName" className="form-label">Last Name</label>
                              <input className="form-control" type="text" name="lastName" id="lastName" value={LastName}
                                onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="email" className="form-label">E-mail</label>
                              <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="john.doe@example.com"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="DOB" className="form-label">Age</label>
                              <input
                                className="form-control"
                                type="number"
                                id="DOB"
                                name="DOB"
                                value={DOB}
                                onChange={(e) => setDOB(e.target.value)}
                              // placeholder="dd-mm-yy"
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="state" className="form-label">Gender</label>
                              <input className="form-control" type="text" value={Gender}
                                onChange={(e) => setGender(e.target.value)} id="state" name="state" placeholder="Gender" />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text">In (+91)</span>
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  className="form-control"
                                  placeholder="202 555 0111"
                                  value={ContactNumber}
                                  onChange={(e) => setContactNumber(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="mb-3 col-md-6">
                              <label htmlFor="address" className="form-label">Address</label>
                              <textarea type="text" value={Address}
                                onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" name="address" placeholder="Address" />
                            </div>


                          </div>

                          <div className="flex justify-start">
                            <button
                              className=" flex justify-center items-center  bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded  me-2"
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
                                'Save Changes'
                              )}
                            </button>

                            <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                          </div>
                        </form>
                      </div>
                      {/* <!-- /Account --> */}
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
    </>



  )
}

export default UpdateData;
