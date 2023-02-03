import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Import pages
import AdminDashboardPage from '../../Pages/Admin/AdminDashboardPage'
import AddShopKeeperPage from '../../Pages/Admin/AddShopKeeperPage'

function AdminRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/admin-dashboard' element={<AdminDashboardPage />} />
                    <Route path='/add-shopkeeper' element={<AddShopKeeperPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AdminRoutes