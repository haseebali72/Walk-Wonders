import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav>
      <hr />
      <div className='container font-roboto text-base'>
        <ul>
          <li><NavLink to='/men'>MEN</NavLink></li>
          <li><NavLink to='/women'>WOMEN</NavLink></li>
          <li><NavLink to='/kids'>KIDS</NavLink></li>
          <li><NavLink to='/bags'>BAGS</NavLink></li>
          <li><NavLink to='/accessories'>ACCESSORIES</NavLink></li>
          <li><NavLink to='/footcare'>FOOT CARE</NavLink></li>
        </ul>
        <div className='searchWrap'>
          <input type='text' placeholder='Search Items' />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
      <hr />
    </nav>
  </>
  )
}

export default Navbar