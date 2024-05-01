import React, {useState,useEffect} from 'react';
import axios from 'axios'



const PrescriptionTable = () => {
    const [prescriptionTable,setPrescriptionTable] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8081/PrescriptionInformation')
        .then(res => {
            setPrescriptionTable(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    },[])


    return(
        <section className='realtive overflow-x-auto shadow-md sm:rounded-lg mt-11 mr-11'>
        <label className='flex justify-center bg-gray-700 text-2xl text-white'>Prescription Info</label>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 darkLtext-gray-400'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Prescription_ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Expiration
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Num_Refills
                    </th>
                    <th scope='col' className='px-6 py-3'>
                          Prescription_Quantity
                    </th>
                    <th scope = 'col' className = 'px-6 py-3'>
                        Prescription_Name
                    </th> 
                    <th scope = 'col' className = 'px-6 py-3'>
                        Patient_ID
                    </th> 
                </tr>
            </thead>
            <tbody>
                {prescriptionTable.map(Prescirption => (
                  <tr key = {Prescirption.Prescirption_ID} className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className = 'px-6 py-4'>{Prescirption.Prescription_ID}</td>
                      <td className = 'px-6 py-4'>{Prescirption.Expiration}</td>
                      <td className = 'px-6 py-4'>{Prescirption.Num_Refills}</td>
                      <td className = 'px-6 py-4'>{Prescirption.Prescription_Quantity}</td>
                      <td className = 'px-6 py-4'>{Prescirption.Prescription_Name}</td>
                      <td className = 'px-6 py-4'>{Prescirption.Patient_ID}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </section>
    )

}

export default PrescriptionTable