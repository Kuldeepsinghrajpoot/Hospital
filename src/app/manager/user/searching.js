'use client'
import React from 'react'
import {useSearchParams} from 'next/navigation'
const Searching = ({data}) => {
const searchParams = useSearchParams();
const queryValue = searchParams.get("q");
const search = (data)=>{
    if (queryValue) {
      const stringQueryValue = queryValue.toString();
  
      return data.filter((item) =>
      item.contactnumber.toString().includes(stringQueryValue)||item.name.toString().toLowerCase().includes(stringQueryValue)||item.email.toString().toLowerCase().includes(stringQueryValue)
      );
    } else {
      return data;
    }
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
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          
                          
                          {data.length === 0 ? (
                            <div className='text-center border-none '>Record not found</div>
                        ) : (
                          search(data).map((e,i) => {
                            const { name, lastname, email, contactnumber, Age, gender, address,role } = e;                 
                            // const inputDate = new Date(DOB);
                           
                            return (
                              <tr key={e._id}>
                                <td>{i+1}</td>
                                <td>{name}</td>
                                <td>{lastname}</td>
                                <td>{email}</td>
                                <td>{contactnumber}</td>
                                {/* <td>{day+"-"+month+"-"+year}</td> */}
                                <td>{Age}</td>
                                <td>{gender}</td>
                                <td>{address}</td>
                            
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
  )
}

export default Searching