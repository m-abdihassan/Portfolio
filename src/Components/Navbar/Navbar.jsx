import React from 'react'
import './Navbar.css'
import logo1 from '../../assets/mylogo.png'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo1}alt="" className='logo' />
     <div className="navmenue">
     
     <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-80} duration={500} className='Listitems'>Projects</Link>
     <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-80} duration={500} className='Listitems'>About Me</Link>
     <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-80} duration={500} className='Listitems'>Contact Me</Link>
     
     </div>
    </nav>
  )
}
 
export default Navbar
