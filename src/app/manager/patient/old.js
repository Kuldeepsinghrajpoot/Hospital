'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Remove from './remove'
import {useSearchParams} from 'next/navigation'
import Table from './table'
const Page = ({query}) => {
  const searchParams = useSearchParams()
  const queryValue = searchParams.get('q');

  const search = (data)=>{
    if (queryValue) {
      const stringQueryValue = queryValue.toString();
  
      return data.filter((item) =>
        item.AppointmentId.toString().includes(stringQueryValue)||item.Name.toString().toLowerCase().includes(stringQueryValue)
      );
    } else {
      return data;
    }
  }
  // search(query.Appointment)
  return (
   <>
   <Table data={search(query.Appointment)}/>
   </>
  );
};

export default Page;
