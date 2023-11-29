import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>

      <div>
        {/*-[if lte IE 9]>
      <p className="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]*/}

        {/*- Preloader */}
        {/* <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div> */}
        {/*- /End Preloader */}

        {/*- Start Header Area */}
        <header className="header navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="nav-inner">
                  {/*- Start Navbar */}
                  <nav className="navbar navbar-expand-lg ">
                    <a className="navbar-brand w-20" href="index.html" >
                      <img src="/images/Uday clinic-logos_black.png" width={50} height={50} alt="Logo"/>
                    </a>
                    {/* hide the mobile phone */}
                    <button className="navbar-toggler mobile-menu-btn hidden" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                      <ul id="nav" className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="page-scroll active dd-menu collapsed" href=""
                            data-bs-toggle="collapse" data-bs-target="#submenu-1-1"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">Home</a>
                          <ul className="sub-menu collapse" id="submenu-1-1">
                            <li className="nav-item active"><a href="index.html">Home Default</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="page-scroll dd-menu collapsed" href=""
                            data-bs-toggle="collapse" data-bs-target="#submenu-1-2"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">Pages</a>
                          <ul className="sub-menu collapse" id="submenu-1-2">
                            <li className="nav-item"><a href="about-us.html">About Us</a></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a href="" aria-label="Toggle navigation">Services</a>
                        </li>
                        <li className="nav-item">
                          <a href="" aria-label="Toggle navigation">Doctors</a>
                        </li>
                        <li className="nav-item">
                          <a href="" aria-label="Toggle navigation">Blog</a>
                        </li>
                        <li className="nav-item">
                          <a href="" aria-label="Toggle navigation">Contact</a>
                        </li>
                      </ul>
                    </div> {/*- navbar collapse */}
                    <div className="button add-list-button">
                      <Link href="https://hospital-bay-rho.vercel.app/login" className="btn">Book Appointment</Link>
                    </div>
                  </nav>
                  {/*- End Navbar */}
                </div>
              </div>
            </div> {/*- row */}
          </div> {/*- container */}
        </header>
        {/*- End Header Area */}

        {/*- Start Hero Area */}
        <section className="hero-area">
          <div className="shapes">
            <img src="/images/hero/01.svg" className="shape2" alt="#" />
            <img src="/images/hero/05.svg" className="shape1" alt="#" />
          </div>
          <div className="hero-slider">
            {/*- Start Single Slider */}
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-text">
                      {/*- Start Hero Text */}
                      <div className="section-heading">
                        <h2 className="wow fadeInLeft" data-wow-delay=".3s">Find A Doctor & <br />Book Appointment
                        </h2>
                        <p className="wow fadeInLeft" data-wow-delay=".5s">Since the first days of operation of
                          Uday Clinic, our teaming has been focused on
                          building a high-qualities medicals service by Uday Clinic.</p>
                        <div className="button wow fadeInLeft" data-wow-delay=".7s">
                          <Link href="https://hospital-bay-rho.vercel.app/login" className="btn">Book Appointment</Link>
                          {/* <a href="about-us.html" className="btn">About Us</a> */}
                        </div>
                      </div>
                      {/*- End Hero Text */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-image wow fadeInRight" data-wow-delay=".5s">
                      <img src="/images/hero/02.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- End Single Slider */}
            {/*- Start Single Slider */}
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-text wow fadeInLeft" data-wow-delay=".3s">
                      {/*- Start Hero Text */}
                      <div className="section-heading">
                        <h2>We only give <br /> Best care to your eyes</h2>
                        <p>Since the first days of operation of Uday Clinic, our teaming has been focused
                          on
                          building a high-qualities medicals service by Uday Clinic.</p>
                        <div className="button">
                          <Link href="https://hospital-bay-rho.vercel.app/login" className="btn bg-black">Book Appointment</Link>
                          {/* <a href="" className="btn">About Us</a> */}
                        </div>
                      </div>
                      {/*- End Hero Text */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-image">
                      <img src="/images/hero/slider-2.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- End Single Slider */}
            {/*- Start Single Slider */}
            <div className="single-slider">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-text wow fadeInLeft" data-wow-delay=".3s">
                      {/*- Start Hero Text */}
                      <div className="section-heading">
                        <h2>Superior solutions that <br /> help you to shine.</h2>
                        <p>Since the first days of operation of Uday Clinic, our teaming has been focused
                          on
                          building a high-qualities medicals service by Uday Clinic.</p>
                        <div className="button">
                          <Link href="https://hospital-bay-rho.vercel.app/login" className="btn">Book Appointment</Link>
                          {/* <a href="about-us.html" className="btn">About Us</a> */}
                        </div>
                      </div>
                      {/*- End Hero Text */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="hero-image">
                      <img src="/images/hero/slider-3.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*- End Single Slider */}
          </div>
        </section>
        {/*- End Hero Area */}

        {/*- Start Appointment Area */}
        
        {/*- End Appointment Area */}

        {/*- Start About Area */}
        <section className="about-us section">
          <div className="container  grid grid-cols-2">
            <div className="row align-items-center">
              <div className="">
                <div className="content-left wow fadeInLeft" data-wow-delay=".3s" />
                <img src="/images/about/about.png" alt="#"/>
                  <a href="https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM"
                    className="glightbox video"><i className="lni lni-play"></i></a>
              </div>
            </div>
            <div className="">
              {/*- content-1 start */}
              <div className="content-right wow fadeInRight" data-wow-delay=".5s">
                <span className="sub-heading  grid grid-cols-2">About</span>
                <h2>Thousands of specialities for any
                  type diagnostic.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi aliquip ex ea commodo consequat.</p>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <ul className="list">
                      <li><i className="lni lni-checkbox"></i>Conducts eye health checkups</li>
                      <li><i className="lni lni-checkbox"></i>Best lasik treatment</li>
                      <li><i className="lni lni-checkbox"></i>Treats minor illnesses</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12">
                    <ul className="list">
                      <li><i className="lni lni-checkbox"></i>Special eye exam</li>
                      <li><i className="lni lni-checkbox"></i>Contact lens service</li>
                      <li><i className="lni lni-checkbox"></i>Special Retina exam</li>
                    </ul>
                  </div>
                </div>
                <div className="button">
                  <a href="about-us.html" className="btn">More About Us</a>
                </div>
              </div>
            </div>
          </div>
          </section>
      </div>
      
   
      {/*- End About Area */ }

  {/*- Start Call Action Area */ }
 
  {/*- End Call Action Area */ }

  {/*- Start Achievement Area */ }
  <section className="our-achievement section bottom-8">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <i className="lni lni-apartment"></i>
            <h3 className="counter"><span id="secondo1" className="countup" cup-end="1250">1250</span></h3>
            <p>Hospital Rooms</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <i className="lni lni-sthethoscope"></i>
            <h3 className="counter"><span id="secondo2" className="countup" cup-end="350">350</span></h3>
            <p>Specialist Doctors</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <i className="lni lni-emoji-smile"></i>
            <h3 className="counter"><span id="secondo3" className="countup" cup-end="2500">2500</span></h3>
            <p>Happy Patients</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <i className="lni lni-certificate"></i>
            <h3 className="counter"><span id="secondo3" className="countup" cup-end="35">35</span></h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
    <div className=" bottom-3"></div>
  </section>
  {/*- End Achievement Area */ }

  {/*- Start Pricing Table Area */ }
  
  {/*-/ End Pricing Table Area */ }

  {/*- Start Footer Area */ }
    <footer className="footer overlay   overflow-hidden">
        {/*- Start Footer Top */}
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="cta">
                            <h3>Need Help?</h3>
                            <p>Please feel free to contact our friendly reception staff with any medical enquiry, or
                                call <a href="">+919132626398</a></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form">
                            <h3>Subscribe Newsletter</h3>
                            <form action="#" method="get" target="_blank" className="newsletter-form">
                                <input name="EMAIL" placeholder="Your email address" type="email"/>
                                <div className="button">
                                    <button className="btn">Subscribe<span className="dir-part"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*- End Footer Top */}
        {/*- Start Footer Middle */}
        <div className="footer-middle ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        {/*- Single Widget */}
                        <div className="single-footer f-about">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/images/Uday clinic-logos_white.png" alt="#"/>
                                </a>
                            </div>
                            <p>There’s nothing in this story to make us think he was dreaming about riches.</p>
                            <ul className="social">
                                <li><a href=""><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href=""><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href=""><i className="lni lni-instagram"></i></a></li>
                                <li><a href=""><i className="lni lni-linkedin-original"></i></a></li>
                                <li><a href=""><i className="lni lni-youtube"></i></a></li>
                            </ul>
                        </div>
                        {/*- End Single Widget */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/*- Single Widget */}
                        <div className="single-footer f-link">
                            <h3>Useful Links</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Team</a></li>
                                        <li><a href="">Before After</a></li>
                                        <li><a href="">Cost Calculator</a></li>
                                        <li><a href="">Working Hours</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul>
                                        <li><a href="">Appointment</a></li>
                                        <li><a href="">Gallery</a></li>
                                        <li><a href="">Timetable</a></li>
                                        <li><a href="">Departments</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*- End Single Widget */}
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        {/*- Single Widget */}
                        <div className="single-footer opening-hours">
                            <h3>Opening Hours</h3>
                            <ul>
                                <li>
                                    <span className="day"><i className="lni lni-timer"></i> Mon - Tue</span>
                                    <span className="time">08:30 - 18:30</span>
                                </li>
                                <li>
                                    <span className="day"><i className="lni lni-timer"></i> Wed- Thu</span>
                                    <span className="time">08:30 - 18:30</span>
                                </li>
                                <li>
                                    <span className="day"><i className="lni lni-timer"></i> Friday</span>
                                    <span className="time">08:30 - 18:30</span>
                                </li>
                                <li>
                                    <span className="day"><i className="lni lni-timer"></i> Saturday</span>
                                    <span className="time">08:30 - 18:30</span>
                                </li>
                            </ul>
                        </div>
                        {/*- End Single Widget */}
                    </div>
                        {/*- Single Widget */}
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-footer last f-contact">
                            <h3>Contact</h3>
                            <ul>
                                <li><i className="lni lni-map-marker"></i> ------</li>
                                <li><i className="lni lni-phone"></i> Tel. +(123) 1800-567-8990 </li>
                                <li><i className="lni lni-envelope"></i> ----</li>
                            </ul>
                        </div>
                    </div>
                        {/*- End Single Widget */}
                </div>
            </div>
        </div>
        {/*-/ End Footer Middle */}
        {/*- Start Footer Bottom */}
        <div className="footer-bottom">
            <div className="container">
                <div className="inner">
                    <div className="row">
                        
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="extra-link">
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </footer>


    <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up"></i>
    </a>
</>
  );
}

export default page;
