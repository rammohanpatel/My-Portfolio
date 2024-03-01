import React from 'react';
// import {client} from './lib/client.js'
import About from './Components/about.jsx'
import Projects from './Components/project.jsx'
import Technologies from './Components/Technologies.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'


const App = () => {
  return (
    <div>     
       <About projects={'#projects'} />
       <Technologies /> 
       <Projects />      
       <Contact /> 
       <Footer />  
    </div>
  )
}

export default App

