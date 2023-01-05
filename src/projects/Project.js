import './projects.css'

const Project = ({image, alt, title, live, git, desc}) => {
  return (
    <div className="project-card flex">
      <img src={image} alt={alt} className="project-image"></img>
      <div className="project-body flex">
        <div className="project-name">
          <h3>{title}</h3>
          <div className="icon-container">
            <a href={live}>Live</a>
            <a href={git} className="devicon-github-original colored icon-small"></a>
          </div>
        </div>
        <div className="project-description">
          {desc}
        </div>
      </div>
    </div>
  )
}

export default Project