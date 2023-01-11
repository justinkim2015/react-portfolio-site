import './contact.css'
import Resume from './Justin_Kim_Resume.pdf'
import { motion } from 'framer-motion'
import Form from './ContactForm'

const Contact = () => {
  return ( 
    <motion.section 
      className="contact flex"
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{opacity: 0}}
    >

      <div className="contact-info-box appear-now">
        <h2 className="contact-header flex" id="contact-header">Contact</h2>
        <p className="contact-message">
          If you would like to work together or get in contact I'm available on LinkedIn or via email!
        </p>
        <p className="contact-email">
          Justinjkim2015@gmail.com
        </p>
        <p className="contact-email resume">
          <a href={Resume} download>Resume</a>
        </p>
        <div className="contact-icons icons">
          <a href="https://github.com/justinkim2015" className="devicon-github-original colored icon"></a>
          <div><a href="https://www.linkedin.com/in/justin-kim-809612ba/" className="devicon-linkedin-plain icon"></a></div>
        </div>
      </div>
      <Form />
    </motion.section>
  )
}

export default Contact