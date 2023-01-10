import "./projects.css";

const Project = ({ image, alt, title, live, git, desc, identity }) => {


  const toggle = () => {
    let overlayTitle = document.querySelector(`#${identity}-title`)
    let overlayText = document.querySelector(`#${identity}-text`)
    overlayTitle.classList.toggle('hidden')
    overlayText.classList.toggle('hidden')
  }

  return (
    <div className="project-card flex">
      <div className='project-desktop'>
        <div className="overlay" onMouseEnter={toggle} onMouseLeave={toggle}>
          <h1 className='overlay-title hidden' id={`${identity}-title`} >{title}</h1>
          <p className='overlay-text hidden' id={`${identity}-text`}>{desc}</p>
        </div>

        <div className="project-card-heading">
            <h3 className='project-title'>{title}</h3>
            <div className="icon-container">
              <a href={live}>Live</a>
              <a
                href={git}
                className="devicon-github-original colored icon-small"
              ></a>
            </div>
          </div>
      </div>

      <div className="mobile tablet">
        <img src={image} alt={alt} className="project-image"></img>
        <div className="project-body flex">
          <div className="project-card-heading">
            <h3 className='project-title'>{title}</h3>
            <div className="icon-container">
              <a href={live}>Live</a>
              <a
                href={git}
                className="devicon-github-original colored icon-small"
              ></a>
            </div>
          </div>
          <div className="project-description">{desc}</div>
        </div>
      </div>
    </div>
  );
}

export default Project;
