import React from 'react';

const form = () => {
    return (
        <>
            <div class="layout-wrapper layout-content-navbar">
                <div class="layout-container">
                    <div class="layout-page">
                        <div class="content-wrapper">
                            {/* <!-- Content --> */}

                            <div class="container-xxl flex-grow-1 container-p-y">
                                <div class="row mb-4">
                                    {/* <!-- Browser Default --> */}
                                    <div class="col-md mb-4 mb-md-0">
                                        <div class="card">
                                            <h5 class="card-header">Browser Default</h5>
                                            <div class="card-body">
                                                <form class="browser-default-validation">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-default-name">Name</label>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="basic-default-name"
                                                            placeholder="John Doe"
                                                            required
                                                        />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-default-email">Email</label>
                                                        <input
                                                            type="email"
                                                            id="basic-default-email"
                                                            class="form-control"
                                                            placeholder="john.doe"
                                                            required
                                                        />
                                                    </div>
                                                    <div class="mb-3 form-password-toggle">
                                                        <label class="form-label" for="basic-default-password">Password</label>
                                                        <div class="input-group input-group-merge">
                                                            <input
                                                                type="password"
                                                                id="basic-default-password"
                                                                class="form-control"
                                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                                aria-describedby="basic-default-password3"
                                                                required
                                                            />
                                                            <span class="input-group-text cursor-pointer" id="basic-default-password3"
                                                            ><i class="ti ti-eye-off"></i></span>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-default-country">Country</label>
                                                        <select class="form-select" id="basic-default-country" required>
                                                            <option value="">Select Country</option>
                                                            <option value="usa">USA</option>
                                                            <option value="uk">UK</option>
                                                            <option value="france">France</option>
                                                            <option value="australia">Australia</option>
                                                            <option value="spain">Spain</option>
                                                        </select>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-default-dob">DOB</label>
                                                        <input
                                                            type="text"
                                                            class="form-control flatpickr-validation"
                                                            id="basic-default-dob"
                                                            required
                                                        />
                                                    </div>
                                                 
                                                    <div class="mb-3">
                                                        <label class="d-block form-label">Gender</label>
                                                        <div class="form-check mb-2">
                                                            <input
                                                                type="radio"
                                                                id="basic-default-radio-male"
                                                                name="basic-default-radio"
                                                                class="form-check-input"
                                                                required
                                                            />
                                                            <label class="form-check-label" for="basic-default-radio-male">Male</label>
                                                        </div>
                                                        <div class="form-check">
                                                            <input
                                                                type="radio"
                                                                id="basic-default-radio-female"
                                                                name="basic-default-radio"
                                                                class="form-check-input"
                                                                required
                                                            />
                                                            <label class="form-check-label" for="basic-default-radio-female">Female</label>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <label class="form-label" for="basic-default-bio">Problem</label>
                                                        <textarea
                                                            class="form-control"
                                                            id="basic-default-bio"
                                                            name="basic-default-bio"
                                                            rows="3"
                                                            required
                                                        ></textarea>
                                                    </div>
                                               
                                                    <div class="mb-3">
                                                        <label class="switch switch-primary">
                                                            <input type="checkbox" class="switch-input" required />
                                                            <span class="switch-toggle-slider">
                                                                <span class="switch-on"></span>
                                                                <span class="switch-off"></span>
                                                            </span>
                                                            <span class="switch-label">Send me related emails</span>
                                                        </label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <button type="submit" class="btn btn-primary">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default form;
