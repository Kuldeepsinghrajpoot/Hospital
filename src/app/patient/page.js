import React from 'react';

const page = () => {
    return (
        <>
            <div className="container-xxl   object-center container-p-y absolute top-10">
                <h4 className="fw-bold  mb-4"></h4>

                <div className="row d-flex justify-content-center">
                    {/* <!-- Monthly Campaign State --> */}
                    <div className="col-xl-4">
                        <div className="card h-100">
                            <div className="card-header text-center">
                                <div className="">
                                    <h5 className="mb-1">Monthly Campaign State</h5>
                                    <small className="text-muted">8.52k Social Visiters</small>
                                </div>

                            </div>
                            <div className="card-body">
                                <ul className="p-0 m-0">
                                    <li className="mb-4 pb-1 d-flex justify-content-between align-items-center">
                                        <div className="badge bg-label-success rounded p-2"><i className="ti ti-mail ti-sm"></i></div>
                                        <div className="d-flex justify-content-between w-100 flex-wrap">
                                            <h6 className="mb-0 ms-3">Emails</h6>
                                            <div className="d-flex">
                                                <p className="mb-0 fw-semibold">12,346</p>
                                                <p className="ms-3 text-success mb-0">0.3%</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
}

export default page;
