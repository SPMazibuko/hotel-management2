import React from 'react';
import {Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import Navlinks from './Navlinks';

function Header(){
  const history = useHistory();
  return(
    <div className="root">
        <div className="header">
          <div className='logo'>
            <h4>Hotel Management</h4>
          </div>
          <div className="search">
                <input type="text" className="searchInput" />
                <SearchIcon className="searchIcon" />
          </div>
            <span><Link to="signup" className='links'>Register/Login</Link></span>
      </div>
      <Navlinks />
    </div>
  )
}//Complete

export default Header;