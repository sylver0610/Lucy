import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar,} from 'react-pro-sidebar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux'
import SidebarAccount from '../../Components/Sidebar/SidebarAccount';
import {FiMenu } from 'react-icons/fi';
import {BsBell} from 'react-icons/bs'
import './AdminContainer.scss'
const AdminContainer = () => {
    const navigate = useNavigate();
    const userInfo = useSelector(state => state.user?.account?.user)
    const roleUser = userInfo.roleId
    const convertRole = (roleId) => {
        if (roleId === 'R1') {
            return 'Admin'
        } else if (roleId === 'R2') {
            return 'Doctor'
        } else {
            return 'Client'
        }
    }
    const Item = ({title, to ,icon, selected, setSelected}) => {
        return (
            <MenuItem
            active={selected === title}     
            onClick={()=> handleClickItem(to,title)}       
            // onClick={() => setSelected(title)}
            icon={icon}>
            <p>{title}</p>
            {/* component={<Link to={to}/>} */}
            {/* <Link to={to} /> */}
            
            </MenuItem>
        )
    }
    const handleClickItem = (link,title) => {
        setSelected(title)
        navigate(link)
    }
    const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
    const [selected, setSelected] = useState("Dashboard");
    const [menuCollapse, setMenuCollapse] = useState(false)
    return (
        <>
            <SidebarAccount 
                        roleUser = {roleUser}
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
                                    <p className='navbar-profile-name'> {convertRole(userInfo.roleId)}. {userInfo.firstName} {userInfo.lastName}  </p>
                                </div>
                            </section>
                    </div>    
                </div>
                <div className='main-content'>
                    <div className="main-container ">           
                
                    <div className="display">
                        <Outlet/>
                    </div>
                    </div>
                </div>
    </div>
            {/* <AdminContent/> */}
        </>
    )
}

export default AdminContainer