
import React from 'react';
import axios from 'axios'
const todoItems = async () => {
  const response = await axios.get('http://localhost:3000/api/mongodb', {
    catch: "no-store"
  });
  const data = response.data.patientDetails;
  return data;
}
const useInformation = async () => {
  const patientDetails = await todoItems();
  // console.log(patientDetails);
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
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Problem</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientDetails.map((e) => {
                            const { FirstName, LastName, Email, ContactNumber, DOB, Gender, Address, Problem } = e;                 
                            // const inputDate = new Date(DOB);
                            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                            const standardDate = new Date(DOB).toLocaleDateString('en-US', options);
                            
                            return (
                              <tr key={e._id}>
                                <td>{FirstName}</td>
                                <td>{LastName}</td>
                                <td>{Email}</td>
                                <td>{ContactNumber}</td>
                                {/* <td>{day+"-"+month+"-"+year}</td> */}
                                <td>{standardDate}</td>
                                <td>{Gender}</td>
                                <td>{Address}</td>
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

export default useInformation;
