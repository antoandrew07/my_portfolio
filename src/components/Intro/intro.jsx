import React from 'react'
import './intro.css'
import bg from '../../assests/profile.png'

// import {Link} from 'react-scroll'
const Intro = () => {
  const URL = 'https://drive.google.com/file/d/1feLfzG8zIvFuLlOv5nzxv6AEpTOotcFh/view?usp=drive_link'
  const handleDownload = () => {
    window.open(URL, '_blank');
    // const link = document.createElement('a');
    // link.href = URL ; // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    // link.download = 'ANDREWSMICHEAL_RESUME.pdf'; // Replace 'filename.pdf' with the desired name for the downloaded file
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
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