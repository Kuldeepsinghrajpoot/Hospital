"use client";
import React from "react";
import Img from "next/image";
import Link from "next/link";

const Dashboard = ({ data }) => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              {/* <!-- Content --> */}

              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-semibold mb-4">Roles List</h4>

                <p className="mb-4">
                  A role provided access to predefined menus and features so
                  that depending on <br />
                  assigned role an administrator can have access to what user
                  needs.
                </p>
                {/* <!-- Role cards --> */}
                <div className="row g-4">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">
                            Total {data.admin + 1} users
                          </h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Vinnie Mostowy"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/5.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Allen Rieske"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Julee Rossignol"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Doe"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/1.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Administrator</h4>
                            <Link href={"/page"}
                                                         >
                              <span>Visit page</span>
                            </Link>
                          </div>
                          <a href="" className="text-muted">
                            <i className="ti ti-copy ti-md"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">
                            Total {data.doctor} Users
                          </h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Jimmy Ressula"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/4.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Doe"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/1.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kristi Lawker"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/2.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Danny Paul"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/7.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Doctor</h4>
                            <Link href={"page/doctor"}
                                                         >
                              <span>Visit page</span>
                            </Link>
                          </div>
                          <a href="" className="text-muted">
                            <i className="ti ti-copy ti-md"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">
                            Total {data.user} Users
                          </h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Andrew Tye"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/6.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Rishi Swaat"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Rossie Kim"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/12.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Merchent"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Sam D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/13.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Users</h4>
                            <Link href={"page/user"}
                                                         >
                              <span>Visit page</span>
                            </Link>
                          </div>
                          <a href="" className="text-muted">
                            <i className="ti ti-copy ti-md"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h6 className="fw-normal mb-2">
                            Total {data.patient} Users
                          </h6>
                          <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kim Karlos"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/3.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Katy Turner"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/9.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Peter Adward"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/4.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="Kaith D'souza"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/10.png"
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-bs-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-bs-placement="top"
                              title="John Parker"
                              className="avatar avatar-sm pull-up"
                            >
                              <Img
                                width={100}
                                height={100}
                                className="rounded-circle"
                                src="/img/avatars/11.png"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                        </div>
                        <div className="d-flex justify-content-between align-items-end mt-1">
                          <div className="role-heading">
                            <h4 className="mb-1">Patients</h4>
                            <Link href={"page/patient"}
                                                         >
                              <span>Visit page</span>
                            </Link>
                          </div>
                          <a href="" className="text-muted">
                            <i className="ti ti-copy ti-md"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
