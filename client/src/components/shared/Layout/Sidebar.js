import React from 'react'
import { UserMenu } from './Menus/UserMenu'
import { Link, useLocation } from 'react-router-dom'
import '../../../styles/Layout.css';

const Sidebar = () => {
    const location = useLocation()
  return (
    <div>
     <div className='sidebar'>
        <div className='menu'>
            {UserMenu.map((menu) =>{
                const isActive = location.pathname === menu.path
                return (
                    <div className={`menu-item ${isActive && 'active'}`}>
                        <i className={menu.icon}></i>
                        <Link to={menu.path}>{menu.name}</Link>
                    </div>
                )
            })}
        </div>
     </div>
    </div>
  )
}

export default Sidebar