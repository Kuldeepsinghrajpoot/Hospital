'use client'
import Link from 'next/link'
import { useContext, useState,useEffect,useRef } from 'react';
import Img from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react';
import context from '../context/createContext';

export default function Home() {
  const { role, Name } = useContext(context)
  const searchInputRef = useRef(null);
  const router = usePathname();
  const route = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
      console.log(query);
      if (query) {
        route.push(`${router}?q=${searchInputRef.current.value}`);
      }else{
        route.push(`${router}`)
      }
    // }, 1); // Delay in milliseconds
  
    // return () => clearTimeout(timeoutId);
  }, [query, router]);
  
  const [divClass, setDivClass] = useState('initial-class');
  const [drop, setdrop] = useState('dropdown-menu');
  if (role === 'user') {
    route.replace("/user")
    return;
  } else if (role === 'Doctor') {
    route.replace("/doctor");
    return;
  }  else if(role==='Manager'){
    route.replace("/manager");
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
              <Link href="/page" className="app-brand-link">
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
              <li className={`${router == '/page' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-smart-home"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </Link>
              </li>
              {/* <!-- Apps & Pages --> */}
              <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Apps &amp; Pages</span>
              </li>
              <li className={`${router == '/page/profile' || router == '/page/profile/updatepassword' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/profile" className="menu-link">
                  <i className="menu-icon ti ti-user-check"></i>
                  <div data-i18n="Email">Profile</div>
                </Link>
              </li>
              <li className={`${router == '/page/add' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/add" className="menu-link">
                  <i className="menu-icon tf-icons ti ti-square"></i>
                  <div data-i18n="Chat">Add Patient</div>
                </Link>
              </li>
              {/* <!-- Icons --> */}
              <li className={`${router == '/page/user' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/user" className="menu-link">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group me-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg> <div data-i18n="Icons">Users</div>
                </Link>
              </li>
              <li className={`${router == '/page/patient' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/patient" className="menu-link">
                  <i class="fa-solid fa-hospital-user me-2" ></i>
                  <div data-i18n="Icons">Patients</div>
                </Link>
              </li>
              <li className={`${router == '/page/doctor' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/doctor" className="menu-link">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stethoscope me-2  " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" /><path d="M8 15a6 6 0 1 0 12 0v-3" /><path d="M11 3v2" /><path d="M6 3v2" /><path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></svg>

                  <div data-i18n="Icons absolute mx-10">Doctors</div>
                </Link>
              </li>
              <li className={`${router == '/page/Manager' ? "menu-item active" : "menu-item"}`}>
                <Link href="/page/Manager" className="menu-link">
                <i className="menu-icon ti ti-user-check"></i>

                  <div data-i18n="Icons absolute mx-10">Manager</div>
                </Link>
              </li>

            </ul>
          </aside>
          {/* <!-- / Menu --> */}
          {/* <!-- Layout container --> */}
          <div className="layout-page">
            {/* <!-- Navbar --> */}
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar">
              <div className="layout-menu-toggle  navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <div className="nav-item nav-link px-0 me-xl-4 cursor-pointer" onClick={handleClick} >
                  <i className="ti ti-menu-2 ti-sm"></i>
                </div>
              </div>
              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                {/* <!-- Search --> */}
                <div className="navbar-nav align-items-center">
                  <div className="nav-item navbar-search-wrapper mb-0">
                    <div className="nav-item nav-link search-toggler d-flex align-items-center px-0" href="">
                    <div className="flex justify-start text-center " >
                      <i className="ti ti-search ti-md me-2 mt-1"></i>
                              {/* <label htmlFor="firstName" className="form-label">FirstName</label> */}
                              <input
                                className="form-control  w-96"
                                type="text"
                                id="search"
                                name="search"
                                ref={searchInputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder='Search (Ctrl+/)'
                                // value={FirstName}
                                // onChange={(e) => setFirstName(e.target.value)}
                                // autoFocus
                              />
                            </div>
                      
                      {/* <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                      <input type="text" name='serach bar ' /> */}
                    </div>
                  </div>
                </div>
                {/* <!-- /Search --> */}
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  {/* <!-- Language --> */}

                  {/* <!--/ Language -->
               <!-- Style Switcher --> */}
                  <li className="nav-item me-2 me-xl-0">
                    <Link className="nav-link style-switcher-toggle hide-arrow" href="">
                      <i className="ti ti-md"></i>
                    </Link>
                  </li>
                  {/* <!--/ Style Switcher -->
               <!-- Quick links  --> */}

                  {/* <!-- User --> */}
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <div className="nav-link dropdown-toggle hide-arrow" onClick={dropDown} data-bs-toggle="dropdown">
                      <div className="avatar avatar-online">
                        <Img src="/img/avatars/1.png" alt="user image" width={100} height={100} className="h-auto rounded-circle" />
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
                        <Link className="dropdown-item" href="/page/profile">
                          <i className="ti ti-user-check me-2 ti-sm"></i>
                          <span className="align-middle">My Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="">
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
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>




  )
}