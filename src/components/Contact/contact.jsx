import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import projectImg from '../../assests/project.png';
import projectImg1 from '../../assests/project1.png';
import projectImg2 from '../../assests/project2.png';
import '@fortawesome/fontawesome-free/css/all.css';

const Contact = () => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_daegtz5', 'template_z1hnf5j', form.current, {
        publicKey: 'nRAvnRPSeAmsi9tx3',
      })
      .then(
        () => {
          setEmailStatus('SUCCESS');
          form.current.reset();
          setTimeout(() => {
            setEmailStatus(null);
          }, 3000); // Set timeout for 2 seconds (2000 milliseconds)
        },
        (error) => {
          setEmailStatus('FAILED');
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="projects">
        <h1 className="projectPageTitle">Projects</h1>
        <p className="projectDesc">
          Efficiently managing academic operations, our Collage Management
          System elevates administrative processes, enhances educator
          effectiveness, and enriches student experiences
        </p>
        <div className="projectImgs">
          <img src={projectImg} alt="projectImg" className="projectImg" />
          <img src={projectImg1} alt="projectImg" className="projectImg" />
          <img src={projectImg2} alt="projectImg" className="projectImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form to discuss job opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="your_name" required />
          <input type="email" className="email" placeholder="Your Email" name="your_email" required />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          {emailStatus && (
            <p className={`emailStatus ${emailStatus === 'SUCCESS' ? 'success' : 'failure'}`}>
              {emailStatus === 'SUCCESS' ? 'Email sent successfully!' : 'Failed to send email. Please try again later.'}
            </p>
          )}

          <div className="links">
            <a href="https://www.instagram.com/_anto_andrew_/" target="_blank" rel="noopener noreferrer" className="social-button instagram" title="Instagram">
              <i className="fab fa-instagram"></i>
              <span className="social-button-tooltip">Instagram</span>
            </a>
            <a href="https://github.com/antoandrew07" target="_blank" rel="noopener noreferrer" className="social-button facebook" title="Facebook">
              <i className="fa-brands fa-github"></i>
              <span className="social-button-tooltip">GitHup</span>
            </a>
            <a href="https://www.linkedin.com/in/andrews-micheal-a04272270/" target="_blank" rel="noopener noreferrer" className="social-button linkedin" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
              <span className="social-button-tooltip">LinkedIn</span>
            </a>
            <a href="https://twitter.com/MichealAnd20442" target="_blank" rel="noopener noreferrer" className="social-button twitter" title="Twitter">
              <i className="fa-brands fa-square-x-twitter"></i>
              <span className="social-button-tooltip">Twitter</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
