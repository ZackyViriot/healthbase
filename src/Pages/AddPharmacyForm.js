import React ,{useState} from 'react'
import axios from 'axios'



const  AddPharmacyForm = () => {
    const [Pharmacy_ID,setPharmacyID] = useState('')
    const [Pharmacy_Name,setPharmacyName] = useState('')
    const [Pharmacy_Address,setPharmacyAddress] = useState('')
    const [Pharmacy_Hours,setPharmacyHours] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8081/addPharmacy",{
            Pharmacy_ID,
            Pharmacy_Name,
            Pharmacy_Address,
            Pharmacy_Hours

        })
        .then((res) => {
            console.log(res)
        })
        window.location.reload();
    }


    return(
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-3/5 mt-4 lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-9 sm:max-w-md xl:p-9 dark:bg-blue-700 dark:border-gray-700 h-3/4'>
                    <h1 className='text-xl font-bold leading-tight tracking-rtight text-gray-900 mdLtext-2xl dark:text-white flex justify-center'>
                        Add Pharmacy
                    </h1>
                    <div className='p-6 space-y-6 sm:p-8'>
                        <form className='space-y-4 md:space-y-6'  onSubmit={handleSubmit}>
                            <div className='grid grid-row'>
                                <div className='mb-4'>
                                    <label htmlFor='patientId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>The Pharmacy ID</label>
                                    <input type='text' name='Patient_ID' id='patientId' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                            foucs: ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter Pharmacy ID" value = {Pharmacy_ID} required='' onChange={(e) => setPharmacyID(e.target.value)} />
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='patientId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>The Pharmacy Name</label>
                                    <input type='text' name='Patient_Address' id='patientAddress' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                            foucs: ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter the pharmacy name" value = {Pharmacy_Name} required='' onChange={(e) => setPharmacyName(e.target.value)} />
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='patientId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>The Pharmacy Address </label>
                                    <input type='text' name='Patient_First_Name' id='patientfirstname' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                            foucs: ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter Pharmacy Address" value = {Pharmacy_Address} required='' onChange={(e) => setPharmacyAddress(e.target.value)} />
                                </div>

                                <div className='mb-4'>
                                    <label htmlFor='patientId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>The Pharmacy Hours</label>
                                    <input type='text' name='Patient_Last_Name' id='patientlastname' className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                                            foucs: ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="Enter Pharmacy Hours" value = {Pharmacy_Hours} required=''onChange={(e)=> setPharmacyHours(e.target.value)} />
                                </div>

                             

                               
                            </div>
                            {/* need to add the button for submit and well as the cancel button  */}
                            <div className='grid grid-flow-col gap-10'>
                                <button type='reset' className='w-full text-black bg-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:gover:bg-primary-700 dark:focus:ring-primary-800'>
                                    cancel
                                </button>
                                <button type='submit' className='w-full text-black bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:gover:bg-primary-700 dark:focus:ring-primary-800'>
                                    Add Pharmacy
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )

}


export default AddPharmacyForm