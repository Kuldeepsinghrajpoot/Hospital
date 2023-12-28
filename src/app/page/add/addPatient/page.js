import axios from 'axios'
import React from 'react'
import Doctor from './addPatients'
const fetchData = async () => {
  const url = process.env.URI;
  try {
    const response = await fetch(`${url}/api/doctor`, {
      cache: "no-store",
    });
    const fetchdata = response.json();
    return fetchdata;
  } catch (error) {
    throw new Error("someting went wrong in add patients", error)
  }
}
const fatchDoctor = async () => {
  const data = await fetchData();

  if (!data) {
    return null;
  }
  return (
    <Doctor data={data.doctor} />
  )
}

export default fatchDoctor