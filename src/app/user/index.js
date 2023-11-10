'use client'

import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

// import Chat from './page/chat/index'
export default function Home() {

  const { data: session } = useSession();
  console.log(session?.user?.email);
  const route = usePathname();
  const [divClass, setDivClass] = useState('initial-class');
  const [drop, setdrop] = useState('dropdown-menu');

  function handleClick() {
    setDivClass(divClass === 'initial-class' ? 'transition ease-in-out delay-150  light-style layout-navbar-fixed layout-menu-100vh layout-menu-fixed layout-footer-fixed layout-menu-expanded' : 'initial-class');
  }
  function dropDown(){
    setdrop(drop==='dropdown-menu'?'':'dropdown-menu')
  }

  return (
    <div className={divClass}>
      <div className="layout-wrapper layout-content-navbar absolute">
        <div className="layout-container">
          {/* <!-- Menu --> */}

          <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme  drop-shadow-2xl  md:drop-shadow-0 xl:drop-shadow-sm" >
            <div className="app-brand demo ">
              <Link href="/" className="app-brand-link">
                <span className="app-brand-logo demo">
                  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616"
                    />
                    <path
                      opacity="0.06"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0"
                    />
                  </svg>
                </span>
                <span className="app-brand-text demo menu-text fw-bold text-2xl">{session?.user?.name}Kuldeep </span>
              </Link>
              <div onClick={handleClick} className=" cursor-pointer layout-menu-toggle menu-link text-large ms-auto">
                <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
                <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
              </div>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className=" menu-inner py-1 w-full h-full overflow-y-auto  overflow-x-hidden" id='webkit'>
              {/* <!-- Dashboards --> */}
              {/* active */}


              {/* <!-- Layouts --> */}
              <li className={`menu-item ${route === '/user' ? "active" : ""}`}>

                <Link href="/user" className="menu-link">
                  <div data-i18n="Analytics">Dashboard</div>
                </Link>
              </li>
              {/* <!-- Apps & Pages --> */}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Apps &amp; Pages</span>
              </li>
              <li className={`menu-item ${route === '/user/appointment' ? "active" : ""}`}>

                <Link href="/user/appointment" className="menu-link gap-2">
                  <i className="fa fa-calendar gap-2" aria-hidden="true"></i>
                  <div data-i18n="Modal Examples"> Appointment</div>
                </Link>
              </li>
              <li className={`menu-item ${route === '/user/oldappointment' ? "active" : ""}`}>
                <Link href="/user/oldappointment" className="menu-link gap-2">
                  <i className="fa fa-calendar gap-2" aria-hidden="true"></i>
                  <div data-i18n="Modal Examples">Historical Appointment</div>
                </Link>
              </li>



              <li className={`menu-item ${route === '/user/profile' ? "active" : ""}`}>
                <Link href="/user/profile" className="menu-link gap-2">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <div data-i18n="Modal Examples">profile</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="" className="menu-link gap-2">
                  <i className="fa-solid fa-user-doctor"></i>
                  <div data-i18n="Modal Examples">Doctors</div>
                </Link>
              </li>

              {/* <!-- Components --> */}
            </ul>
          </aside>
          {/* <!-- / Menu --> */}

          {/* <!-- Layout container --> */}
          <div className="layout-page">

            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle  navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <div className="nav-item nav-link px-0 me-xl-4 cursor-pointer" onClick={handleClick} >
                  <i className="ti ti-menu-2 ti-sm"></i>
                </div>
              </div>

              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item navbar-search-wrapper mb-0">
                    <Link className="nav-item nav-link search-toggler d-flex align-items-center px-0" href="">
                      <i className="ti ti-search ti-md me-2"></i>
                      <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                    </Link>
                  </div>
                </div>
                {/* <!-- /Search --> */}

                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* <!-- Language --> */}
                  <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                    <Link className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                      <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li className='mx-2 my-2 py-1 hover:bg-gray-100  rounded-md w-full' >
                        <Link className="dropdown-item" href="" data-language="en">
                          <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                          <span className="align-middle">English</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ Language -->

               <!-- Style Switcher --> */}
                  <li className="nav-item me-2 me-xl-0">
                    <Link className="nav-link style-switcher-toggle hide-arrow" href="">
                      <i className="ti ti-md"></i>
                    </Link>
                  </li>
                  {/* <!--/ Style Switcher -->

               <!-- Quick links  --> */}
                  <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                    <Link
                      className="nav-link dropdown-toggle hide-arrow"
                      href=""
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                      aria-expanded="false"
                    >
                      <i className="ti ti-layout-grid-add ti-md"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end py-0">
                      <div className="dropdown-menu-header border-bottom">
                        <div className="dropdown-header d-flex align-items-center py-3">
                          <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                          <Link
                            href=""
                            className="dropdown-shortcuts-add text-body"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Add shortcuts"
                          ><i className="ti ti-sm ti-apps"></i ></Link>
                        </div>
                      </div>
                      <div className="dropdown-shortcuts-list scrollable-container">
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-calendar fs-4"></i>
                            </span>
                            <Link href="app-calendar.html" className="stretched-link">Calendar</Link>
                            <small className="text-muted mb-0">Appointments</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-file-invoice fs-4"></i>
                            </span>
                            <Link href="app-invoice-list.html" className="stretched-link">Invoice App</Link>
                            <small className="text-muted mb-0">Manage Accounts</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-users fs-4"></i>
                            </span>
                            <Link href="app-user-list.html" className="stretched-link">User App</Link>
                            <small className="text-muted mb-0">Manage Users</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-lock fs-4"></i>
                            </span>
                            <Link href="app-access-roles.html" className="stretched-link">Role Management</Link>
                            <small className="text-muted mb-0">Permission</small>
                          </div>
                        </div>
                        <div className="row row-bordered overflow-visible g-0">
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-chart-bar fs-4"></i>
                            </span>
                            <Link href="index.html" className="stretched-link">Dashboard</Link>
                            <small className="text-muted mb-0">User Profile</small>
                          </div>
                          <div className="dropdown-shortcuts-item col">
                            <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                              <i className="ti ti-settings fs-4"></i>
                            </span>
                            <Link href="pages-account-settings-account.html" className="stretched-link">Setting</Link>
                            <small className="text-muted mb-0">Account Settings</small>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </li>
                  {/* <!-- Quick links -->

               <!-- Notification --> */}

                  {/* <!--/ Notification --> */}

                  {/* <!-- User --> */}
                  <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <button class="nav-link dropdown-toggle hide-arrow" onClick={dropDown} data-bs-toggle="dropdown">
                      <div class="avatar avatar-online">
                        <img src="/img/avatars/1.png" alt class="h-auto rounded-circle" />
                      </div>
                    </button>
                    {/*  dropdown-menu */}
                    <ul class={`${drop} dropdown-menu-end w-56 h-56 bg-white text-start py-1 px-4 -mx-40 absolute shadow-lg`}>
                      <li className='my-2 pt-2'>
                        <a class="dropdown-item" href="pages-account-settings-account.html">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar avatar-online">
                                <img src="/img/avatars/1.png" alt class="h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <span class="fw-semibold d-block">John Doe</span>
                              <small class="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li className='mx-0 my-0 py-0 hover:bg-gray-100 hover:text-indigo-500 rounded-md w-full' >

                        <a class="dropdown-item" href="pages-profile-user.html">
                          <i class="hover:bg-gray-50 my-1 py-1 ti ti-user-check me-2 ti-sm"></i>
                          <span class="align-middle">My Profile</span>
                        </a>
                      </li>
                      <li className='mx-0 my-0 py-0 hover:bg-gray-100 hover:text-indigo-500 rounded-md w-full' >

                        <Link class="dropdown-item" href="">
                          <i class="hover:bg-gray-50 my-1 py-1 ti ti-settings me-2 ti-sm"></i>
                          <span class="align-middle">Settings</span>
                        </Link>
                      </li>




                      <li className='mx-0 my-0 py-0 hover:bg-gray-100 hover:text-indigo-500 rounded-md w-full' >

                        <button class="dropdown-item" onClick={() => signOut()}>
                          <i class=" hover:bg-gray-50 my-1 py-1 ti ti-logout me-2 ti-sm"></i>
                          <span class="align-middle">Log Out</span>
                        </button>
                      </li>
                    </ul>
                  </li>
                  {/* <!--/ User --> */}
                </ul>
              </div>


            </nav>
            {/* <!-- Content wrapper --> */}

          </div>
        </div>
      </div>

    </div>




  )
}
