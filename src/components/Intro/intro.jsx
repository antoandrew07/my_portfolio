import { useEffect, useRef } from "react";
import './intro.css'
import bg from '../../assests/profile.png'
import Typewriter from 'typewriter-effect';
import { motion, useInView, useAnimation} from "framer-motion"
// import {Link} from 'react-scroll'
const Intro = () => {
  const URL = 'https://drive.google.com/file/d/1feLfzG8zIvFuLlOv5nzxv6AEpTOotcFh/view?usp=drive_link'
  const handleDownload = () => {
    window.open(URL, '_blank');    
  };
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(()=>{
    if(isInView){
      mainControls.start("visible")
    }
  },[isInView ,mainControls])
  return (
    <section >
        <motion.div className="introContent"
            id="intro" 
            ref={ref}
            variants={{
              hidden : {scale:0.8,opacity:0},
              visible : {scale:1,opacity:1}
            }}
            initial = "hidden"
            animate = {mainControls}
            transition={{duration:0.9,delay:0.45}}
        >
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className='introName'>Andrews</span><br /><Typewriter options={{strings:["Web Developer","Frontend Developer"],autoStart:true,loop:true}}/></span>
            <p className="introPara">Crafting digital experiences through innovative web solutions,<br /> I specialize in creating responsive and visually stunning websites </p>
            <button className="btn" onClick={handleDownload} >My CV</button>
            
        </motion.div>
        <img src={bg} alt="bg" className='bg'/>
    </section>
  )
}


export default Intro;