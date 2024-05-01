import React from 'react'
import PrescriptionTable from '../DataTables/PrescriptionTable'
import PharmacyTable from '../DataTables/PharmacyTable'
import AddPharmacyForm from './AddPharmacyForm'




const PharmacistPage = () => {
    return (
        <div className='grid grid-cols-2 bg-gray-600 h-screen'>
            <div>
                <AddPharmacyForm />

            </div>
            <div className='gap-20 '>
                <PrescriptionTable />
                <PharmacyTable />
            </div>


        </div>
    )
}



export default PharmacistPage