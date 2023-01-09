import "./projects.css";

const Project = ({ image, alt, title, live, git, desc }) => {
  return (
    <div className="project-card flex">
      <div className='project-imagee'>
        <div class="overlay">
          <h1>Hello</h1>
        </div>
      </div>
      {/* <img src={image} alt={alt} className="project-image"></img> */}
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
  );
}

export default Project;
