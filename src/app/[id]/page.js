import PrintAppoitment from './invoice';
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
export default async function EditTopic({ params }) {
  const { id } = params;
  const { printAppointment } = await getTopicById(id);
  const { Name, Doctor, AppointmentDate, Phone, Age, Gender, Address,AppointmentId } = printAppointment;
  // console.log(Name);
  return <PrintAppoitment name={Name} doctor={Doctor} appointmentDate={AppointmentDate} phone={Phone} age={Age} gender={Gender} address={Address} appointmentId={AppointmentId}/>;
}
export function generateMetadata() {
  return {
    title: 'Print',
    deScription: 'print appointments'
  }
}