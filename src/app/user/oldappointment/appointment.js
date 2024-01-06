import Remove from './remove'
import moment from 'moment-timezone'
const Appointment = ({ data }) => {

    if (!data) {
        return;
    }
    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <div className="layout-page">
                    <div className="content-wrapper">
                        {/* Content */}
                        {
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    {data.length === 0 ? (
                                        <div>No Appointment</div>
                                    ) : (

                                        data.map((e) => {
                                            const { Name, Gender, Doctor, Status, _id, AppointmentId, createdAt, Age, Phone, Email } = e;
                                            const originalDate = moment.tz(createdAt, "Asia/Kolkata");
                                            // const originalDate = moment.utc(appointmentDate);
                                            const formattedDates = originalDate.format("MMMM Do YYYY, h:mm:ss a");

                                            return (
                                                <div className="col-xl-3 gap-20  mb-4" key={Email}>
                                                    <div className="card  ">
                                                        <div className="card-header d-flex flex justify-between ">
                                                            <div className=" ">
                                                                <h5 className="m-0 me-2 ">{Name}</h5>
                                                                <h5 className="m-0 me-2">Age-{Age}</h5>
                                                            </div>
                                                            <div className=' cursor-pointer'>
                                                                <Remove id={_id}></Remove>
                                                            </div>
                                                        </div>
                                                        <div className="card-body pb-0">
                                                            <ul className="p-0 m-0">
                                                                <li className="d-flex mb-3">

                                                                    <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                        {/* appointment id */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-4 flex w-fit h-fit gap-2 ">
                                                                                <div className="badge bg-label-success rounded p-2">
                                                                                    <i className="fa-regular fa-calendar-check fa-lg">
                                                                                    </i>
                                                                                </div>

                                                                                <h6 className="mb-0 ">Appointment</h6><h6>No.</h6>
                                                                            </div>
                                                                            <div className="user-progress mx-11">
                                                                                <small>{AppointmentId}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* date */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2 ">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-calendar-days fa-lg"></i></div>

                                                                                <h6 className="mb-0">Date</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{formattedDates}</small>
                                                                            </div>
                                                                        </div>
                                                                        {/* Doctor */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-user-doctor fa-lg"></i></div>

                                                                                <h6 className="mb-0">Doctor</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Doctor}</small>
                                                                            </div>
                                                                        </div>

                                                                        {/* email */}

                                                                        {/* status */}

                                                                        {/* Phone */}
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-phone fa-lg" ></i></div>

                                                                                <h6 className="mb-0">Phone</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Phone}</small>
                                                                            </div>
                                                                        </div>
                                                                        <div className='w-full grid  grid-cols-2'>

                                                                            <div className="me-2 flex w-fit h-fit gap-2">
                                                                                <div className="badge bg-label-success rounded p-2"><i className="fa-solid fa-user-doctor fa-lg"></i></div>

                                                                                <h6 className="mb-0">Gender</h6>
                                                                            </div>
                                                                            <div className="user-progress">
                                                                                <small>{Gender}</small>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </li>
                                                            </ul>
                                                            <div id="reportBarChart"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    )}
                                </div>
                            </div>


                        }



                        <div className="content-backdrop fade"></div>

                    </div>
                    {/* Content wrapper */}
                </div>
                {/* / Layout page */}
            </div>

            {/* Overlay */}
            <div className="layout-overlay layout-menu-toggle"></div>

            {/* Drag Target Area To SlideIn Menu On Small Screens */}
            <div className="drag-target"></div>
        </div>
    );
}

export default Appointment;
