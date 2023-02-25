import { NavLink } from 'react-router-dom';
import {FaUser, FaRegUser} from 'react-icons/fa';
import { ConnectWallet } from '../ConnectWallet';
import StreamAuth from '../StreamAuth';

export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        <h2>Ethereal</h2>
        <input class='search-input' type='text' placeholder='Search ...' />

        <NavLink to="/" >
          <p class='nav-item'><FaUser/></p>
        </NavLink>
        
        {/* <NavLink to="/login" >
          <p class='nav-item'>Log In</p>
        </NavLink><NavLink to="/unauthorizedpage"d >
          <p class='nav-item'>UnauthorizedPage</p>
        </NavLink> */}
      
        {/* https://docs.family.co/connectkit/theming#additional-options */}
        <ConnectWallet/> 
        <StreamAuth/> 

      </div>
    </div>
  )
}
export default NavBar;
