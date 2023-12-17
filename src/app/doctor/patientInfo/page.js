'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await axios.get('/api/patientInfoForDoctor', {
        // You can set additional configurations here
      });
      const data = response.data.Appointment;
      setData(data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error fetching data:', error);
      setLoading(false); // Update loading state in case of error
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (!data) {
    return;
  }
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
};

export default Page;
