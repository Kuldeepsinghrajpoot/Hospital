'use client'
import React, { useState, useEffect } from 'react';
import Update from './updateProfile'
import axios from 'axios';
const Page = () => {

  const [data, setData] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/individualUserInformation', {
      });
      const data = response.data;
      setData(data);

    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };

  useEffect(() => {
    getData();
  }, []);



  return (<>

    {data.map((e) => {
      return (
        <>
          {console.log("Gender->", e.gender)}
          <div key={e._id}><Update firstName={e.name} lastName={e.lastname} email={e.email} contactNumber={e.contactnumber} dOB={e.dob} gender={e.gender} address={e.address}></Update></div>
        </>
      )
    })}


  </>
  )
}

export default Page;
