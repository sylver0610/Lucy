import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar,} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import SidebarAccount from '../../Components/Sidebar/SidebarAccount';
import {FiMenu } from 'react-icons/fi';
import {BsBell} from 'react-icons/bs'
import './AdminContainer.scss'
const AdminContainer = () => {
    const Item = ({title, to ,icon, selected, setSelected}) => {
        return (
            <MenuItem
            active={selected === title}            
            onClick={() => setSelected(title)}
            icon={icon}>
                <p>{title}</p>
                <Link to={to} />
            </MenuItem>
        )
    }

    const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
    const [selected, setSelected] = useState("Dashboard");
    const [menuCollapse, setMenuCollapse] = useState(false)
    return (
        <>
            <SidebarAccount 
                        Item = {Item}
                        collapsed = {collapsed}
                        selected = {selected}
                        setSelected = {setSelected} 
                        menuCollapse = {menuCollapse}
                        setMenuCollapse = {setMenuCollapse}
                        collapseSidebar = {collapseSidebar}
            />
            <div className="admin__content">
                <div className="navbar"> 
                    <div className="navbar__container">
                            <section className="navbar__title">
                            <div className="navbar__toggler" onClick={() => collapseSidebar()}>
                                {/* changing menu collapse icon on click */}
                                <span>
                                    <FiMenu/>
                                </span>                        
                            </div>
                            <h1 className="title">{selected}</h1>                            
                            </section>
                            <div className="navbar__search">
                                    <input type="text" placeholder='Search' />
                                </div>
                            <section className="navbar__info">
                                <div className="navbar__nofi dropdown">
                                    <span>
                                        <BsBell/>
                                    </span>
                                </div>
                                <div className="navbar-profile dropdown">
                                    <img className='navbar__avatar' src='/assets/img/st1.png'/>
                                   <p className='navbar-profile-name'> La Dien  </p>
                                </div>
                            </section>
                    </div>    
                </div>
                <div className='main-content'>
                    <div className="main-container ">           
                
                    <div className="display">
                        display here
                    </div>
                    </div>
                </div>
    </div>
            {/* <AdminContent/> */}
        </>
    )
}

export default AdminContainer