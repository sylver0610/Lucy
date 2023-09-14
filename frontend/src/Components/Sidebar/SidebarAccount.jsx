import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar,} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi'
import './Sidebar.scss'
import { AiOutlineSchedule, AiOutlineSetting } from 'react-icons/ai';
import {MdOutlineMeetingRoom} from 'react-icons/md'
import {FaHistory} from 'react-icons/fa'
const SidebarAccount = (props) => {

    const {Item, collapsed, selected, setSelected, menuCollapse, setMenuCollapse , collapseSidebar,roleUser} = props

    //create a custom function that will change menucollapse state from false to true and true to false
    
    return (    
        
        <Sidebar >
            <header>
                <section className="profile">                    
                <img src="/assets/img/Logo.svg" alt="Lucy" className="logo" />
                </section>
            
            </header>
            
            {
                roleUser === 'R1' ? (
                    <Menu>
                <Item
                    title="Dashboard"
                    to=""
                    icon={<FiHome />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Appointments"
                    to="appointments"
                    icon={<MdOutlineMeetingRoom />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Managers"
                    to="managers"
                    icon={<MdOutlineMeetingRoom />}
                    selected={selected}
                    setSelected={setSelected}
                />
                
                {/* <Item
                    title="Schedules"
                    to="schedules"
                    icon={<AiOutlineSchedule />}
                    selected={selected}
                    setSelected={setSelected}
                /> */}
                <Item
                    title="Schedules"
                    to="schedules"
                    icon={<AiOutlineSchedule />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="History"
                    to="history"
                    icon={<FaHistory />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Setting"
                    to="setting"
                    icon={<AiOutlineSetting />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Menu>
                ) : <> </>
                
            }
            {/*// <Menu>
            //     <Item
            //         title="Dashboard"
            //         to=""
            //         icon={<FiHome />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
            //     <Item
            //         title="Appointments"
            //         to="appointments"
            //         icon={<MdOutlineMeetingRoom />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
            //     <Item
            //         title="Managers"
            //         to="managers"
            //         icon={<MdOutlineMeetingRoom />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
            //     <Item
            //         title="Schedules"
            //         to="schedules"
            //         icon={<AiOutlineSchedule />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
            //     <Item
            //         title="History"
            //         to="history"
            //         icon={<FaHistory />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
            //     <Item
            //         title="Setting"
            //         to="setting"
            //         icon={<AiOutlineSetting />}
            //         selected={selected}
            //         setSelected={setSelected}
            //     />
        // </Menu>*/}
        
            <section className="sidebar__footer">
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
            </section>
            

        
        </Sidebar>
       
        
       
   
)
}   

export default SidebarAccount;