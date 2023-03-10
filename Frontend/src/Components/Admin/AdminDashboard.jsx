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

import { axiosAdminInstance } from '../../Instance/Axios';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
]




function AdminDashboard() {
    const [shopkeepers, setShopkeepers] = useState([])


    //To remove shopkeeper
    const removeHandler = async (id) => {
        const response = await axiosAdminInstance.post('/removeShopkeeper', { id })
        getShopkeepers()
    }

    const getShopkeepers = async () => {
        const shopkeepers = await axiosAdminInstance.get('/getShopkeepers')
        const data = shopkeepers.data.data
        setShopkeepers(data)
    }

    useEffect(() => {
        getShopkeepers()
    }, [])

    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell>No.</TableCell>
                            <TableCell ><p className='font-bold'>Username</p></TableCell>
                            <TableCell ><p className='font-bold'>Place</p></TableCell>

                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shopkeepers.map((item, index) => (
                            <TableRow
                                key={item}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell >{item.username}</TableCell>
                                <TableCell >{item.place}</TableCell>
                                <TableCell >{<Stack spacing={2} direction="row">

                                    <Button onClick={() => removeHandler(item._id)} variant="contained">Remove</Button>

                                </Stack>}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    )
}

export default AdminDashboard