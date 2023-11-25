'use client'

import Link from 'next/link'
import { useState } from 'react';
import { usePathname,useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

// import Chat from './page/chat/index'
export default function Home() {

  const { data: session } = useSession();
  
  // console.log(session?.user?.email);
  const route = usePathname();
  const router = useRouter();
  const [divClass, setDivClass] = useState('initial-class');
  const [drop, setdrop] = useState('dropdown-menu');

  
   if(session?.user?.role==='doctor'){
    route.replace("/doctor");
    return;
  }
  else if(session?.user?.role==='Admin'){
    route.replace("/page");
    return;
  }
  function handleClick() {
    setDivClass(divClass === 'initial-class' ? 'transition ease-in-out delay-150  light-style layout-navbar-fixed layout-menu-100vh layout-menu-fixed layout-footer-fixed layout-menu-expanded' : 'initial-class');
  }
  function dropDown() {
    setdrop(drop === 'dropdown-menu' ? '' : 'dropdown-menu')
  }

  return (
    <div className={divClass}>
    <div className="absolute layout-content-navbar">
      <div className="">
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
              <span className="app-brand-text demo menu-text fw-bold text-2xl">{session?.user?.name}</span>
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
            <li className={`${route == '/user' ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/user" className="menu-link">
              <i className="menu-icon tf-icons ti ti-smart-home"></i>

                <div data-i18n="Analytics">Dashboard</div>
              </Link>


            </li>

            {/* <!-- Apps & Pages --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Apps &amp; Pages</span>
            </li>
            <li className={`${route == '/user/appointment' ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/user/appointment" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>
                <div data-i18n="Email">Appointment</div>
              </Link>
            </li>
            <li className={`${route == '/user/oldappointment' ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/user/oldappointment" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>
                <div data-i18n="Email">Historical Appointment</div>
              </Link>
            </li>
            <li className={`${route ==='/user/profile' || route=== "/user/profile/updatepassword" ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/user/profile" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>

                <div data-i18n="Chat">Profile</div>
              </Link>
            </li>
            <li className={`${route ==='/user/Doctor mx-1' || route=== "/user/profile/updatepassword" ? 'menu-item active' : 'menu-item'} `}>
              <Link href="" className="menu-link">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-stethoscope my-1 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><path d="M8 15a6 6 0 1 0 12 0v-3" /><path d="M11 3v2" /><path d="M6 3v2" /><path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>

                <div data-i18n="Chat">Profile</div>
              </Link>
            </li>



            {/* <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-forms"></i>
                <div data-i18n="Wizard Examples">Wizard Examples</div>
              </Link>
              <ul className="menu-sub">
                <li className="menu-item">
                  <Link href="wizard-ex-checkout.html" className="menu-link">
                    <div data-i18n="Checkout">Checkout</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="wizard-ex-property-listing.html" className="menu-link">
                    <div data-i18n="Property Listing">Property Listing</div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="wizard-ex-create-deal.html" className="menu-link">
                    <div data-i18n="Create Deal">Create Deal</div>
                  </Link>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item">
              <Link href="modal-examples.html" className="menu-link">
                <i className="menu-icon tf-icons ti ti-square"></i>
                <div data-i18n="Modal Examples">Modal Examples</div>
              </Link>
            </li> */}

            {/* <!-- Components --> */}
            {/* <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Components</span>
            </li> */}
            {/* <!-- Cards --> */}
            {/* <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-id"></i>
                <div data-i18n="Cards">Cards</div>
                <div className="badge bg-label-primary rounded-pill ms-auto">6</div>
              </Link>

            </li> */}
            {/* <!-- User interface --> */}
            {/* <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-color-swatch"></i>
                <div data-i18n="User interface">User interface</div>
              </Link>

            </li> */}

            {/* <!-- Extended components --> */}
            {/* <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-components"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </Link>

            </li> */}

            {/* <!-- Icons --> */}
            {/* <li className="menu-item">
              <Link href="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons ti ti-brand-tabler"></i>
                <div data-i18n="Icons">Icons</div>
              </Link>
            </li> */}

          </ul>

        </aside>
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

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
                {/* <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
                  <Link className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                    <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="" data-language="en">
                        <i className="fi fi-us fis rounded-circle me-1 fs-3"></i>
                        <span className="align-middle">English</span>
                      </Link>
                    </li>
                  </ul>
                </li> */}
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
                      <div className="row row-bordered overflow-visible g-0">
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-help fs-4"></i>
                          </span>
                          <Link href="pages-help-center-landing.html" className="stretched-link">Help Center</Link>
                          <small className="text-muted mb-0">FAQs & Articles</small>
                        </div>
                        <div className="dropdown-shortcuts-item col">
                          <span className="dropdown-shortcuts-icon rounded-circle mb-2">
                            <i className="ti ti-square fs-4"></i>
                          </span>
                          <Link href="modal-examples.html" className="stretched-link">Modals</Link>
                          <small className="text-muted mb-0">Useful Popups</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <!-- Quick links -->

             <!-- Notification --> */}

                {/* <!--/ Notification --> */}

                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <button className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <img src="/img/avatars/1.png" alt="img" className="h-auto rounded-circle" />
                    </div>
                  </button>
                  {/*  dropdown-menu */}
                  <ul className={`dropdown-menu  dropdown-menu-end  bg-white text-start  absolute shadow-lg`}>
                    <li className=''>
                      <a className="dropdown-item" href="pages-account-settings-account.html">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <img src="/img/avatars/1.png" alt="img" className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">{session?.user?.name}</span>
                            <small className="text-muted">{session?.user?.role}</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li >

                      <Link className="dropdown-item" href="/user/profile">
                        <i className="ti ti-user-check me-2 ti-sm"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>

                      <Link className="dropdown-item" href="/user/profile/updatepassword">
                        <i className=" ti ti-settings me-2 ti-sm"></i>
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>



                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li>

                      <button className="dropdown-item" onClick={() => signOut()}>
                        <i className=" ti ti-logout me-2 ti-sm"></i>
                        <span className="align-middle">Log Out</span>
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
