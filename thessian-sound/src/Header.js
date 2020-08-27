import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header(props){
  return(
    <div id="header">
      <Link to="/userlibrary">
        <button>User Library</button>
      </Link>
      <nav>
        <NavLink to="/">
          <button> Home </button>
        </NavLink>
        <NavLink to="/store">
          <button> Beat Store </button>
        </NavLink>
        <NavLink to="/services">
          <button> Services </button>
        </NavLink>
        <NavLink to="/about">
          <button> About</button>
        </NavLink>
        <NavLink to="/contact">
          <button> Contact Us</button>
        </NavLink>
      </nav>
    </div>
  )
}

export default Header;