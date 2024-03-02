import React from "react";
import Certificate from "./components/Certificate/certificate";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/skills/skills";
import { motion, useScroll} from "framer-motion"

function App() {
  const {scrollYProgress} = useScroll();

  
  // const scrollX = useSpring(scrollYProgress)

  return (
    <div className="App">
      
      <Navbar />
      
        <motion.div style={{
          scaleX:scrollYProgress,
          background:'#FF6F00',
          transformOrigin:'left',
          position : 'sticky',
          top : 80,
          width : "100%",
          height:"2px",
          zIndex:1000
        }}/>
        <Intro />
        
        <Skills />
        
        <Certificate />
        <Contact />
      
      <Footer />
    </div>
  );
}

export default App;
