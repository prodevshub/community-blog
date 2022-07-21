import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './Layout.scss'

const Layout = () => (
    <div className="layout">
        <Header />
        <div className="layout__content">
            <Outlet />
        </div>
        <Footer />
    </div>
)

export default Layout
