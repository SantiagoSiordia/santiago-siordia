import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import Button from './Button';
import './Navbar.css';

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false);

   const handleOnToggleMenu = () => setMenuOpen(prev => !prev)

   return (
      <nav className="NavbarItems">
         <Link className='myName' to='/'><h1 className="navbar-logo">Santiago<i class="fas fa-user-astronaut" /></h1></Link>
         <div className="menu-icon" onClick={handleOnToggleMenu}>
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
         <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            {
               MenuItems.map((item, index) => <li key={index}>
                  <Link to={item.to} className={item.cName}>{item.title}</Link>
               </li>)
            }
         </ul>
         <Link to='/Contact'><Button children='Contact me' /></Link>
      </nav>
   )
}

export default Navbar;
