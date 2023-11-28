import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu-div'>
        <Link to="/">
            <div className='menu'>Browse In-Store</div>
        </Link>
        <Link to="/">
            <div className='menu'>Weekly Sales</div>
        </Link>
        <Link to="/">
            <div className='menu'>Grocery Pickup & Delivery</div>
        </Link>
        <Link to="/">
            <div className='menu'>Catering</div>
        </Link>
        <Link to="/">
            <div className='menu'>Shipped to You</div>
        </Link>
        <Link to="/">
            <div className='menu'>Lunch & Dinner to Go</div>
        </Link>
        <Link to="/">
            <div className='menu'>Recipes</div>
        </Link>
    </div>
  )
}

export default Menu