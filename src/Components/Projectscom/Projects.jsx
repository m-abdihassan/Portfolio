import React from 'react'
import './Projects.css'

import ff from '../../assets/myecomerce.jpg'
import jj from '../../assets/my.jpg'
import E_website from '../../assets/my2.jpg'
import ww from '../../assets/my.jpg'
import ss from '../../assets/porti.png'
const Projects = () => {
  return (
    <section id="Projects">
        <h2 className="projectstitle">My projects</h2>
        <span className="projectsDescr">Each of these projects demonstrates different aspects of my skills and expertise as a web developer. <br /> Make sure to include detailed descriptions,</span>
       <div className="projectsimgs">
       <img src={ss} alt="" className="projectsimg" />
       <img src={ff} alt="" className="projectsimg" />
        <img src={jj} alt="" className="projectsimg" />
        <img src={E_website} alt="" className="projectsimg" />
        <img src={ww} alt="" className="projectsimg" />
        
        
       </div>
       <button className="projectsbtn">see more..</button>
    </section>
  )
}

export default Projects
