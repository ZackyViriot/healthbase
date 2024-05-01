import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientTable = () => {
    const [patientTable, setPatientTable] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/PatientInformation')
            .then(res => {
                setPatientTable(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section className='realtive overflow-x-auto shadow-md sm:rounded-lg mr-11 mt-11'>
            <label className='flex justify-center bg-gray-700 text-2xl text-white'>Patient infromation</label>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 darkLtext-gray-400'>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope = 'col' className = 'px-6 py-3'>
                            Patient-ID
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Patient-Address
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Patient-First-Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Patient-Last-Name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Patient-Doctor-ID
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {patientTable.map(patient => (
                        <tr key={patient.Patient_ID} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className='px-6 py-4'>{patient.Patient_ID}</td>
                            <td className = 'px-6 py-4'>{patient.Patient_Address}</td>
                            <td className='px-6 py-4'>{patient.Patient_First_Name}</td>
                            <td className='px-6 py-4'>{patient.Patient_Last_Name}</td>
                            <td className='px-6 py-4'>{patient.Doctor_ID}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )

}



export default PatientTable