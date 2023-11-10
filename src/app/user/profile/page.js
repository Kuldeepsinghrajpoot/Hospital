import React from 'react';
import axios from 'axios'
const getData = async () => {
  const response = await axios.get('http://localhost:3000/user/api', {
    catch: "no-store"
  });
  const data = response.data.Appointment;
  return data;
}

const page = async () => {

  const data = await getData();
  return (
    <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
      <div className="layout-page">
        <div className="content-wrapper">
          <div className="container-xxl flex-grow-1 container-p-y">
            {/* <!-- Multi Column with Form Separator --> */}
            <div className="card mb-4">
              <h5 className="card-header">user Information</h5>
              <form className="card-body">
                <h6>1. Account Details</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-username">Username</label>
                    <input type="text" id="multicol-username" className="form-control" placeholder="john.doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-email">Email</label>
                    <div className="input-group input-group-merge">
                      <input
                        type="text"
                        id="multicol-email"
                        className="form-control"
                        placeholder="john.doe"
                        aria-label="john.doe"
                        aria-describedby="multicol-email2"
                      />
                      <span className="input-group-text" id="multicol-email2">@example.com</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-password-toggle">
                      <label className="form-label" for="multicol-password">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="multicol-password"
                          className="form-control"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="multicol-password2"
                        />
                        <span className="input-group-text cursor-pointer" id="multicol-password2"><i className="ti ti-eye-off"></i></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-password-toggle">
                      <label className="form-label" for="multicol-confirm-password">Confirm Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="multicol-confirm-password"
                          className="form-control"
                          placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                          aria-describedby="multicol-confirm-password2"
                        />
                        <span className="input-group-text cursor-pointer" id="multicol-confirm-password2"
                          ><i className="ti ti-eye-off"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-4 mx-n4" />
                <h6>2. Personal Info</h6>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-first-name">First Name</label>
                    <input type="text" id="multicol-first-name" className="form-control" placeholder="John" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-last-name">Last Name</label>
                    <input type="text" id="multicol-last-name" className="form-control" placeholder="Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-country">Country</label>
                    <select id="multicol-country" className="select2 form-select" data-allow-clear="true">
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
                  <div className="col-md-6 select2-primary">
                    <label className="form-label" for="multicol-language">Language</label>
                    <select id="multicol-language" className="select2 form-select" multiple>
                      <option value="en" selected>English</option>
                      <option value="fr" selected>French</option>
                      <option value="de">German</option>
                      <option value="pt">Portuguese</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-birthdate">Birth Date</label>
                    <input
                      type="text"
                      id="multicol-birthdate"
                      className="form-control dob-picker"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label" for="multicol-phone">Phone No</label>
                    <input
                      type="text"
                      id="multicol-phone"
                      className="form-control phone-mask"
                      placeholder="658 799 8941"
                      aria-label="658 799 8941"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                  <button type="reset" className="btn btn-label-secondary">Cancel</button>
                </div>
              </form>
            </div>
            </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
    </div>

    <div className="layout-overlay layout-menu-toggle"></div>
    <div className="drag-target"></div>
  </div>
  );
}

export default page;
