import React from 'react'
import './Skills.css'
import AppDesgn from '../../assets/mylogo.png'
import WebDesign from '../../assets/mylogo.png'
import VideoEditor from '../../assets/mylogo.png'
const Skills = () => {
  return (
  
      <section id='Skills'>
    
       <span id="skilltitle">About Me</span>
       <span id="SkillDescr">Hello! I'm Mohamed Abdi, a passionate and experienced web developer dedicated to crafting clean, functional, and user-friendly websites. With 2 years of experience in the field, I have honed my skills <br /> in front-end and back-end development, as well as UI/UX design. <br />If you're looking for a dedicated web developer who is committed to delivering high-quality solutions tailored to your needs, I'd love to hear from you. Let's collaborate and turn your ideas into reality!</span>
       <div className="skillbars">
        <div className="skillbar">
            <img src={AppDesgn}alt="app d3s" className="skillbarimg" />
            <div className="skillbartext">
                <h2>Javascript</h2>
                <p>i build Tiktak</p>
            </div>
        </div>

        <div className="skillbar">
            <img src={WebDesign}alt="webdes" className="skillbarimg" />
            <div className="skillbartext">
                <h2>HTML/CSS</h2>
                <p>i build 3 website</p>
            </div>
        </div>

        <div className="skillbar">
            <img src={VideoEditor}alt="vdeoeditor" className="skillbarimg" />
            <div className="skillbartext">
                <h2>REACT JS</h2>
                <p>i build portfolio</p>
            </div>
        </div>
       </div>
         
       </section>
   
  )
}

export default Skills
