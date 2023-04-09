import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import SideBar from '../../Components/Sidebar/SidebarAccount.jsx'
import SidebarAccount from '../../Components/Sidebar/SidebarAccount.jsx'
import './Admin.scss'

const Admin = () => {
    return (
        <div className='admin__container'>            
            <ProSidebarProvider>
               <SidebarAccount/>
            </ProSidebarProvider>            
             Admin
        </div>
    )
}

export default Admin