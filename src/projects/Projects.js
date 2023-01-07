import './projects.css'
import WeatherApp from './photos/Homepage.png'
import Karaoke from './photos/newsong.gif'
import RailsBook from './photos/login.gif'
import Chess from './photos/rubychess.png'
import Project from './Project'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.section
    
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{opacity: 0}}
    >
      <h2 className="project-header flex" id="projects-header">Projects</h2>
      <div className="projects flex grid">
        <Project image={RailsBook} 
                 alt = 'RailsBook Gif'
                 title='RailsBook' 
                 live='https://rails-book.onrender.com/' 
                 git='https://github.com/justinkim2015/social-media-clone#summary' 
                 desc='I made this with Ruby on Rails and hosted on Render.  This is a social media site where one can post, add friends, and upload photos.'/>
        
        <Project image={Karaoke} 
                 alt = 'Karaoke Planner Gif'
                 title='Karaoke Planner(Currently Mobile Only)' 
                 live='http://karaoke.justins-portfolio.live' 
                 git='https://github.com/justinkim2015/karaoke-song-organizer#karaoke-song-organizer' 
                 desc='This Ruby on Rails application keeps track of karaoke songs and stores.  By using several Google APIs, Genius API, an IP geocoding API, 
                       and webscraping it is able to find and save song lyrics and nearby karaoke stores.'/>

        <Project image={WeatherApp}
                 alt = 'Weather App screenshot' 
                 title='iPad Weather App' 
                 live='https://justinkim2015.github.io/ipad-weather-app/' 
                 git='https://github.com/justinkim2015/ipad-weather-app' 
                 desc='This is a single-page weather application made with ReactJS and vanilla CSS. By leveraging the data of a Geolocation API and a weather API 
                       this app shows you real-time data of the weather in your area.'/>

        <Project image={Chess} 
                 alt = 'Chess screenshot'
                 title='2-Player CLI Chess' 
                 live='#' 
                 git='https://github.com/justinkim2015/chess' 
                 desc='This is a two-player chess game built in Ruby using OOP principles.'/>
        </div>
    </motion.section>
  )
}

export default Projects