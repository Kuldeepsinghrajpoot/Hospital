'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import Remove from './remove'
import {useSearchParams} from 'next/navigation'
const Page = () => {
  const searchParams = useSearchParams()
  const queryValue = searchParams.get('q');

  const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/todayspatients');
          setData(response.data.Appointment);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      // Fetch data initially
      fetchData();
      // Fetch data every second using setInterval
      const intervalId = setInterval(fetchData, 1000);
      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once
  
    const search = (data)=>{
      if (queryValue) {
        const stringQueryValue = queryValue.toString();
    
        return data.filter((item) =>
          item.AppointmentId.toString().includes(stringQueryValue)||item.Name.toString().toLowerCase().includes(stringQueryValue)
        );
      } else {
        return data;
      }
    }

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
                          <th>SN</th>
                          <th>ID</th>
                          <th>Patient Name</th>
                          <th>Phone</th>
                          <th>Doctor</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>Appointment Date</th>
                          <th>Print</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      {search(data).length === 0 ? (
                                            <div className='text-center border-none  '>Record not Available</div>
                                        ) : (
                        
                        search(data).map((e,i) => {
                          const { Name, Doctor, AppointmentDate, Phone,Age,Gender,AppointmentId } = e;
                          const options = { month: '2-digit', day: '2-digit' ,year: 'numeric', };
                          const standardDate = new Date(AppointmentDate).toLocaleDateString('en-IN', options);
                          return (
                            <tr key={e._id}>
                              <td>{i+1}</td>
                              <td>{AppointmentId}</td>
                              <td>{Name}</td>
                              <td>{Phone}</td>
                              <td>{Doctor}</td>
                              <td>{Age}</td>
                              <td>{Gender}</td>
                              <td>{standardDate}</td>

                             
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
