import React from 'react';

// import {usePathname} from 'next/navigation'
import Patient from './patient'
const patientDetails = async () => {
  // const router = usePathname();

  const url = process.env.URI;
  try {
      const response = await fetch(`${url}/api/todayspatients`, {
          cache: "no-store",
      });
      // setData(response.data);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error);
  }

}
const page = async()=>{
  const data = await patientDetails();
  if (!data) {
    return;
  }
  return (
    <>
    <Patient data={data.Appointment}></Patient>
    </>
  );
}
export default page;
export async function generateMetadata() {
  return {
      title: 'Patients',
      deScription: 'Register'
  }
}