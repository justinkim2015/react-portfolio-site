import './intro/App.css';
import './base-styles/index.css';
import Me from './intro/me.JPG';
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.section 
      className="profile flex" id="profile-header"

      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{opacity: 0}}
    >
      <div className="ani-container">
        <h2 className="typed-out">I'm Justin Kim.</h2>
      </div>
      <div className="ani-container">
        <h3 className="typed-out-two">Full Stack Web Developer</h3>
      </div>
      <div className="flex-container appear info">
        <img src={Me} alt="im justin" className="profile-pic"></img>
        <p className="profile-content ">
          Full-stack developer living in Tokyo who likes to make stuff with
          his computer.  Currently, I am focused on building applications using Ruby on Rails as a back-end and ReactJS for the front. I'm fluent in English and I can speak business level Japanese. Please check out some of my projects and get in touch!
        </p>
      </div>
    </motion.section>
  );
}

export default App;
