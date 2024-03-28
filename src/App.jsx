import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Homepage/Intro'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projectscom/Projects'
import Contacts from './Components/Contacts/Contacts'

const App = () => {
  return (
    <div className='container'> 
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
