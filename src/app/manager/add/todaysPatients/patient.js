'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Remove from './remove'
import { useSearchParams, useRouter } from 'next/navigation'
import moment from 'moment-timezone'
const Patient = ({ data }) => {
  const searchParams = useSearchParams()
  console.log(searchParams.toString());
  const queryValue = searchParams.get('q');
  const router = useRouter()
  // Empty dependency array ensures the effect runs only once

  const search = (data) => {
    if (queryValue) {
      const stringQueryValue = queryValue.toString();

      return data.filter((item) =>
        item.AppointmentId.toString().includes(stringQueryValue) || item.Name.toString().toLowerCase().includes(stringQueryValue)
      );
    } else {
      return data;
    }
  }
  const standardDate = new Date();
  const originalDate = moment.tz(standardDate, "Asia/Kolkata");
  // const originalDate = moment.utc(appointmentDate);
  const formattedDates = originalDate.format("MMMM Do YYYY");
  if (!data) {
    return;
  }
  return (
    <div className="layout-wrapper layout-content-navbar ">
      <div className="layout-container ">
        <div className="layout-page">
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card">
                <div className="card-header flex justify-between ">
                  <h5>

                  Patient  of  [{formattedDates}]
                  </h5>
                  <button type="button" className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded " data-bs-toggle="modal" data-bs-target="#editUser">
                    Add Patient
                  </button>
                </div>
                
                <div className="card-body">
                  <div className="table-responsive text-nowrap">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>ID</th>
                          <th>Patient Name</th>
                          <th>Phone</th>
                          <th>Doctor</th>
                          <th>Age</th>
                          <th>Gender</th>
                          
                          <th>Print</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {search(data).length === 0 ? (
                          <div className='text-center border-none  '>Record not Available</div>
                        ) : (

                          search(data).map((e, i) => {
                            const { Name, Doctor, AppointmentDate, Phone, Age, Gender, AppointmentId } = e;

                            return (
                              <tr key={e._id}>
                                <td>{i + 1}</td>
                                <td>{AppointmentId}</td>
                                <td>{Name}</td>
                                <td>{Phone}</td>
                                <td>{Doctor}</td>
                                <td>{Age}</td>
                                <td>{Gender}</td>
                              


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
}

export default Patient