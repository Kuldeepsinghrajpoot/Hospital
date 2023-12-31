// components/YourContextProvider.js
'use client'
import React, { useState,useEffect } from 'react';
import createContext from './createContext';
import { useSession } from 'next-auth/react';
import axios from 'axios'
const YourContextProvider = ({ children }) => {
  const { data: session } = useSession();
  const role = session?.user?.role
  const Name = session?.user?.name
  const [id, setId] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/indexValue');
        setId(response.data.Appointment);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Fetch data initially
    fetchData();
    // // Fetch data every second using setInterval
    // const intervalId = setInterval(fetchData, 1000);
    // // Clear the interval on component unmount
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <createContext.Provider value={{ role, Name,id }}>
      {children}
    </createContext.Provider>
  );
};

export default YourContextProvider;
