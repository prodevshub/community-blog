import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import './Layout.scss'

const Layout = () => (
    <div className="layout">
        <Header />
        <div className="layout__content">
            <Outlet />
        </div>
        <span>Footer</span>
        {/* TODO - import <Footer /> */}
    </div>
)

export default Layout
