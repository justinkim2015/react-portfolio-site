import './contact.css'

const Contact = () => {
  return (
    <section class="contact flex">
      <div class="flex contact-info">
        <div class="contact-info-box">
          <h2 class="contact-header flex" id="contact-header">Contact me</h2>
          <p class="contact-message">
            If you would like to work together or get in contact I'm available on LinkedIn or via email!
          </p>
          <p class="contact-email">
            Justinjkim2015@gmail.com
          </p>
          <p class="contact-email resume">
            <a href="assets/resume/Justin_Kim_Resume.pdf" download>Resume</a>
          </p>
          <div class="contact-icons icons">
            <a href="https://github.com/justinkim2015" class="devicon-github-original colored icon"></a>
            <div><a href="https://www.linkedin.com/in/justin-kim-809612ba/" class="devicon-linkedin-plain icon"></a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact