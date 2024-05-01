import React , {useState,useEffect} from 'react';
import axios from 'axios';




const PharmacistTable = () => {
    const [pharmacistTable,setPharmacistTable] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8081/PharmacistInformation")
            .then(res => {
                setPharmacistTable(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);




    return (
        <section className='realtive overflow-x-auto shadow-md sm:rounded-lg'>
        <label className='flex justify-center bg-gray-700 text-2xl text-white'>Pharmacist information</label>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 darkLtext-gray-400'>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacist_ID
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacist_First_Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Pharmacist_Last_Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                          Title
                    </th>
                    <th scope = 'col' className = 'px-6 py-3'>
                        Pharmacy_ID
                    </th> 
                </tr>
            </thead>
            <tbody>
                {pharmacistTable.map(PharmacistTable => (
                  <tr key = {PharmacistTable.Pharmacist_ID} className = "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td className = 'px-6 py-4'>{PharmacistTable.Pharmacist_ID}</td>
                      <td className = 'px-6 py-4'>{PharmacistTable.Pharmacist_First_Name}</td>
                      <td className = 'px-6 py-4'>{PharmacistTable.Pharmacist_Last_Name}</td>
                      <td className = 'px-6 py-4'>{PharmacistTable.Title}</td>
                      <td className = 'px-6 py-4'>{PharmacistTable.Pharmacy_ID}</td>                   
                  </tr>
                ))}
            </tbody>
        </table>
    </section>
    )
}


export default PharmacistTable