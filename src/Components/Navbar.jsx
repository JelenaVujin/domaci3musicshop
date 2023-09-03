import React from 'react'
import {PiShoppingCartLight} from 'react-icons/pi';
function Navbar() {
  return (
    <div className='navbar'>
      <a href="">Store</a>
      <input type="text" />
      
      <a href="" className='order-items'>
        <PiShoppingCartLight/>
        <p>Orders</p> 
          
      </a>
    </div>
  )
}

export default Navbar