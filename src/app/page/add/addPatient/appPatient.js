'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';

const Addpatient = () => {



  const date = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const standardDate = new Date().toLocaleDateString('en-US', date);

  const initialize = {
    Name: '',
    AppointmentId: 0,
    Doctor: '',
    Status: '',
    Problem: '',
    AppointmentDate: standardDate,
    Phone: '',
    Email: '',
    Age: '',
    Gender: '',
    UserId: '',
    Address: '',
  };

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialize,
    validationSchema: Yup.object({
      Name: Yup.string(),
      Phone: Yup.string(),
      Age: Yup.string(),
      Gender: Yup.string(),
      Doctor: Yup.string(),
      Problem: Yup.string(),
      AppointmentDate: Yup.string(),
      Address: Yup.string(),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const response = await fetch("/user/api", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          toast.success('Registration Successful', {
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
          console.error('Registration failed', response);
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    },
  });
  const options = Array.from({ length: 100 }, (_, index) => (index + 1).toString());
  return (
    <>
      <div className="col-12 col-sm-6 col-lg-4 mb-4">
        <div className="card">
          <div className="card-body text-center">
            <i className="mb-3 ti ti-user ti-lg"></i>
            <h5>Add Patient</h5>
            <button type="button" className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " data-bs-toggle="modal" data-bs-target="#editUser">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="modal fade" id="editUser" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-simple modal-edit-user">
          <div className="modal-content p-3 p-md-5">
            <div className="modal-body">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="text-center mb-4">
                <h3 className="mb-2">Patient Appointment</h3>
              </div>
              <form id="editUserForm" className="row g-3" onSubmit={handleSubmit}>
                <div className="col-12">
                  <label className="form-label" htmlFor="modalEditUsername">Full Name</label>
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
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserName">Age</label>
                  <select
                    className="form-select"
                    id="exampleFormControlSelect1"
                    aria-label="Default select example"
                    name='Age'
                    onChange={handleChange}
                    value={values.Age}>
                    <option value="Select">Select</option>
                    {options.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div> 
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserName">Gender</label>
                  <select
                    className="form-select"
                    id="exampleFormControlSelect1"
                    aria-label="Default select example"
                    name='Gender'
                    onChange={handleChange}
                    value={values.Gender}>
                    <option value="Select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditTaxID">Doctor</label>
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
                <div className="col-12 col-md-6">
                  <label className="form-label" htmlFor="modalEditUserPhone">Phone Number</label>
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
                <div className="col-12">
                  <label className="form-label" htmlFor="modalEditUsername">Address</label>
                  <textarea
                    type="text"
                    id="modalEditUsername"
                    name="Address"
                    value={values.Address}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Address......"
                  />
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
