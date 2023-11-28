import React from 'react'

function Footerbody() {
  return (
    <div className='footer-div'>
        <div className='shopping-footer-div'>
            <p style={{fontWeight:"bold",fontSize:"20px"}}>Shopping</p>
            <ul>
                <li>Weekly Sales</li>
                <li>Browse In-Store</li>
                <li>Grocery Pickup & Delivery</li>
                <li>Catering</li>
                <li>Shipped to You</li>
                <li>Amazon Prime at Whole Foods</li>
                <li>Gift Cards</li>
                <li>Special Diets</li>
                <li>Tips and Ideas</li>
                <li>Order Oline</li>
            </ul>
        </div>
        <div className='mission-footer-div'>
            <p style={{fontWeight:"bold",fontSize:"20px"}}>Mission in Action</p>
            <ul>
                <li>Responsible Sourcing</li>
                <li>Quality Standards</li>
                <li>Community Giving</li>
                <li>Environmental Stewardship</li>
            </ul>
        </div>
        <div className='about-footer-div'>
            <p style={{fontWeight:"bold",fontSize:"20px"}}>About</p>
            <ul>
                <li>About Whole Foods Market</li>
                <li>Our Values</li>
                <li>Departments</li>
                <li>Information and Potential Suppliers</li>
                <li>Careers</li>
                <li>Newsroom</li>
            </ul>
        </div>
        <div className='needhelpdiv'>
            <div style={{color:"white"}}>Need Help?</div>
            <div style={{color:"white"}}>Visit Customer Care</div>
            <div>
                <p style={{color:"white"}}>Connect With Us</p>
                <div className='connectdiv'>
                    <div>
                        <img className='facebookicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLJP2fP32ZvZNFcuwFOZpIMgg0s3B7bqDdBWMvLXV5g&s"/>
                    </div>
                    <div>
                        <img className='twittericon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbAF3oMGusYqooYnDM1Pt1jJWF4b0JaBd475M-KpTRw&s"/>
                    </div>
                    <div>
                        <img className='instagramicon' src="https://t3.ftcdn.net/jpg/03/00/02/08/360_F_300020899_N275TqND1g3LDqinhrvLhDpCy4RjYG8m.jpg"/>
                    </div>
                    <div>
                        <img className='pinteresticon' src="https://i.pinimg.com/originals/57/36/fd/5736fd67958b680d3aa824d74195058b.jpg"/>
                    </div>
                    <div>
                        <img className='youtubeicon' src="https://i.pinimg.com/originals/0e/17/41/0e1741bd58d614ed7f38950948d3f7e0.jpg"/>
                    </div>
                </div>
            <div className='signupbutton'>Sign up for email</div>    

            </div>
        </div>
    </div>
  )
}

export default Footerbody