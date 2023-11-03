'use client'

import { useFormik } from 'formik';
import * as Yup from 'yup'
import React from 'react';
import { toast } from 'react-toastify';


const Appointment = () => {

  const initialize = {
    Name: '',
    Appointment: '',
    Doctor: '',
    Status: '',
    Problem: '',
    Date: '',
    Phone: '',
    Email: '',
    DOB: '',
    Gender: '',
    UserId:'654146d2a5099fdb817a2084'
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
      Date: Yup.string(),


    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values)
      try {
        const response = await fetch("http://localhost:3000/patient/api", {
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

          // resetForm();
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
    <div>
      <div className="col-xxl relative top-20  d-flex justify-center ">
        <div className="card mb-4">
          <div className="card-header  ">
            <h5 className="mb-0 text-center">Appointment</h5>

          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-fullname">Full Name</label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-default-fullname2" className="input-group-text"><i className="ti ti-user"></i></span>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.Name}
                    name='Name'
                    className="form-control"
                    id="basic-icon-default-fullname"
                    placeholder="John Doe"
                    aria-label="John Doe"
                    aria-describedby="basic-icon-default-fullname2"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-company">Doctor</label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-default-company2" className="input-group-text"><i className="fa-solid fa-user-doctor " style={{ background: 'white' }}></i></span>
                  <input
                    onChange={handleChange}
                    value={values.Doctor}
                    name='Doctor'
                    type="text"
                    id="basic-icon-default-company"
                    className="form-control"
                    placeholder="Doctor name"
                    aria-label="Dcotor name."
                    aria-describedby="basic-icon-default-company2"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-email">Email</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-text"><i className="ti ti-mail"></i></span>
                  <input
                    onChange={handleChange}
                    value={values.Email}
                    type="text"
                    id="basic-icon-default-email"
                    className="form-control"
                    placeholder="john.doe"
                    aria-label="john.doe"
                    name='Email'
                    aria-describedby="basic-icon-default-email2"
                  />
                  <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                </div>
                <div className="form-text">You can use letters, numbers & periods</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-phone">Phone No</label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-default-phone2" className="input-group-text"><i className="ti ti-phone"></i></span>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={values.Phone}
                    id="basic-icon-default-phone"
                    className="form-control phone-mask"
                    placeholder="658 799 8941"
                    aria-label="658 799 8941"
                    name='Phone'
                    aria-describedby="basic-icon-default-phone2"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-message">Problem</label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-default-message2" className="input-group-text"><i className="ti ti-message-dots"></i></span>
                  <textarea
                    name='Problem'
                    value={values.Problem}
                    onChange={handleChange}
                    id="basic-icon-default-message"
                    className="form-control"
                    placeholder="Hi, Do you have any problem?"
                    aria-label="Hi, Do you have any probelm?"
                    aria-describedby="basic-icon-default-message2"
                  ></textarea>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="basic-icon-default-message">Date</label>
                <div className="input-group input-group-merge">
                  <span id="basic-icon-default-message2" className="input-group-text"><i className="ti ti-message-dots"></i></span>
                  <input 
                  type='date'
                    name='Date'
                    value={values.Date}
                    onChange={handleChange}
                    id="basic-icon-default-message"
                    className="form-control"
                    placeholder="Hi, Do you have any problem?"
                    aria-label="Hi, Do you have any probelm?"
                    aria-describedby="basic-icon-default-message2"
                  ></input>

                  {/* <input type="text" value={values.UserId} onChange={handleChange} name='UserId'  /> */}
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
