import { NavLink } from 'react-router-dom';
// import './navbar.css';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        <NavLink to="/" >
          <p class='nav-item'>A</p>
        </NavLink>

        <div class='nav-items-line'>
          
        </div>
        <NavLink to="/b" >
          <p class='nav-item'>B</p>
        </NavLink><NavLink to="/c" >
          <p class='nav-item'>C</p>
        </NavLink><NavLink to="/d"d >
          <p class='nav-item'>D</p>
        </NavLink><NavLink to="/e" >
          <p class='nav-item'>E</p>
        </NavLink>

      </div>
    </div>
  )
}
export default NavBar;
