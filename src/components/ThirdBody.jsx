import React from 'react'

function ThirdBody() {
  return (
    <div className='thirdbody-div'>
        <div className='thirdside-div'>
          <p style={{fontSize:"60px",color:"black"}}>Dinner? Done! Shop our mealtime shortcuts</p>
          <p style={{color:"black",fontSize:"20px",float:"left",alignContent:"left"}}> Chill out with meals that are ready to go and ready to heat, from chef-inspired solves to frozen faves. Even easier? Get it all with pickup or delivery.</p>
          <button className='seeallsales-button'>Shop now</button>
          <p style={{color:"black",fontSize:"20px",float:"left",alignContent:"left",paddingLeft:"3em"}}>Free pickup for orders $35 or more. Delivery exclusively for Prime members in select ZIP codes.</p>
        </div>
        <div className='pizza-img-div'>
        <img className="pizza-img" src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/cd/9d/303325354218b196690d330da2e9/2022-hmr-hp-ccoverlay-img._TTW_._CR0,0,1080,648_.jpg"/>
        </div> 
      </div>
  )
}

export default ThirdBody