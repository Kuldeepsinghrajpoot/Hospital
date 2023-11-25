'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const Addpatient = () => {

    const initialize = {
        Name: '',
        Appointment: '',
        Doctor: '',
        Status: '',
        Problem: '',
        AppointmentDate: '',
        Phone: '',
        Email: '',
        DOB: '',
        Gender: '',
        UserId: '',
     
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialize,
        validationSchema: Yup.object({

            Name: Yup.string(),
            Phone: Yup.string(),
            DOB: Yup.string(),
            Gender: Yup.string(),
            Doctor: Yup.string(),
            Problem: Yup.string(),
            AppointmentDate: Yup.string(),


        }),

        onSubmit: async (values, { resetForm }) => {
            console.log(values)
            try {
                const response = await fetch("/user/api", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Handle success, e.g., show a success message or redirect
                    // console.log('Registration successful');
                    toast.success('Registraion Successful', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    resetForm();
                } else {
                    // Handle errors, e.g., show an error message
                    console.error('Registration failed', response);
                }
            } catch (error) {
                // Handle network or other errors
                console.error('An error occurred', error);
            }
        }

    })
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4 mb-4">
                <div className="card">
                    <div className="card-body text-center">
                        <i className="mb-3 ti ti-user ti-lg"></i>
                        <h5>Add Patient</h5>

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editUser">
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="editUser" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-edit-user">
                    <div className="modal-content p-3 p-md-5">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center mb-4">
                                <h3 className="mb-2">Patient Appointment</h3>
                            </div>
                            <form id="editUserForm" className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <label className="form-label" for="modalEditUsername">First Name</label>
                                    <input
                                        type="text"
                                        id="modalEditUsername"
                                        name="Name"
                                        value={values.Name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="John"
                                    />
                                </div>
                           
                                <div className="col-12">
                                    <label className="form-label" for="modalEditUserName">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="modalEditUserName"
                                        name="DOB"
                                        value={values.DOB}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="john.doe.007"
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUseremail">Email</label>
                                    <input
                                        type="text"
                                        id="modalEditUseremail"
                                        name="Email"
                                        value={values.Email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="example@domain.com"
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="Gender">Gender</label>
                                    <input
                                        type="text"
                                        id="Gender"
                                        name="Gender"
                                        value={values.Gender}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Gender"
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditTaxID">Doctor</label>
                                    <input
                                        type="text"
                                        id="modalEditTaxID"
                                        name="Doctor"
                                        value={values.Doctor}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control modal-edit-tax-id"
                                        placeholder="Doctor name"
                                    />
                                </div>
                                {/* problem */}
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditTaxID">Problem</label>
                                    <textarea
                                        type="text"
                                        id="modalEditTaxID"
                                        name="Problem"
                                        value={values.Problem}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control modal-edit-tax-id"
                                        placeholder="Problem"
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditTaxID">Appointment Date</label>
                                    <input
                                        type="date"
                                        id="modalEditTaxID"
                                        name="AppointmentDate"
                                        value={values.AppointmentDate}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        className="form-control modal-edit-tax-id"
                                        placeholder="Doctor name"
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label" for="modalEditUserPhone">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text">IN (+91)</span>
                                        <input
                                            type="text"
                                            id="modalEditUserPhone"
                                            name="Phone"
                                            onBlur={handleBlur}
                                        onChange={handleChange}
                                            value={values.Phone}
                                            className="form-control phone-number-mask"
                                            placeholder="202 555 0111"
                                        />
                                    </div>
                                </div>
                                
                                
                                
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1">Submit</button>
                                    <button
                                        type="reset"
                                        className="btn btn-label-secondary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addpatient
