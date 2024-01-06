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
          <div class="content-wrapper">
            {/* <!-- Content --> */}

            <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-semibold mb-4">Roles List</h4>

              <p class="mb-4">
                A role provided access to predefined menus and features so that depending on <br />
                assigned role an administrator can have access to what user needs.
              </p>
              {/* <!-- Role cards --> */}
              <div class="row g-4">
                <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-normal mb-2">Total {data.admin+1} users</h6>
                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Vinnie Mostowy"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/5.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Allen Rieske"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/12.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Julee Rossignol"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/6.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kaith D'souza"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/3.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="John Doe"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/1.png" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex justify-content-between align-items-end mt-1">
                        <div class="role-heading">
                          <h4 class="mb-1">Administrator</h4>
                      
                        </div>
                        <a href="javascript:void(0);" class="text-muted"><i class="ti ti-copy ti-md"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-normal mb-2">Total {data.Manager} users</h6>
                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Jimmy Ressula"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/4.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="John Doe"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/1.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kristi Lawker"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/2.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kaith D'souza"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/3.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Danny Paul"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/7.png" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex justify-content-between align-items-end mt-1">
                        <div class="role-heading">
                          <h4 class="mb-1">Manager</h4>
                     
                        </div>
                        <a href="javascript:void(0);" class="text-muted"><i class="ti ti-copy ti-md"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-normal mb-2">Total {data.doctor} users</h6>
                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Andrew Tye"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/6.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Rishi Swaat"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/9.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Rossie Kim"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/12.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kim Merchent"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/10.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Sam D'souza"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/13.png" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex justify-content-between align-items-end mt-1">
                        <div class="role-heading">
                          <h4 class="mb-1">Doctors</h4>
                         
                        </div>
                        <a href="javascript:void(0);" class="text-muted"><i class="ti ti-copy ti-md"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-normal mb-2">Total {data.patient} users</h6>
                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kim Karlos"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/3.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Katy Turner"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/9.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Peter Adward"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/4.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kaith D'souza"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/10.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="John Parker"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/11.png" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex justify-content-between align-items-end mt-1">
                        <div class="role-heading">
                          <h4 class="mb-1">Patient</h4>
                         
                        </div>
                        <a href="javascript:void(0);" class="text-muted"><i class="ti ti-copy ti-md"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <h6 class="fw-normal mb-2">Total {data.User} users</h6>
                        <ul class="list-unstyled d-flex align-items-center avatar-group mb-0">
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Kim Merchent"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/10.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Sam D'souza"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/13.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Nurvi Karlos"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/5.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Andrew Tye"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/8.png" alt="Avatar" />
                          </li>
                          <li
                            data-bs-toggle="tooltip"
                            data-popup="tooltip-custom"
                            data-bs-placement="top"
                            title="Rossie Kim"
                            class="avatar avatar-sm pull-up"
                          >
                            <Img width={100} height={100} class="rounded-circle" src="/img/avatars/9.png" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                      <div class="d-flex justify-content-between align-items-end mt-1">
                        <div class="role-heading">
                          <h4 class="mb-1"> User</h4>
                        
                        </div>
                        <a href="javascript:void(0);" class="text-muted"><i class="ti ti-copy ti-md"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* add role */}
                  {/* <Manager/> */}
              </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
          </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Dashboard;
