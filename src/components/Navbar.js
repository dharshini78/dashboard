import React from 'react';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Line } from "react-icons/ri";
import { GiAngelWings } from "react-icons/gi";


import { useState } from 'react';
import './Navbar.css'
import { IconContext } from 'react-icons';

import { SideBarData } from './SideBarData';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
     <IconContext.Provider value={{color: "#fff"}}>
      <div className='navbar'>
        <Link to="#" className="menu-bars">
          <RiMenu3Line onClick={showSidebar} />

        </Link>

        <h1 className="logo" style={{color: '#fff'}}>Garuda
        <GiAngelWings style={{color: "#FF8700"}}/>

        </h1>

        <button className='connect'>Connect wallet</button>
        
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to="#" className='menu-bars' onClick={showSidebar}>
                <AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
                return(
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
                )
            })}
          </ul>
        </nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar;
