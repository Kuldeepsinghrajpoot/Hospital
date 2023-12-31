import React from 'react';
import ForgotPassword from './forgot'
const Forgot = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
}

export default Forgot;

export async function generateMetadata() {
  return {
    title: "Forgot password",
    deScription: 'Forgot password'
  }
}