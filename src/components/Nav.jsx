import React from 'react'


function Nav() {
  return (
    <div className='header-div'>
        <div className='logo-div'>
            <img className='wholefood-img' src="https://logos-world.net/wp-content/uploads/2021/11/Whole-Foods-Emblem.png"/>
        </div>
        <div className='search-div'>
            <input className='search-text' type="search" placeholder='Search In-Store Products'></input>
            <img className="search-icon" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"/>
        </div>
        <div className='findstore-div'>
            <img className='map-icon' src="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc="/>
            <div className='findstore-d'>
                <div className='wfmdiv'><p style={{fontSize:"14px"}}>Whole Foods Market</p></div>
                <div className='fasdiv'><p style={{fontSize:"14px"}}>Find a Store</p></div>
            </div>
        </div>
        <div className='userlogin-div'>
            <img className="user-icon" src="https://previews.123rf.com/images/asmati/asmati1706/asmati170606229/80944205-user-avatar-illustration-anonymous-sign-vector-white-icon-with-soft-shadow-on-transparent-background.jpg"/>
            <div><p>Log In</p></div>
        </div>
        <div className='cart-div'>
            <img className='cart-icon' src="https://t4.ftcdn.net/jpg/00/00/35/57/240_F_355749_FQixT8eoBUVfpqM11P45x7UefKLVAK.jpg"/>
            <div><p>Cart</p></div>
        </div>
    </div>
  )
}

export default Nav