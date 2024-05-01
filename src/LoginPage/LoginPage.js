import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected typo

        // Example logic for redirection based on userId
        if (userId === "1"|| userId === '2' ||userId === '3'||userId === '4'||userId ==='5') {
            navigate('/DoctorPage');
        } else if(userId === "6"|| userId === '7' ||userId === '8'||userId === '9'||userId ==='10'){
            navigate('/PharmacistPage');
        } else {
            // Handle invalid userId
            alert('Invalid userId');
        }

        setUserId('');
    };
   
    return (
        <section className='bg-gray-500'>
            <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
                <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-9 dark:bg-blue-700 dark:border-gray-700'>
                    <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center'>
                        Sign into the medical database
                    </h1>
                    <div className='p-6 space-y-6 sm:p-8'>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='userId' className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your Username</label>
                                <input type="text" name="userId" id="userId" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Doctor ID" required="" onChange={(e) => setUserId(e.target.value)} value={userId} />
                            </div>
                            <button type='submit' className='w-full text-black bg-white hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:gover:bg-primary-700 dark:focus:ring-primary-800'>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
