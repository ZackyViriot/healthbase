import React, { useState } from "react";
import axios from "axios";


const SearchPreciptionForm = () => {
    const [Patient_ID,setPatientID] = useState('')

    const [patientData,setPatientData] = useState(null);
    const [error,setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8081/searchPatient`,Patient_ID)
            .then(res => {
                // Assuming res.data contains the patient information
                console.log(res.data)
                setPatientData(res.data);
                console.log(patientData)
                setError('');
            })
            .catch(err => {
                setPatientData(null);
                setError('Patient not found or an error occurred.');
            });


    };

   
    return(
        <section className='bg-gray-50 mt-11'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-9 sm:max-w-md xl:p-9 dark:bg-blue-700 dark:border-gray-700'>
                    <h1 className='text-xl font-bold leading-tight tracking-rtight text-gray-900 mdLtext-2xl dark:text-white flex justify-center'>
                        Search Patient
                    </h1>
                    <div className='p-6 space-y-6 sm:p-8'>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                           <div className="grid grid-row"> 
                                <div>
                                <label htmlFor='patientId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>The Patient ID</label>
                                    <input type='number' name='Patient_ID' id='patientId' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                            foucs: ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter the patient ID" value = {Patient_ID} required='' onChange={(e) => setPatientID(e.target.value)} />
                                </div>
                           </div>
                           <div className="w-25 flex  items-center justify-center">
                           <button type='submit' className='w-full text-black bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:gover:bg-primary-700 dark:focus:ring-primary-800'>
                                    Add Patient
                                </button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SearchPreciptionForm