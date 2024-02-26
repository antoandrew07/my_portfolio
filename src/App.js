import { useEffect, useRef } from "react";
import Certificate from "./components/Certificate/certificate";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/skills/skills";
import { motion, useInView, useScroll} from "framer-motion"

function App() {
  const {scrollYProgress} = useScroll();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(()=>{
    //console.log(isInView);
  },[isInView])
  const style = {
    opacity: isInView? 1:0,
    transition: "5s opacity"
  }
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
      <div
        ref={ref}
        style={style}
      >
        <Skills />
      </div>
      <Certificate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
