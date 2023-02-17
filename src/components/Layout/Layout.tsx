import React from 'react'
import Navbar from '../Navbar/Navbar'

interface LayoutProps{
    children: React.ReactElement[] | React.ReactElement
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="w-screen h-screen bg-gray-200 overflow-auto">
        <Navbar />
        {children}
    </div>
  )
}

export default Layout