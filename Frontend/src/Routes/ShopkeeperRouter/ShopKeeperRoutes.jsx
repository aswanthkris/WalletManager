import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ShopkeeperHomePage from '../../Pages/Shopkeeper/ShopkeeperHomePage'
import ShopKeeperLoginPage from '../../Pages/Shopkeeper/ShopKeeperLoginPage'
import CustomersPage from '../../Pages/Shopkeeper/CustomersPage'
import WalletManagementPage from '../../Pages/Shopkeeper/WalletManagementPage'

import ProtectRoutes from './ProtectRoutes'

function ShopKeeperRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ShopKeeperLoginPage />} />
                    <Route element={<ProtectRoutes />}>
                        <Route path='/shopkeeper-home' element={<ShopkeeperHomePage />} />
                        <Route path='/customers' element={<CustomersPage />} />
                        <Route path='/wallet-management' element={<WalletManagementPage />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default ShopKeeperRoutes