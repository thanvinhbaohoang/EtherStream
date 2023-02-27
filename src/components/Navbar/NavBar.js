import { NavLink } from 'react-router-dom';
import {FaUser, FaRegUser} from 'react-icons/fa';
import { ConnectWallet } from '../ConnectWallet';
import StreamAuth from '../StreamAuth';
import SearchBar from '../search-bar';
export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        <ConnectWallet/> 
        <StreamAuth/> 
      </div>
    </div>
  )
}
export default NavBar;
