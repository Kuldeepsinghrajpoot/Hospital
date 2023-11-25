import React from 'react';
import axios from 'axios'
const todoItems = async () => {
  const response = await axios.get('http://localhost:3000/api/userinfo', {
    catch: "no-store"
  });
  const data = response.data.Appointment;
  return data;
}
const Notauthorise = async () => {
  const patientDetails = await todoItems();
  return (
    <>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Problem</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientDetails.map((e) => {
                             const { Name, Email, ContactNumber, Gender, Problem,DOB } = e;                 
                             const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                             const standardDate = new Date(DOB).toLocaleDateString('en-US', options);
                            return (
                              <tr key={e._id}>
                                <td>{Name}</td>
                                
                                <td>{Email}</td>
                                <td>{ContactNumber}</td>
                                <td>{standardDate}</td>
                                <td>{Gender}</td>
                              
                                <td>{Problem}</td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
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
    
    </>
  );
}

export default Notauthorise;