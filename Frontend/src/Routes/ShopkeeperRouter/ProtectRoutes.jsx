import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'



const useAuth = () => {
    const token = localStorage.getItem('token-shopkeeper-login')
    const shopkeeper = token
    return shopkeeper && token
}

const ProtectRoutes = () => {
    const isAuth = useAuth()
    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectRoutes
