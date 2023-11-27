const todoItems = async () => {
    const url = process.env.URI;
    try {
        const response = await fetch(`${url}/api/mongodb`, {
            cache: "no-store",
        });
        // setData(response.data);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
  
}
const UserInformation = async () => {
  const data = await todoItems();
  if (!data) {
    return;
  }
  // console.log(patientDetails);
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                  <h5 className="card-header">Patient Information</h5>
                  <div className="card-body">
                    <div className="table-responsive text-nowrap">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.patientDetails.map((e) => {
                            const { name, lastname, email, contactnumber, dob, gender, address,role } = e;                 
                            // const inputDate = new Date(DOB);
                            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                            const standardDate = new Date(dob).toLocaleDateString('en-US', options);
                            
                            return (
                              <tr key={e._id}>
                                <td>{name}</td>
                                <td>{lastname}</td>
                                <td>{email}</td>
                                <td>{contactnumber}</td>
                                {/* <td>{day+"-"+month+"-"+year}</td> */}
                                <td>{standardDate}</td>
                                <td>{gender}</td>
                                <td>{address}</td>
                            
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInformation;
