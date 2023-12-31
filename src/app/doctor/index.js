'use client'
import Link from 'next/link'
import { useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import context from '../context/createContext';

import Img from 'next/image'
export default function Home() {
 const{role,Name} =useContext(context)


  const route = usePathname();
  const router = useRouter();
  const [divClass, setDivClass] = useState('initial-class');
  const [drop, setdrop] = useState('dropdown-menu');

  if (role === 'user') {
    router.push("/user")
    return;
  } else if (role === 'Admin') {
    router.push("/page");
    return;
  }
 
  function dropDown() {
    setdrop(drop === 'dropdown-menu' ? '' : 'dropdown-menu')
  }
  function handleClick() {
    setDivClass(divClass === 'initial-class' ? 'transition ease-in-out delay-150  light-style layout-navbar-fixed layout-menu-100vh layout-menu-fixed layout-footer-fixed layout-menu-expanded' : 'initial-class');
  }

  return (
    <div className={divClass}>
    <div className="absolute layout-content-navbar">
      <div className="">
        {/* <!-- Menu --> */}

        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme  drop-shadow-2xl  md:drop-shadow-0 xl:drop-shadow-sm" >
          <div className="app-brand demo ">
            <Link href="/doctor" className="app-brand-link">
            <span className=" demo">
                  <Img src="/img/favicon/favicon.ico" width={30} height={30} alt="Logo" />

                </span>
              <span className="app-brand-text demo menu-text fw-bold text-2xl">{Name}</span>
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
            <li className={`${route == '/doctor' ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/doctor" className="menu-link">
              <i className="menu-icon tf-icons ti ti-smart-home"></i>

                <div data-i18n="Analytics">Dashboard</div>
              </Link>


            </li>

            {/* <!-- Apps & Pages --> */}
            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Apps &amp; Pages</span>
            </li>
            <li className={`${route == '/doctor/patientInfo' ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/doctor/patientInfo" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>
                <div data-i18n="Email">Patients</div>
              </Link>
            </li>
            <li className={`${route ==='/doctor/profile' || route=== "/doctor/profile/updatepassword" ? 'menu-item active' : 'menu-item'} `}>
              <Link href="/doctor/profile" className="menu-link">
              <i className="menu-icon tf-icons ti ti-users"></i>

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
               

             
                <li className="nav-item me-2 me-xl-0">
                  <Link className="nav-link style-switcher-toggle hide-arrow" href="">
                    <i className="ti ti-md"></i>
                  </Link>
                </li>
       
                {/* <!-- User --> */}
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <div className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                    <div className="avatar avatar-online">
                      <Img width={100} height={100} src="/img/avatars/1.png" alt="img" className="h-auto rounded-circle" />
                    </div>
                  </div>
                  {/*  dropdown-menu */}
                  <ul className={`dropdown-menu  dropdown-menu-end  bg-white text-start  absolute shadow-lg`}>
                    <li className=''>
                      <div className="dropdown-item" >
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar avatar-online">
                              <Img src="/img/avatars/1.png" alt="img" width={100} height={100} className="h-auto rounded-circle" />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <span className="fw-semibold d-block">{Name}</span>
                            <small className="text-muted">{role}</small>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-divider"></div>
                    </li>
                    <li >

                      <Link className="dropdown-item" href="/doctor/profile">
                        <i className="ti ti-user-check me-2 ti-sm"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>

                      <Link className="dropdown-item" href="/doctor/profile/updatepassword">
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