'use client'
import React, { useContext } from 'react';
import context from '../context/createContext';

const Dashboard = () => {

  const { role,Name } = useContext(context)

  return (
    <div>
   {/* <Index/> */}
   {[role,Name ]}
    </div>
  );
}

export default Dashboard;
