import { NavLink } from 'react-router-dom';
import {FaUser, FaRegUser} from 'react-icons/fa';
import { ConnectWallet } from '../ConnectWallet';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        <NavLink to="/" >
          <p class='nav-item'><FaUser/></p>
        </NavLink>
        
        <input class='search-input' type='text' placeholder='Search ...' />

        <NavLink to="/c" >
          <p class='nav-item'>C</p>
        </NavLink><NavLink to="/d"d >
          <p class='nav-item'>D</p>
        </NavLink><NavLink to="/e" >
          <p class='nav-item'>E</p>
        </NavLink>
        {/* https://docs.family.co/connectkit/theming#additional-options */}
        <ConnectWallet/> 
      </div>
    </div>
  )
}
export default NavBar;
