import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { axiosShopkeeperInstance } from '../../Instance/Axios';
import { useNavigate } from "react-router-dom"

function Customers() {

    const [customers, setCustomers] = useState([])
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const filteredData = customers.filter(item => item.mobile.includes(search))

    //Navigate to customer wallet management section
    const walletHandler = (id) => {
        navigate('/wallet-management', { state: id })
    }

    const getCustomers = async () => {
        const response = await axiosShopkeeperInstance.get('/getCustomers')
        const customerData = response.data.response
        setCustomers(customerData)
    }

    //To remove a customer
    const removeHandler = async (id) => {
        const response = await axiosShopkeeperInstance.post('/removeCustomer', { id })
        getCustomers()
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div>
            <p className='text-lg ml-10 mt-10'>Search customer with mobile number</p>
            <input className='w-56 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-10' placeholder='Search with mobile No.' type="text" value={search} onChange={e => setSearch(e.target.value)} />
            <TableContainer className='ml-5 mt-5' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell>No.</TableCell>
                            <TableCell ><p className='font-bold'>Name</p></TableCell>
                            <TableCell ><p className='font-bold'>Mobile No.</p></TableCell>
                            <TableCell ><p className='font-bold'>Email</p></TableCell>

                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item, index) => (
                            <TableRow
                                key={item}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell >{item.name}</TableCell>
                                <TableCell >{item.mobile}</TableCell>
                                <TableCell >{item.email}</TableCell>

                                <TableCell >{<Stack spacing={2} direction="row">

                                    <Button onClick={() => walletHandler(item._id)} variant="contained">Manage Wallet</Button>

                                </Stack>}</TableCell>
                                <TableCell >{<Stack spacing={2} direction="row">

                                    <Button onClick={() => removeHandler(item._id)} variant="contained">Remove</Button>
                                </Stack>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Customers