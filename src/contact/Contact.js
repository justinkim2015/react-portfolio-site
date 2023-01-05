import './contact.css'
import Resume from './Justin_Kim_Resume.pdf'
const Contact = () => {
  return ( 
    <section className="contact flex">
      <div className="flex contact-info">
        <div className="contact-info-box">
          <h2 className="contact-header flex" id="contact-header">Contact me</h2>
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
      </div>
    </section>
  )
}

export default Contact