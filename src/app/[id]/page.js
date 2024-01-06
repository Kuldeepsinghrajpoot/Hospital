import PrintAppoitment from './invoice';
import Notfound from '../not-found'
import React from 'react';
const getTopicById = async (id) => {
  const url = process.env.URI;
  try {
    const res = await fetch(`${url}/api/printPatient/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log("someting went wrong [id]" + error);
  }
};
export default async function Invoice({ params }) {
  const { id } = params;
  try {
    
    
    const { printAppointment } = await getTopicById(id);
    const { Name, Doctor, Phone, Age, Gender, Address,AppointmentId,_id,
      createdAt
       } = printAppointment;
    // console.log(Name);
    return <PrintAppoitment name={Name} doctor={Doctor} appointmentDate={createdAt} phone={Phone} age={Age} gender={Gender} address={Address} appointmentId={
      AppointmentId
      } id={_id}/>;
  } catch (error) {
    
    return<>
    <Notfound/>
    </>;
  }
}
export function generateMetadata() {
  return {
    title: 'Print',
    deScription: 'print appointments'
  }
}