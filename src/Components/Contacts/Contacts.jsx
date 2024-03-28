import React from 'react'
import './Contacts.css'
const Contacts = () => {
  return (
    <div className='Contact'>
        <h1 className="contactpagetit">Contact Me</h1> 
        <span className="contactDesc">Please fill out the form below</span>
        <form action="" className="contactform">
            <input type="text"  className="name" placeholder='your name' />
            <input type="email" className="email" placeholder='your email'/>
            <textarea className='msg' name="message"  rows="5" placeholder='your message'></textarea>

        </form>
         <button className="sumbitbtn">Submit</button>

      <footer>
        <h6 className='ftr'>Copy-right@Mohamed Abdi</h6>
      </footer>
    </div>
  )
}

export default Contacts
