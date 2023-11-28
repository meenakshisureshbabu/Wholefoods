import React from 'react'
import Secondbody from './Secondbody'
import ThirdBody from './ThirdBody'
import Footerbody from './Footerbody'


function Wholefoodsbody() {
  return (
    <div className='wholebody-div'>
      <div className='body-div'>
        <div className='side-div'>
          <p style={{fontSize:"60px",color:"black"}}>Act Fast: Hot 18" Cheese Pizza, $10 Each</p>
          <p style={{color:"black",fontSize:"20px",float:"left",alignContent:"left"}}> Prime members: Pounce on a sizzling whole pizza the whole family will love for just $10 through 11/28. Plus, save on seasonal ingredients and favorites to pair with your pie.</p>
          <button className='seeallsales-button'>See All sales</button>
          <p style={{color:"black",fontSize:"20px",float:"left",alignContent:"left",paddingLeft:"3em"}}>Valid 11/24–11/28/23. U.S. only. Restrictions apply.</p>
        </div>
        <div className='pizza-img-div'>
        <img className="pizza-img" src="https://as2.ftcdn.net/v2/jpg/02/01/48/23/1000_F_201482357_nD9wRrMkCubmaS8m7bAD1MzaIa9h6Hej.jpg"/>
        </div> 
      </div>
      <Secondbody/>
      <ThirdBody/>
      <Footerbody/>
    </div>
    
  )
}

export default Wholefoodsbody