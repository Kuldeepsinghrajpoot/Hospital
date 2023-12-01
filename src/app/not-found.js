/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import Img from 'next/image'
import Link from 'next/link';
const NotFound = () => {
  const imageLoader = () => {
    return `/img/illustrations/page-misc-error.png`
  }
  return (
    <>
      <div className=" text-center    mt-10">
      <div className="misc-wrapper">
        <h2 className="mb-1 mt-4">Page Not Found :(</h2>
        <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
       
        <Link href="/" className="bg-[#7367F0] hover:bg-[#7b70fa] text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4">Back to home</Link>
        <div className="mt-4 flex  justify-center items-center">
          <Img
            src="/img/illustrations/page-misc-error.png"
            alt="page-error"
            width={225}
            height={100}
            className="img-fluid"
            loader={imageLoader}
            loading = 'lazy'
           
          />
        </div>
      </div>
    </div>
 
    </>
  );
}

export default NotFound;
