import React from 'react'
import { BiSolidDonateBlood, BiUserCircle } from "react-icons/bi";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
    const {user} = useSelector(state => state.auth)
    const naviigate = useNavigate();
    //logout Handler
    const handleLoagout = () =>{
        localStorage.clear()
        alert('Logout Successfully')
        naviigate("/login");
    }
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <BiSolidDonateBlood color="red" />
            Blood Bank{" "}
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle />
                Welcome {user?.name || user?.hospitalName || user?.organisationName}{" "}
                <span className="badge text-bg-secondary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLoagout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header