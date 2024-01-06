'use client'
import Link from 'next/link';
import React from 'react';
import "../main/main.css"
import Img from 'next/image'
import { useRouter } from 'next/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards, EffectFlip, FreeMode, Zoom, Virtual } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Page = ({ to }) => {
  const router = useRouter();
  console.log(to);
  const handleClick = () => {
    // Use the push method to navigate to the specified path
    window.open('/page', '_blank');
  };

  return (
    <>

      <>
        <header className="header navbar-area ">
          <div className="container">
            <div className="row align-items-center rounded-lg">

              <div className="nav-inner rounded-lg ">
                {/*- Start Navbar */}
                <div className="  grid  grid-flow-col overflow-hidden rounded-sm">
                  <div className=' relative top-2'>
                    <Img src="/img/favicon/favicon.ico" width={70} height={70} alt="Logo" />
                  </div>
                  <nav className="md:ml-auto flex    flex-wrap items-center text-base justify-center">
                    {/* <Link href={""} className="mr-5 "><h6>First Link</h6></Link>
                    <Link href={""} className="mr-5 "><h6>Second Link</h6></Link>
                    <Link href={""} className="mr-5 "><h6>Third Link</h6></Link>
                    <Link href={""} className="mr-5 "><h6>Fourth Link</h6></Link> */}
                  </nav>
                  <div className='p-6 flex  justify-end  relative'>
                    <div onClick={handleClick} className='btn btn-primary  ' style={{background:"#7367F0" , color:"white"}}>Login/Register</div>
                  </div>
                </div>
                {/*- End Navbar */}
              </div>
            </div> {/*- row */}
          </div> {/*- container */}
        </header>
        {/*- End Header Area */}

        {/*- Start Hero Area */}
        <Swiper className='absolute'
          // install Swiper modules
          modules={[Navigation, Autoplay, EffectCards, EffectFlip, FreeMode, Zoom, Virtual]}
          Autoplay

          // Zoom={true}
          EffectCards={true}

          slidesPerView={1}
          navigation
          // pagination={{ clickable: false }}
          // scrollbar={{ draggable: false }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          autoplay={true}
          effect='fade'

        >
          <SwiperSlide className='w-screen h-screen'><section className="">
            <div className='w-full h-screen text-white bg-[#991B1B]'>
              <div className='flex justify-center py-32  grid-cols-3'>
                <div className=" absolute  text-white ">
                  <h1 className=" w-full flex justify-center  translate-y-56 text-white  h-full  " data-wow-delay=".3s">Find A Doctor & Book Appointment</h1>
                  <p className="translate-y-56 " data-wow-delay=".5s">Since the first days of operation of
                    Uday Clinic, our teaming has been focused on
                    building a high-qualities medicals service by Uday Clinic.
                  </p>
                </div>
                <div className="" data-wow-delay=".5s">
                  <Img width={500} height={500} src="/img/doctor3.png" alt="#" />
                </div>
                <div className=' absolute translate-y-80 drop-shadow-md'>
                  <button className="btn btn-primary w-44 h-10" onClick={handleClick} style={{background:"#7367F0" , color:"white"}}>
                    Book Now
                  </button>

                </div>
              </div>
            </div>
          </section></SwiperSlide>
          <SwiperSlide><section className="">
            <div className='w-full h-screen text-white bg-[#991B1B]'>
              <div className='flex justify-center py-32  grid-cols-3'>
                <div className=" absolute  text-white ">
                  <h1 className=" w-full flex justify-center  translate-y-56 text-white  h-full  " data-wow-delay=".3s">We only give
                    Best care to your eyes</h1>
                  <p className="translate-y-56 " data-wow-delay=".5s">Since the first days of operation of Uday Clinic, our teaming has been focused on building a high-qualities medicals service by Uday Clinic.
                  </p>
                </div>
                <div className="" data-wow-delay=".5s">
                  <Img width={500} height={500} src="/img/d7.png" alt="#" className='h-fit' />
                </div>
                <div className=' absolute translate-y-80 drop-shadow-md'>
                  <button className="btn btn-primary w-44 h-10" onClick={handleClick} style={{background:"#7367F0" , color:"white"}}>
                    Book Now{to = ""}
                  </button>

                </div>
              </div>
            </div>
          </section></SwiperSlide>
          <SwiperSlide><section className="">
            <div className='w-full h-screen text-white bg-[#991B1B]'>
              <div className='flex justify-center py-32  grid-cols-3'>
                <div className=" absolute  text-white ">
                  <h1 className=" w-full flex justify-center  translate-y-56 text-white  h-full  " data-wow-delay=".3s">Superior solutions that
                    help you to shine.</h1>
                  <p className="translate-y-56 " data-wow-delay=".5s">Since the first days of operation of Uday Clinic, our teaming has been focused on building a high-qualities medicals service by Uday Clinic.


                  </p>
                </div>
                <div className=" w-80 h-96" data-wow-delay=".5s">
                  <Img width={250} height={250} src="/img/d5.png" alt="#" />
                </div>
                <div className=' absolute translate-y-80 drop-shadow-md'>
                  <button className="btn btn-primary w-44 h-10" onClick={handleClick} style={{background:"#7367F0" , color:"white"}}>
                    Book Now{to = ""}
                  </button>

                </div>
              </div>
            </div>
          </section></SwiperSlide>
          <SwiperSlide><section className="">
            <div className='w-full h-screen text-white bg-[#991B1B]'>
              <div className='flex justify-center py-32  grid-cols-3'>
                <div className=" absolute  text-white ">
                  <h1 className=" w-full flex justify-center  translate-y-56 text-white  h-full  " data-wow-delay=".3s">Find A Doctor & Book Appointment</h1>
                  <p className="translate-y-56 " data-wow-delay=".5s">Since the first days of operation of
                    Uday Clinic, our teaming has been focused on
                    building a high-qualities medicals service by Uday Clinic.
                  </p>
                </div>
                <div className="" data-wow-delay=".5s">
                  <Img width={500} height={500} src="/img/doctor3.png" alt="#" />
                </div>
                <div className=' absolute translate-y-80 drop-shadow-md'>
                  <button className="btn btn-primary w-44 h-10" onClick={handleClick} style={{background:"#7367F0" , color:"white"}}>
                    Book Now{to = ""} 
                  </button>

                </div>
              </div>
            </div>
          </section></SwiperSlide>
          ...
        </Swiper>

        {/*- End Hero Area */}

        {/*- Start Appointment Area */}

        {/*- End Appointment Area */}

        {/*- Start About Area */}
        <h1 className="   w-screen h-20 text-red-800 bg-white flex justify-center  ">About</h1>
      
        <section className="about-us section bg-white h-screen w-screen absolute">
          <div className="container  grid grid-cols-2">
            <div className=" flex justify-center ">
              <div className="">
                <div className="content-left wow fadeInLeft" data-wow-delay=".3s" />
                <Img width={500} height={500} src="/img/d8.jpg" alt="#" />

              </div>
            </div>
                
            <div className="">
              {/*- content-1 start */}
              <div className="content-right wow fadeInRight" data-wow-delay=".5s">
                <h2>Thousands of specialities for any
                  type diagnostic.</h2>
                <div className='text-xl font-semibold text-blue-700'>Our Surgical staff is second to none Dedicated to providing the higest quality Surgical care and service</div>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <ul className="list">
                      <li><i className="lni lni-checkbox"></i>Appendicits</li>
                      <li><i className="lni lni-checkbox"></i>Hernia</li>
                      <li><i className="lni lni-checkbox"></i>Surgical Emergencies</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12">
                    <ul className="list">
                      <li><i className="lni lni-checkbox"></i>Laparoscopic Surgery</li>
                      <li><i className="lni lni-checkbox"></i>Surgery for Fistulas adn hermorrholds</li>
                    </ul>
                  </div>
                </div>
                <div className="button ">
                  <a href="" className="btn btn-danger">More About Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>


      {/*- End About Area */}

      {/*- Start Call Action Area */}

      {/*- End Call Action Area */}

      {/*- Start Achievement Area */}
      <section className="our-achievement section bottom-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-12">
              <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                <i className="lni lni-apartment"></i>
                <h3 className="counter"><span id="secondo1" className="countup" cup-end="1250">50</span></h3>
                <p>Hospital Rooms</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12">
              <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                <i className="lni lni-sthethoscope"></i>
                <h3 className="counter"><span id="secondo2" className="countup" cup-end="350">5</span></h3>
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
      {/*- End Achievement Area */}

      {/*- Start Pricing Table Area */}

      {/*-/ End Pricing Table Area */}

      {/*- Start Footer Area */}
      <footer className="footer overlay   overflow-hidden">
        {/*- Start Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="cta">
                  <h3>Need Help?</h3>
                  <p>Please feel free to contact our friendly reception staff with any medical enquiry, or
                    call <div className='text-white'>+917398391052</div></p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form">
                  <h3>Subscribe Newsletter</h3>
                  <form action="#" method="get" target="_blank" className="newsletter-form">
                    <input name="EMAIL" placeholder="Your email address" type="email" />
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
                    <a href="">
                      <Img width={100} height={100} src="/img/favicon/favicon.ico" alt="Logo" />

                    </a>
                  </div>
                  <p>There’s nothing in this story to make us think he was dreaming about riches.</p>
                  
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
                    <li><i className="lni lni-map-marker"></i>एफ-9, 10, फर्स्ट फ्लोर, वीरांगना जे.डी.ए. कॉम्पलैक्स, मेडिकल कॉलेज के पास,झॉसी

                      झॉसी, उत्तर प्रदेश,भारत</li>
                    <li><i className="lni lni-phone"></i> Tel. +(91) 7398391052 </li>
                    <li><i className="lni lni-envelope"></i> udaydivyaclinic@gmail.com</li>
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

                <div className="flex justify-center">
                  <ul className="extra-link">
                    <li><div className='text-white' href="">{new Date().getFullYear()}</div></li>
                    <li><div className='text-white'>Created by- Kuldeep Singh Rajpoot </div></li>
                    <li><div className='text-white'> Email - kuldeepsinghrajpoot4@outlook.com</div></li>
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

export default Page;
