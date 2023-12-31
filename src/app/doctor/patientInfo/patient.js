'use client'
import React from 'react'
import {useRouter} from 'next/navigation'
const Patient = ({data}) => {
const router = useRouter();
// router.refresh();
    return (
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <div className="layout-page">
              <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="card">
                    <h5 className="card-header">Patient Information</h5>
                    <div className="card-body">
                      <div className="table-responsive text-nowrap">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Patient Name</th>
                              <th>Phone</th>
                              <th>Doctor</th>
                              <th>Age</th>
                              <th>Gender</th>
                              <th>Appointment Date</th>
                              <th>Address</th>
                            </tr>
                          </thead>
                          <tbody>
    
                            {data.map((e) => {
                              const { Name, Doctor, AppointmentDate, Phone,Age,Gender,Address } = e;
                              const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                              const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', options);
                              return (
                                <tr key={e._id}>
                                  <td>{Name}</td>
                                  <td>{Phone}</td>
                                  <td>{Doctor}</td>
                                  <td>{Age}</td>
                                  <td>{Gender}</td>
                                  <td>{standardDate}</td>
                                  <td>{Address}</td>
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Patient