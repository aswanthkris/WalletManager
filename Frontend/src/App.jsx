import React from 'react'

import './App.css'

//Import Routes
import AdminRoutes from './Routes/AdminRouter/AdminRoutes'
import ShopkeeperRoutes from './Routes/ShopkeeperRouter/ShopKeeperRoutes'




function App() {


  return (
    < >
      <AdminRoutes />
      <ShopkeeperRoutes />
    </>
  )
}

export default App
