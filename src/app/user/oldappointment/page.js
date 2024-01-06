import React from 'react';
import Appointment from './appointment'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
const Getdata = async () => {
  const session= await getServerSession(authOptions)
  try {
    
    const url = process.env.URI;
    const response = await fetch(`${url}/api/appointmentsDetalis?id=${session?.user?.id}`, {
      "cache": "no-cache"
    })
    const data = response.json();
    return data;
  } catch (error) {
    error.console("someting went wrong in old appointment page")
  }

}
const page = async() => {
  const data = await Getdata();

  // return
  return (
    <div>
      <Appointment data={data.Appointment}/>
    </div>
  );
}

export default page;
export const metadata = {
  title: 'Your Appointment',
}