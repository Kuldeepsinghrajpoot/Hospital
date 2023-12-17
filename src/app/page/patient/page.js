import React from 'react';
import Old from './old'
const page = () => {
  return (
    <div>
      <Old></Old>
    </div>
  );
}

export default page;
export async function generateMetadata() {
  return {
      title: 'Patients',
      deScription: 'Register'
  }
}