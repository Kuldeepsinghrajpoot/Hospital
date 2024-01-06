'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import moment from 'moment-timezone'

const Addpatient = ({ data }) => {
const router = useRouter();
    const [loading, setloading] = useState(false);
    const standardDate = new Date();
    const originalDate = moment.tz(standardDate, "Asia/Kolkata");
    // const originalDate = moment.utc(appointmentDate);
    const formattedDates = originalDate.format("MMMM Do YYYY");

    const initialize = {
        Name: '',
        AppointmentId: 0,
        Doctor: '',
        Status: '',
        Problem: '',
        AppointmentDate: formattedDates,
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
            Name: Yup.string().required("Name is required"),
            Phone: Yup.string().matches(/^\d{10}$/, "Phone must be a 10-digit number"),
            Age: Yup.string().required("Age is requied"),
            Gender: Yup.string().required("Gender is requied"),
            Doctor: Yup.string().required("Doctor is requied"),
            AppointmentDate: Yup.string(),
            Address: Yup.string().required("Address is requied"),
        }),
        onSubmit: async (values, { resetForm }) => {
            // console.log(values);
            setloading(true)
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
                    toast.error('Registration failed', {
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
            } catch (error) {
                console.error('An error occurred', error);
            } finally {
                setloading(false)
            }
            router.refresh()
        },
    });
    if (!data) {
        return null;
    }
    const options = Array.from({ length: 100 }, (_, index) => (index + 1).toString());
    return (
        <>
          
            <div className="modal fade absolute" id="editUser" tabIndex="-1" aria-hidden="true">
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
                                    <input style={{textTransform: "capitalize"}}
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
                                    <label className="form-label" htmlFor="modalEditUserName">Doctor</label>
                                    <select
                                        className="form-select"
                                        id="exampleFormControlSelect1"
                                        aria-label="Default select example"
                                        name='Doctor'
                                        onChange={handleChange}
                                        value={values.Doctor}>
                                        <option value="Select">Select</option>
                                        {data.map((value, index) => (
                                            <option key={index} value={[value.name,value.lastname].join(' ')}>
                                                {value.name}{" "}{value.lastname}
                                            </option>
                                        ))}
                                    </select>
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
                                            className={errors.Phone && touched.Phone
                                                ? "form-control border border-danger  phone-number-mask"
                                                : "form-control"
                                            }
                                            placeholder="202 555 0111"
                                        />
                                    </div>
                                    {errors.Phone && touched.Phone ? (
                                        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                            {errors.Phone}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="modalEditUsername">Address</label>
                                    <textarea style={{textTransform: "capitalize"}}
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
                                <div className="col-12 px-3 gap-4 text-center flex justify-start">
                                    <button
                                        className=" flex justify-center items-center  bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "
                                        type="submit"
                                        disabled={loading} // Disable the button when in the loading state
                                    >
                                        {loading ? (
                                            <>
                                                <svg width="20" height="20" fill="currentColor" class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                    </path>
                                                </svg>                          Processing...
                                            </>
                                        ) : (
                                            'Submit'
                                        )}
                                    </button>                                    <button
                                        type="reset"
                                        className="btn btn-label-secondary"
                                        data-bs-dismiss="modal"
                                        aria-label="Close">
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

