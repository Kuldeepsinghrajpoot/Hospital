'use client'

import React from 'react';
import Remove from './remove'
import Link from 'next/link'
const Page = ({data}) => {

// console.log(data.filter(item=>item.AppointmentId.includes('K')));
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
                        
                        <th>ID</th>
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Doctor</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Appointment Date</th>
                        <th>Address</th>
                        <th>Print</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>

                      {data.length === 0 ? (
                                            <div className='text-center border-none '>Record not found</div>
                                        ) : (
                      data.map((e) => {
                        const { Name, Doctor, AppointmentDate, Phone,Age,Gender,Address,AppointmentId } = e;
                        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                        const standardDate = new Date(AppointmentDate).toLocaleDateString('en-US', options);
                        return (
                          <tr key={e._id}>
                            
                            <th>{AppointmentId}</th>
                            <td>{Name}</td>
                            <td>{Phone}</td>
                            <td>{Doctor}</td>
                            <td>{Age}</td>
                            <td>{Gender}</td>
                            <td>{standardDate}</td>
                            <td>{Address}</td>
                            <td><Link href={`/${e._id}`} className='flex justify-center  text-black' target='_blank'><i class="ti ti-printer"></i></Link></td>
                            <td className=' text-center'><Remove id={e._id}></Remove></td>
                            
                          </tr>
                        )
                      }))}
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
