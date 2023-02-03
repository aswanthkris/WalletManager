import React, { useState } from 'react'
import { axiosShopkeeperInstance } from '../../Instance/Axios';

function ShopkeeperHome() {

    const [error, setError] = useState('')

    const [values, setValues] = useState({
        name: '',
        mobile: '',
        email: '',
        address: ''
    })

    const validation = error.validation
    const mobileValidation = error.mobileValidation
    console.log("validation", validation)



    const handleInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("values", values);
        const savedCustomer = await axiosShopkeeperInstance.post('/addCustomer', { values })
        console.log("savedCustomer", savedCustomer.data)
        const data = savedCustomer.data
        setError(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full ml-10 max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            CUSTOMER NAME<span className='text-red-600 text-base'>*</span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="name"
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Eg : Aswanth Krishna"
                            required />

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Mobile number<span className='text-red-600 text-base'>*</span>
                        </label>
                        <input className="appearance-none block  bg-gray-200 text-gray-700 border  border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="mobile"
                            type="text"
                            name='mobile'
                            value={values.mobile}
                            onChange={handleInputChange}
                            placeholder="Mobile number"
                            required />
                        {validation ? <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            {error.message}
                        </label> : <label className="block uppercase tracking-wide text-blue-800 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            {error.message}
                        </label>}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Email Id<span className='text-red-600 text-base'>*</span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="email"
                            type="email"
                            name='email'
                            value={values.email}
                            onChange={handleInputChange}
                            placeholder="Email "
                            required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            Address
                        </label>
                        <input type="text"
                            id="address"
                            name='address'
                            className="block w-full p-4 bg-gray-200 text-gray-700 border border-gray-200 rounded sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder='Address'
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                        State
                    </label>
                    <div className="relative">
                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>New Mexico</option>
                            <option>Missouri</option>
                            <option>Texas</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div> */}
                    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Zip
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                </div> */}
                </div>
                <button className="flex-shrink-0 mt-4 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                    Add Customer
                </button>
            </form >
        </div >
    )
}

export default ShopkeeperHome