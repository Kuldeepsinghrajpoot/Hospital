
import React from 'react';
import Patient from './patient'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const GetData = async () => {
  getServerSession(authOptions)
  const session = await getServerSession(authOptions)
  const url = process.env.URI;
  try {
      const response = await fetch(`${url}/api/patientInfoForDoctor?id=${session?.user?.name}`, {
          cache: "no-store",
      });
      // setData(response.data);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error);
  }

}
const Page = async() => {
const data = await GetData()

  if (!data) {
    return;
  }
  // console.log(data.Appointment);
  // return;
  return (
    <>
    <Patient data={data}/>
    </>
    
  )
}

export default Page;
