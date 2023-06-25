import React from 'react'
import Navbar from './Navbar/Navbar'
import CentralSection from './CentralSection/CentralSection'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

//Some pages will have shared layout, Navbar --> Central Section --> Footer
//Navbar and Footer will always stay the same, Central Part will be different
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <CentralSection>
        <Outlet />
      </CentralSection>
      <Footer />
    </div>
  )
}

export default AppLayout
