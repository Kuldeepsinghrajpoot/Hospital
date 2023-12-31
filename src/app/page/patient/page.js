import React from 'react';
import Remove from './remove'
// import {usePathname} from 'next/navigation'
import Patient from './old'
const patientDetails = async () => {
  // const router = usePathname();

  const url = process.env.URI;
  try {
      const response = await fetch(`${url}/api/appointmentsForAdmin`, {
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
    <Patient query={data}></Patient>
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