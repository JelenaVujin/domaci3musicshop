import React from 'react'
import {PiShoppingCartLight} from 'react-icons/pi';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">Store</Link>
     
      
      <Link to="/orders" className='order-items'>
        <PiShoppingCartLight/>
        <p>Orders</p> 
          
      </Link>
      <input type="text" className='searchBar' />
    </div>
  )
}

export default Navbar