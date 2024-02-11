import React from 'react'
import './intro.css'
import bg from '../../assests/profile.png'

// import {Link} from 'react-scroll'
const Intro = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1LcswAoz8NHoyUd6SVMbo8FG6ZnBcQcpq'; // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    link.download = 'ANDREWSMICHEAL_RESUME.pdf'; // Replace 'filename.pdf' with the desired name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Andrews</span><br />Web Developer</span>
            <p className="introPara">Crafting digital experiences through innovative web solutions,<br /> I specialize in creating responsive and visually stunning websites </p>
            <button className="btn" onClick={handleDownload} >My CV</button>
            
        </div>
        <img src={bg} alt="bg" className='bg'/>
    </section>
  )
}


export default Intro;