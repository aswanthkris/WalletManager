import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { axiosShopkeeperInstance } from '../../Instance/Axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WalletManagement() {



    const location = useLocation()
    const id = location.state

    const [addAmount, setAddAmount] = useState()
    const [redeemAmount, setRedeemAmount] = useState()
    const [wallet, setWallet] = useState('')
    const [insufficientBalance, setInsufficientBalance] = useState(false)



    const handleAdd = (event) => {
        const amount = event.target.value
        setAddAmount(amount)

    }
    const handleRedeem = (event) => {
        const amount = event.target.value
        setRedeemAmount(amount)
    }

    //To add to wallet database
    const addWallet = async () => {
        const response = await axiosShopkeeperInstance.post('/addWallet', { addAmount, id })
        console.log("response redeem", response)
        setAddAmount('')
        getWallet()
        setInsufficientBalance(false)
    }

    //To redeem from wallet database
    const redeemWallet = async () => {
        console.log("1st");
        const response = await axiosShopkeeperInstance.post('/redeemWallet', { redeemAmount, id })
        const isEmpty = response.data.zero
        console.log(isEmpty);
        if (isEmpty) {
            console.log("ok");
            setInsufficientBalance(true)
        } else {
            setInsufficientBalance(false)
        }
        setRedeemAmount('')
        getWallet()
    }
    console.log(insufficientBalance);
    //To get wallet amount from database
    const getWallet = async () => {
        const wallet = await axiosShopkeeperInstance.post('/getWallet', { id })
        const amount = wallet.data.wallet
        setWallet(amount)
    }

    useEffect(() => {
        getWallet()
    }, [])


    return (

        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4 text-2xl font-medium">Wallet balance: &#x20B9; {wallet} </div>
            <table className="w-full text-left table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 pl-14 py-2">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">

                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2 font-bold">Add money to wallet</td>
                        <td className="px-4 py-2 text-red-500"><input className='w-56 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-10'
                            id='addWallet'
                            name='addWallet'
                            value={addAmount}
                            onChange={handleAdd}
                            placeholder='Amount to be added'
                        /></td>
                        <td className="px-4 py-2">
                            <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                type='button'
                                onClick={addWallet}
                            >
                                Add Wallet
                            </button>
                        </td>

                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2"></td>
                        <td className="px-4 py-2 font-bold">Redeem money from wallet</td>
                        <td className="px-4 py-2 text-red-500"><input className='w-56 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-10'
                            id='redeemWallet'
                            name='redeemWallet'
                            value={redeemAmount}
                            onChange={handleRedeem}
                            placeholder='Amount to be redeemed'
                        /></td>
                        <td className="px-4 py-2">
                            <button className="w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                type='button'
                                onClick={redeemWallet}
                            >
                                Redeem Wallet
                            </button></td>
                    </tr>

                </tbody>
            </table>
            <ToastContainer />
            {insufficientBalance ? <p className='text-red-600'>Insufficient balance to redeem</p> : ''}

        </div >
    )
}

export default WalletManagement