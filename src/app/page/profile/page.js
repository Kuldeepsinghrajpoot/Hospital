
import React from 'react';
import Update from './updateProfile'
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const GetData = async () => {
  getServerSession(authOptions)
  const session = await getServerSession(authOptions)
  const url = process.env.URI;
  try {
      const response = await fetch(`${url}/api/individualUserInformation?id=${session?.user?.id}`, {
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
  return (<>
    {data.Appointment.map((e) => {
      return (
        <>
          <div key={e._id}><Update firstName={e.name} lastName={e.lastname} email={e.email} contactNumber={e.contactnumber} dOB={e.Age} gender={e.gender} address={e.address}></Update></div>
        </>
      )
    })}


  </>
  )
}

export default Page;
export async function generateMetadata() {
  return {
      title: 'Profile',
      deScription: 'Profile'
  }
}