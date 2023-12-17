import axios from 'axios'
import React from 'react'
import Doctor from './fatchDoctor'
const fetchData = async () => {
  const url = process.env.URI;
  try {
    const response = await fetch(`${url}/api/doctor`, {
      cache: "no-store",
    });
    const fetchdata = response.json();
    return fetchdata;
  } catch (error) {
    throw new Error("someting went wrong", error)
  }
}
const fatchDoctor = async () => {
  const data = await fetchData();
  return (

    // <div>{data.doctor.map((e,key)=>{
    //   return(
    //     <div key={key}>
    //       {e.name}
    //     </div>
    //   )
    // })}</div>
    <Doctor data={data.doctor}/>
  )
}

export default fatchDoctor