import Searching from './searching'
const Doctor = async () => {
  const url = process.env.URI;
  try {
      const response = await fetch(`${url}/api/doctor`, {
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
const data = await Doctor();
if (!data) {
  return;
}
// console.log(patientDetails);
return (
  <>
    <Searching data={data.manager}/>
  </>
);
}

export default UserInformation;
export async function generateMetadata() {
  return {
      title: 'Manager',
      deScription: 'Manager'
  }
}