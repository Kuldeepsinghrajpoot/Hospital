import React from 'react';
import Appointments from "./appointment";
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
    <Appointments data={data.doctor}/>
  )
}

export default fatchDoctor
export const metadata = {
  title: 'Create Appointment',
}