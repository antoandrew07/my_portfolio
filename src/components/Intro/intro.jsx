import React from 'react'
import './intro.css'
import bg from '../../assests/profile.png'
import Typewriter from 'typewriter-effect';
// import {Link} from 'react-scroll'
const Intro = () => {
  const URL = 'https://drive.google.com/file/d/1feLfzG8zIvFuLlOv5nzxv6AEpTOotcFh/view?usp=drive_link'
  const handleDownload = () => {
    window.open(URL, '_blank');    
  };
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Andrews</span><br /><Typewriter options={{strings:["Web Developer","Frontend Developer"],autoStart:true,loop:true}}/></span>
            <p className="introPara">Crafting digital experiences through innovative web solutions,<br /> I specialize in creating responsive and visually stunning websites </p>
            <button className="btn" onClick={handleDownload} >My CV</button>
            
        </div>
        <img src={bg} alt="bg" className='bg'/>
    </section>
  )
}


export default Intro;