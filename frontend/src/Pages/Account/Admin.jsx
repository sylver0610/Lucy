import React, { useState } from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'

import '../../Components/Sidebar/Sidebar.scss'
import './Admin.scss'
import AdminContainer from './AdminContainer';
const Admin = () => {

    return (
        <div className='admin__container'>      

            <ProSidebarProvider >   
                <AdminContainer/>                       
            </ProSidebarProvider>     
        
        </div>

    )
}

export default Admin