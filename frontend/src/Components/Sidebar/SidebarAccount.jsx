import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar,} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi'
import './Sidebar.scss'
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {FaHistory} from 'react-icons/fa'
const SidebarAccount = () => {

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

    //create a custom function that will change menucollapse state from false to true and true to false
    
    return (    
        <>
        <Sidebar >
            <header>
                <section className="profile">
                    {/* {!collapsed ? (
                        <img src="/assets/img/Logo.svg" alt="Lucy" class="logo" />
                    ) : (
                        <img src="/assets/img/logo.png" alt="Lucy" class="logo1" />
                    )            
                } */}
                <img src="/assets/img/Logo.svg" alt="Lucy" class="logo" />
                </section>
                <section className="close-menu" onClick={() => collapseSidebar()}>
                    {/* changing menu collapse icon on click */}
                {collapsed ? (
                    <FiArrowRightCircle/>    
                ) : (                 
                    <FiArrowLeftCircle/>      
                )}
                </section>
            </header>
            
            <Menu>
            <Item
                title="Dashboard"
                to="/"
                icon={<FiHome />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Appointments"
                to="/"
                icon={<MdOutlineMeetingRoom />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Schedules"
                to="/"
                icon={<AiOutlineSchedule />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="History"
                to="/"
                icon={<FaHistory />}
                selected={selected}
                setSelected={setSelected}
            />
            <Item
                title="Setting"
                to="/"
                icon={<AiOutlineSetting />}
                selected={selected}
                setSelected={setSelected}
            />
            </Menu>
        
            <section className="sidebar__footer">
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
            </section>
            

        
        </Sidebar>
       
        </>
       
   
)
}   

export default SidebarAccount;