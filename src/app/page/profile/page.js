import React from 'react'
import Profile from './profile'
const page = () => {
  return (
    <div><Profile/></div>
  )
}

export default page
export async function generateMetadata() {
  return {
      title: 'Profile',
      deScription: 'Register'
  }
}