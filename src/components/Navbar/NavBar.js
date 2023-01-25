import { NavLink } from 'react-router-dom';
import {FaUser, FaRegUser} from 'react-icons/fa';
import { ConnectWallet } from '../ConnectWallet';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        <h2>Ethereal</h2>
        <input class='search-input' type='text' placeholder='Search ...' />

        <NavLink to="/" >
          <p class='nav-item'><FaUser/></p>
        </NavLink>
        
        <NavLink to="/c" >
          <p class='nav-item'>C</p>
        </NavLink><NavLink to="/d"d >
          <p class='nav-item'>D</p>
        </NavLink>
      
        {/* https://docs.family.co/connectkit/theming#additional-options */}
        <ConnectWallet/> 
      </div>
    </div>
  )
}
export default NavBar;
