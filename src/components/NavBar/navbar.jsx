import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assests/logos.png'

import menu from '../../assests/mobMenu.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  const [showMenu , setShoeMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link> 
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass="active" to='certificate' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Certificates</Link>
            <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
        </div>
        <button  className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            Contact Me
        </button>

        <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShoeMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu?'flex':'none'}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShoeMenu(false)}>Home</Link> 
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShoeMenu(false)}>Skills</Link>
            <Link activeClass="active" to='certificate' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShoeMenu(false)}>Certificates</Link>
            <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShoeMenu(false)}>Projects</Link>
            <Link activeClass="active" to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShoeMenu(false)}>Contact</Link>
        </div>

    </nav>
  )
}

export default Navbar