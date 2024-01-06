import React from 'react';
import Adduser from './addPatient/page'
import AddDoctor from './addDoctor/page'
import Patient from './todaysPatients/page'
const DoctorTable = () => {
    return (
    <>
    
    <Adduser></Adduser>
    <Patient></Patient>
    </>
    );
}

export default DoctorTable;

export async function generateMetadata() {
    return {
        title: 'Add Patient',
        deScription: 'Add Patient'
    }
}