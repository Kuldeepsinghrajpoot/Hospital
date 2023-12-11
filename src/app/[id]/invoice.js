'use client'

// import moduleName from 'module'

import Img from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
const Invoice = ({ name, doctor, appointmentDate, appointmentId, phone, age, gender, address }) => {
  // console.log({para});
  const option = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const inputDate = new Date(appointmentDate).toLocaleDateString('en-US', option);

  //   var inputDate = "12/11/2023";
  // Split the input date into month, day, and year
  var dateParts = inputDate.split("/");
  var month = parseInt(dateParts[0], 10);
  var day = parseInt(dateParts[1], 10);
  var year = parseInt(dateParts[2], 10);
  // Create a Date object using the extracted parts
  var formattedDate = new Date(year, month - 1, day);

  // Format the date as "Month day, Year"
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var standardDate = formattedDate.toLocaleDateString(undefined, options);

  const router = useRouter();
  if (!name, !doctor, !appointmentDate, !phone, !age, !gender, !address) {
    router.refresh()
  }
  window.print();


  useEffect(() => {
    const handleAfterPrint = () => {
      // Close the tab after printing (if the user clicks "Cancel" in the print dialog)
      window.close();
    };

    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);
  return (
    <div className="invoice-print ">
      <div className="d-flex justify-content-between flex-row">
        <div className="mb-4">
          <div className="d-flex svg-illustration mb-3 gap-2">
            <Img src="/img/favicon/favicon.ico" width={80} height={80} alt="Logo" />


            <span className="app-brand-text fw-bold position-absolute top-9 start-20   text-2xl"> Uday Clinic </span>
          </div>
          <p className="mb-1">एफ-9, 10, फर्स्ट फ्लोर, वीरांगना जे.डी.ए. कॉम्पलैक्स, मेडिकल कॉलेज के पास,झॉसी</p>
          <p className="mb-1">झॉसी, उत्तर प्रदेश,भारत</p>
          <p className="mb-0">+917398391052</p>
        </div>
        <div>
          <h4 className="fw-bold">INVOICE #{appointmentId}</h4>
          <div className="mb-2">
            <span className="text-muted">Date Issues:</span>
            <span className="fw-bold">{standardDate}</span>
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
                  <td className="pe-3">Patient Name:</td>
                  <td><strong>{name}</strong></td>
                </tr>
                <tr>
                  <td className="pe-3">Address:</td>
                  <td>{address}</td>
                </tr>
                <tr>
                  <td className="pe-3">Phone:</td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td className="pe-3">Doctor Name:</td>
                  <td>Dr.{doctor}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6 w-50">

          <table>
            <tbody>
              <tr>
                <td className="pe-3">Date:</td>
                <td><strong>{standardDate}</strong></td>
              </tr>
              <tr>
                <td className="pe-3">Age/Gender:</td>
                <td>{age}Year/{gender}</td>
              </tr>
              <tr>
                <td className="pe-3">Valid upto</td>
                <td>December 18, 2023</td>
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
                  <span>Cash</span><br></br>
                  <span className='fw-bold'>recived a sum of rupees three hundred</span>

                </p>
                {/* <span>Thanks for reaching us</span> */}
              </td>
              <td className="text-end px-4 py-3">
                <p className="mb-2">Subtotal:</p>
                <p className="mb-2">Discount:</p>

                <p className="mb-0">Total:</p>
              </td>
              <td className="px-4 py-3">
                <p className="fw-bold mb-2">300.00</p>
                <p className="fw-bold mb-2">00.00</p>

                <p className="fw-bold mb-0">300.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-12">
          <span className="fw-bold">Note:</span>
          <span>Your appointment is void for 7 days only.</span> <br />
          <span>Thank You!</span>
        </div>
      </div>
    </div>
  );
}

export default Invoice;


