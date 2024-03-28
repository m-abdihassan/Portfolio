import React from 'react'
import './Intro.css'
import bg from '../../assets/myimage.png'
const Intro = () => {
  return (
   <section id="intro">
     <img src={bg} alt="profile"  className='bg'/>
    <div className='Introcontent'>
        <span className="Hello">Hello</span>
        <span className="Introtext">I'm  <span className="Introname">Mohamed</span><br /> website Designer</span>
        <p className="intrPara">I'm Skilled web design/Develper</p>

        <button   className="btn">START A PROJECT</button>
        
    </div>
   
   </section>
  )
}

export default Intro
