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

  let date = new Date(DOB);
  let standardDate = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear().toString().slice(-2);


  const handleSubmit = async (e) => {
    const url = process.env.API_URI;
    e.preventDefault();

    try {
      const res = await fetch(`/api/individualUserInformation`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ FirstName, LastName, Email, ContactNumber, DOB, Address,Gender }),
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
    }
  };
  return (
    <>
      < div>

        <div className="layout-wrapper layout-content-navbar ">

          <div className="layout-container">
            <div className="layout-page">
            <div class="content-wrapper">
            {/* <!-- Content --> */}

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Account Settings /</span> Account</h4>


                    <div className="row">
                      <div className="col-md-12">
                      <ul class="nav nav-pills flex-column flex-md-row mb-4">
                    <li class="nav-item">
                      <div class="nav-link active cursor-pointer"
                        ><i class="ti-xs ti ti-users me-1"></i> Account</div>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" href="/doctor/profile/updatepassword"><i class="ti-xs ti ti-lock me-1"></i> Security</Link>
                    </li>
                    
                  </ul>
                        <div className="card mb-4">
                          <h5 className="card-header">Profile Details</h5>
                          {/* <!-- Account --> */}
                          <div className="card-body">
                            <div className="d-flex align-items-start align-items-sm-center gap-4">
                              <Img  
                                src="/img/avatars/1.png"
                                alt="user-avatar"
                                className="d-block rounded"
                                height={100}
                                width={100}
                                id="uploadedAvatar"
                              />
                              <div className="button-wrapper">
                                <label htmlFor="upload" className="btn btn-primary me-2 mb-4" tabIndex="0">
                                  <span className="d-none d-sm-block">Upload new photo</span>
                                  <i className="bx bx-upload d-block d-sm-none"></i>
                                  <input
                                    type="file"
                                    id="upload"
                                    className="account-file-input"
                                    hidden
                                    accept="image/png, image/jpeg"
                                  />
                                </label>
                                <button type="button" className="btn btn-outline-secondary account-image-reset mb-4">
                                  <i className="bx bx-reset d-block d-sm-none"></i>
                                  <span className="d-none d-sm-block">Reset</span>
                                </button>

                                <p className="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
                              </div>
                            </div>
                          </div>
                          <hr className="my-0" />
                          <div className="card-body">
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
                                  <label htmlFor="email" className="form-label">Date of birth</label>
                                  <input
                                    className="form-control"
                                    // type="date"
                                    id="email"
                                    name="email"
                                    value={standardDate}
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

                                <div className="mb-3 col-md-6">
                                  <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    name="zipCode"
                                    placeholder="231465"
                                    maxLength="6"
                                  />
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label className="form-label" htmlFor="country">State</label>
                                  <select id="country" className="select2 form-select">
                                    <option value="">Select</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                  </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label htmlFor="language" className="form-label">Language</label>
                                  <select id="language" className="select2 form-select">
                                    <option value="">Select Language</option>
                                    <option value="en">English</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="pt">Portuguese</option>
                                  </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label htmlFor="timeZones" className="form-label">Timezone</label>
                                  <select id="timeZones" className="select2 form-select">
                                    <option value="">Select Timezone</option>
                                    <option value="-12">(GMT-12:00) International Date Line West</option>
                                    <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                    <option value="-10">(GMT-10:00) Hawaii</option>
                                    <option value="-9">(GMT-09:00) Alaska</option>
                                    <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                                    <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                                    <option value="-7">(GMT-07:00) Arizona</option>
                                    <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                    <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Central America</option>
                                    <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                                    <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                    <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                                    <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                                  </select>
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label htmlFor="currency" className="form-label">Currency</label>
                                  <select id="currency" className="select2 form-select">
                                    <option value="">Select Currency</option>
                                    <option value="usd">USD</option>
                                    <option value="euro">Euro</option>
                                    <option value="pound">Pound</option>
                                    <option value="bitcoin">Bitcoin</option>
                                  </select>
                                </div>
                              </div>

                              <div className="mt-2">

                              <button type='submit' className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">Save Change</button>

                                <button type="submit" className="btn btn-primary me-2">Save changes</button>
                                <button type="reset" className="btn btn-outline-secondary">Cancel</button>
                              </div>
                            </form>
                          </div>
                          {/* <!-- /Account --> */}
                        </div>
                        <div className="card">
                          <h5 className="card-header">Delete Account</h5>
                          <div className="card-body">
                            <div className="mb-3 col-12 mb-0">
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
