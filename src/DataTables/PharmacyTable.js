import React , {useState,useEffect} from 'react';
import axios from 'axios'


const PharmacyTable = () => {
    const [pharamacyTable,setPharmacyTable] = useState([])


    useEffect(() => {
        axios.get('http://localhost:8081/PharmacyInfo')
        .then(res => {
            setPharmacyTable(res.data);
        })
        .catch(err => {
            console.log(err);
        })


    },[])


    return(
        <section className='realtive overflow-x-auto shadow-md sm:rounded-lg mt-11 mr-11'>
        <label className='flex justify-center bg-gray-700 text-2xl text-white'>Pharmacy Info</label>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 darkLtext-gray-400'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacy_ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacy_Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacy_Address
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacy_Hours
                    </th> 
                </tr>
            </thead>
            <tbody>
                {pharamacyTable.map(Pharmacy => (
                  <tr key = {Pharmacy.Pharmacy_ID} className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className = 'px-6 py-4'>{Pharmacy.Pharmacy_ID}</td>
                      <td className = 'px-6 py-4'>{Pharmacy.Pharmacy_Name}</td>
                      <td className = 'px-6 py-4'>{Pharmacy.Pharmacy_Address}</td>
                      <td className = 'px-6 py-4'>{Pharmacy.Pharmacy_Hours}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </section>
    )
}


export default PharmacyTable