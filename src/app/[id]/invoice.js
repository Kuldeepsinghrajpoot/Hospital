'use client'
// import moduleName from 'module'
import Img from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { addDays, format } from 'date-fns';
import moment from 'moment';
import momentDate from 'moment-timezone';
const Invoice = ({ name, doctor, appointmentDate, appointmentId, phone, age, gender, address }) => {


  const capitalizeFirstLetter = (value) => {
    const words = value.split([" ",'/',"{}","[]","()"]);

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
  //  return words
  };
  const router = useRouter();

  // Check for missing data and refresh the page if any are missing
  useEffect(() => {
    // Check for missing data and refresh the page if any are missing
    if (!name || !doctor || !appointmentDate || !phone || !age || !gender || !address) {
      router.refresh();
    }
    // Trigger window.print after the component has mounted
    window.print();
    // window.close();
  }, [router, name, doctor, appointmentDate, phone, age, gender, address]);
  const originalDate = momentDate.tz(appointmentDate, "Asia/Kolkata");
  // const originalDate = moment.utc(appointmentDate);
  const formattedDates = originalDate.format("MMMM Do YYYY, h:mm:ss a");

  const originalDates = moment.utc(appointmentDate);
  const dateAfter7Days = originalDates.add(7, 'days');
  const newDate = dateAfter7Days.format("MMMM Do YYYY")


  return (
    <div className="invoice-print bg-white w-screen h-screen">
      <div className="d-flex justify-content-between flex-row">
        <div className="">
          <div className="d-flex svg-illustration mb-3 gap-2">
            <Img src="/img/favicon/favicon.ico" width={50} height={50} alt="Logo" />


            <span className="app-brand-text fw-bold position-absolute top-2 start-12   text-2xl"> Uday Clinic </span>
          </div>
          <p className="mb-1">एफ-9, 10, फर्स्ट फ्लोर, वीरांगना जे.डी.ए. कॉम्पलैक्स, मेडिकल कॉलेज के पास,झॉसी</p>
          <p className="mb-1">झॉसी, उत्तर प्रदेश,भारत</p>
          <p className="mb-0">+917398391052</p>
        </div>
        <div>
          <h4 className="fw-bold">Appointment No. #{appointmentId}</h4>

          <div className="">
            <span className="text-muted">Till Valid</span>
            <span className="fw-bold">:  {newDate}</span>
          </div>

        </div>
      </div>

      <hr />

      <div className="row d-flex  mb-4">
        <div className="col-sm-6">
          <div className="col-sm-6">

            <table className=' w-96'>
              <tbody>
                <tr>
                  <td className="pe-3">Patient Name</td>
                  <td><strong>:  {capitalizeFirstLetter(name)}</strong></td>
                </tr>
                <tr>
                  <td className="pe-3">Address</td>
                  <td>:  {address}</td>
                </tr>

                <tr>
                  <td className="pe-3">Doctor Name</td>
                  <td>:  Dr.{" "}{doctor}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6 w-50">

          <table>
            <tbody>
              <tr>
                <td className="pe-3">Date Issue</td>
                <td><strong>: {formattedDates}</strong></td>
              </tr>
              <tr>
                <td className="pe-3">Age/Gender</td>
                <td>:  {age}Year/{gender}</td>
              </tr>

              <tr>
                <td className="pe-3">Phone</td>
                <td>:  {phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table m-0 border">
          <thead className="table-light   ">
            <tr>
              <th>Charges Name</th>
              <th>Description</th>
              <th></th>
              <th></th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className='border'>
            <tr>
              <td>For Consultation Fee</td>
              <td>Dr. {doctor}</td>
              <td></td>
              <td></td>
              <td>300.00</td>
            </tr>


            <tr>
              <td colspan="3" className="align-top px-4 py-3">
                <p className="mb-2">
                  <span className="me-1 fw-bold">Payment Mode:</span>
                  <span>CASH</span><br></br>
                  <span className='fw-bold'>Recived a sum of rupees three hundred</span>

                </p>
                {/* <span>Thanks for reaching us</span> */}
              </td>
              <td className="text-end px-4 py-3">
                <p className="mb-2">Subtotal:</p>


                <p className="mb-0">Total:</p>
              </td>
              <td className="px-4 py-3">
                <p className="fw-bold mb-2">300.00</p>


                <p className="fw-bold mb-0">300.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-12">
          <span className="fw-bold">Note:</span>
          <span>Your appointment is valid for 7 days only.</span> <br />
          <span>Thank You!</span>
        </div>
      </div>
    </div>
  );
}

export default Invoice;


