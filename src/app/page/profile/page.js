import React from 'react';

const Profile = () => {
  return (
    <div>
<div class="card mb-4">
                <h5 class="card-header">User Information</h5>
                <form class="card-body">
                  <h6>1. Account Details</h6>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-username">Username</label>
                      <input type="text" id="multicol-username" class="form-control" placeholder="john.doe" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-email">Email</label>
                      <div class="input-group input-group-merge">
                        <input
                          type="text"
                          id="multicol-email"
                          class="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="multicol-email2"
                        />
                        <span class="input-group-text" id="multicol-email2">@example.com</span>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-password-toggle">
                        <label class="form-label" for="multicol-password">Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="multicol-password"
                            class="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="multicol-password2"
                          />
                          <span class="input-group-text cursor-pointer" id="multicol-password2"
                            ><i class="ti ti-eye-off"></i></span>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-password-toggle">
                        <label class="form-label" for="multicol-confirm-password">Confirm Password</label>
                        <div class="input-group input-group-merge">
                          <input
                            type="password"
                            id="multicol-confirm-password"
                            class="form-control"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="multicol-confirm-password2"
                          />
                          <span class="input-group-text cursor-pointer" id="multicol-confirm-password2"><i class="ti ti-eye-off"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4 mx-n4" />
                  <h6>2. Personal Info</h6>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-first-name">First Name</label>
                      <input type="text" id="multicol-first-name" class="form-control" placeholder="John" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-last-name">Last Name</label>
                      <input type="text" id="multicol-last-name" class="form-control" placeholder="Doe" />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-country">Country</label>
                      <select id="multicol-country" class="select2 form-select" data-allow-clear="true">
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
                    <div class="col-md-6 select2-primary">
                      <label class="form-label" for="multicol-language">Language</label>
                      <select id="multicol-language" class="select2 form-select" multiple>
                        <option value="en" selected>English</option>
                        <option value="fr" selected>French</option>
                        <option value="de">German</option>
                        <option value="pt">Portuguese</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-birthdate">Birth Date</label>
                      <input
                        type="text"
                        id="multicol-birthdate"
                        class="form-control dob-picker"
                        placeholder="YYYY-MM-DD"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="multicol-phone">Phone No</label>
                      <input
                        type="text"
                        id="multicol-phone"
                        class="form-control phone-mask"
                        placeholder="658 799 8941"
                        aria-label="658 799 8941"
                      />
                    </div>
                  </div>
                  <div class="pt-4">
                    <button type="submit" class="btn btn-primary me-sm-3 me-1">Submit</button>
                    <button type="reset" class="btn btn-label-secondary">Cancel</button>
                  </div>
                </form>
              </div>
    </div>
  );
}

export default Profile;
