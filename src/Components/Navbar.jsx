import React from 'react'
import {PiShoppingCartLight} from 'react-icons/pi';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Store</Link>
      <input type="text" className='searchBar' />
      
      <Link to="/orders" className='order-items'>
        <PiShoppingCartLight/>
        <p>Orders</p> 
          
      </Link>
    </div>
  )
}

export default Navbar