import { NavLink } from 'react-router-dom';
import {FaUser, FaRegUser} from 'react-icons/fa';
import { ConnectWallet } from '../ConnectWallet';
import StreamAuth from '../StreamAuth';
import SearchBar from '../search-bar';
export const NavBar = () => {
  return (
    <div className='navbar'>
      <div class='nav-items'>
        
        <h1 class="logo"> EtherStream</h1>

        <div class='wallet-status'>
          <ConnectWallet/> 
          <StreamAuth/> 
        <div/>

      </div>
      </div>
    </div>
  )
}
export default NavBar;
