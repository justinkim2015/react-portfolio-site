import './projects.css'
import WeatherApp from './Homepage.png'
import Karaoke from './newsong.gif'
import RailsBook from './login.gif'
import Chess from './rubychess.png'

const Projects = () => {
  return (
    <div>
      <h2 class="project-header flex" id="projects-header">Projects</h2>
      <section class="projects flex grid">
        <div class="project-card flex">
          <img src={RailsBook} alt="facebook" class="project-image"></img>
          <div class="project-body flex">
            <div class="project-name">
              <h3>RailsBook</h3>
              <div class="icon-container">
                <a href="https://rails-book.onrender.com/">Live</a>
                <a href="https://github.com/justinkim2015/social-media-clone#summary" class="devicon-github-original colored icon-small"></a>
              </div>
            </div>
            <div class="project-description">
              I made this with Ruby on Rails and hosted on Render.  This is a social media site where one can post, add friends, and upload photos.
            </div>
          </div>
        </div>
        <div class="project-card flex">
          <img src={Karaoke} alt="facebook" class="project-image"></img>
          <div class="project-body flex">
            <div class="project-name">
              <h3>Karaoke Planner(Currently Mobile Only)</h3>
              <div class="icon-container">
                <a href="http://karaoke.justins-portfolio.live">Live</a>
                <a href="https://github.com/justinkim2015/karaoke-song-organizer#karaoke-song-organizer" class="devicon-github-original colored icon-small"></a>
              </div>
            </div>
            <div class="project-description">
              This Ruby on Rails application keeps track of karaoke songs and stores.  By using several Google APIs, Genius API, an IP geocoding API, and webscraping it is able to find and save song lyrics and nearby karaoke stores.
            </div>
          </div>
        </div>
      
        <div class="project-card flex">
          <img src={WeatherApp} alt="facebook" class="project-image"></img>
          <div class="project-body flex">
            <div class="project-name">
              <h3>iPad Weather App</h3>
              <div class="icon-container">
                <a href="https://github.com/justinkim2015/ipad-weather-app">Live</a>
                <a href="https://github.com/justinkim2015/ipad-weather-app" class="devicon-github-original colored icon-small"></a>
              </div>
            </div>
            <div class="project-description">
              This is a single-page weather application made with ReactJS and vanilla CSS.
              By leveraging the data of a Geolocation API and a weather API this app shows you real-time data of the weather in your area.
            </div>
          </div>
        </div>
        <div class="project-card flex">
          <img src={Chess} alt="facebook" class="project-image"></img>
          <div class="project-body flex">
            <div class="project-name">
              <h3>Chess</h3>
              <div class="icon-container">
                <a href="https://github.com/justinkim2015/chess" class="devicon-github-original colored icon-small"></a>
              </div>
            </div>
            <div class="project-description">
              This is a two-player chess game built in Ruby using OOP principles.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects