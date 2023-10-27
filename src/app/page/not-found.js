/* eslint-disable @next/next/no-img-element */
import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className=" text-center    mt-10">
      <div className="misc-wrapper">
        <h2 className="mb-1 mt-4">Page Not Found :(</h2>
        <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
        <a href="index.html" className="btn btn-primary mb-4">Back to home</a>
        <div className="mt-4 flex  justify-center items-center">
          <img
            src="./img/illustrations/page-misc-error.png"
            alt="page-misc-error"
            width="225"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    {/* <div className="container-fluid misc-bg-wrapper">
      <img
        src="./bg-shape-image-light.png"
        alt="page-misc-error"
        data-app-light-img="./bg-shape-image-light.png"
        data-app-dark-img="./bg-shape-image-dark.png"
      />
    </div> */}
    </>
  );
}

export default NotFound;
