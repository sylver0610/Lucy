import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'

import SidebarAccount from '../../Components/Sidebar/SidebarAccount.jsx'
import './Admin.scss'
import {FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
const Admin = () => {
    return (
        <div className='admin__container'>            
            <ProSidebarProvider >
               <SidebarAccount/>
            </ProSidebarProvider>            
             <div className="admin__content">
                <div className="container">
                    <div className="topbar"> 
                
                        <section className="topbar__function">
                            <h1 className="title">Dashboard</h1>
                            <span className="action__prev"><AiOutlineLeft/></span>
                            <span className="action__next"><AiOutlineRight/></span>
                        </section>
                        <section className="topbar__action">
                            <div className="topbar__search">
                                <input type="text" placeholder='Search' />
                            </div>
                            <div className="topbar__current-user">
                                hi, Dien La
                            </div>
                        </section>
                       
                    </div>
                   
                 
                <div className="display">
                    display here
                </div>
                </div>
             </div>
        </div>
    )
}

export default Admin