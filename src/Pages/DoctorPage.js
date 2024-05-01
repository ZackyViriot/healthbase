import React from 'react'
import DoctorTable from '../DataTables/DoctorTable'
import PatientTable from '../DataTables/PatientsTable'
import AddPatientForm from './AddPatientFormPage'
import PrescriptionTable from '../DataTables/PrescriptionTable'
import AddPrescirptionForm from './AddPresciptionForm'




const DoctorPage = () => {
    return (
        <section className='bg-gray-500'>

            <div className='grid grid-cols-2 gap-2 mx-3 bg-gray-500'>
                <div className='grid grid-cols-1'>
                    <AddPatientForm />
                    <AddPrescirptionForm />
                </div>
                <div>
                    <PatientTable />
                    <PrescriptionTable />
                    <DoctorTable />
                </div>
            </div>
        </section>
    )
}


export default DoctorPage