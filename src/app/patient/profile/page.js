import React from 'react';

const Profile = () => {
  return (
    <div className=' d-flex justify-center relative top-20 b-red-700'>
      <div className=" ">
             
              <div className="card mb-4  bg-red-700" >
                <h5 className="card-header text-center">Account</h5>
                <form className="card-body ">
                  <h6>1. Account Details</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="multicol-username">Username</label>
                      <input type="text" id="multicol-username" className="form-control" placeholder="john.doe" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="multicol-email">Email</label>
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
                        <label className="form-label" htmlFor="multicol-password">Password</label>
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            id="multicol-password"
                            className="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="multicol-password2"
                          />
                          <span className="input-group-text cursor-pointer" id="multicol-password2"
                            ><i className="ti ti-eye-off"></i></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-password-toggle">
                        <label className="form-label" htmlFor="multicol-confirm-password">Confirm Password</label>
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
                      <label className="form-label" htmlFor="multicol-first-name">First Name</label>
                      <input type="text" id="multicol-first-name" className="form-control" placeholder="John" />
                    </div>
                  
                    <div className="col-md-6 select2-primary">
                      <label className="form-label" htmlFor="multicol-language">Language</label>
                      <select id="multicol-language" className="select2 form-select" >
                        <option value="en" selected>English</option>
                        <option value="fr" selected>French</option>
                        <option value="de">German</option>
                        <option value="pt">Portuguese</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="multicol-birthdate">Birth Date</label>
                      <input
                        type="text"
                        id="multicol-birthdate"
                        className="form-control dob-picker"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="multicol-phone">Phone No</label>
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

             

              {/* <!-- Form Alignment --> */}
              </div>
    </div>
  );
}

export default Profile;
