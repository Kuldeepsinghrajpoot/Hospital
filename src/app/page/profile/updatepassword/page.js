import React from 'react'
import Updatepassword from './updatepassword'
const Update = () => {
  return (
    <div><Updatepassword/></div>
  )
}

export default Update
export async function generateMetadata() {
    return {
        title: 'Update password',
        deScription: 'Register'
    }
}