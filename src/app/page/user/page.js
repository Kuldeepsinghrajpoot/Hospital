import Searching from './searching'
const patientDetails = async () => {
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
  const data = await patientDetails();
  if (!data) {
    return;
  }
  // console.log(patientDetails);
  return (
    <>
      <Searching data={data.patientDetails}/>
    </>
  );
}

export default UserInformation;
export async function generateMetadata() {
  return {
      title: 'Users',
      deScription: 'Register'
  }
}