import React from 'react'
import './skills.css'
import html from '../../assests/html.png'
import css from '../../assests/css.png'
import js from '../../assests/js.png'
import mern from '../../assests/mern.png'
const Skills = () => {
  return (
    <section id="skills"
    

    >
        <span className="skillTitle">My Skills</span>
        <span className="skillDesc">Passionate MERN Stack developer adept at crafting robust and scalable web applications, proficient in MongoDB, Express.js, React.js, and Node.js.Dedicated to delivering dynamic user experiences through expert utilization of MERN technologies, with a strong focus on efficient backend development and responsive frontend design.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={html} alt="Html" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>HTML5</h2>
                </div>
                <div className="percentageCircles">
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                </div>   
            </div>
            <div className="skillBar">
                <img src={css} alt="Css" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>CSS3</h2>
                </div>
                <div className="percentageCircles">
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                    <div className="percentageCircle"></div>
                </div>  
            </div>
            <div className="skillBar">
                <img src={js} alt="Js" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>JavaScript</h2>
                    
                </div>
                <div className="percentageCircles">
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                </div>  
            </div>
            <div className="skillBar">
                <img src={mern} alt="Mern" className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>MERN Stack</h2>
                </div>
                <div className="percentageCircles">
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                    <div className="percentageCircle c3"></div>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default Skills