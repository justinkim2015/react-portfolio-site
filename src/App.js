import './intro/App.css';
import './index.css';
import Me from './intro/me.JPG'

function App() {
  return (
    <section className="profile flex" id="profile-header">
      <div className="ani-container">
        <h2 className="typed-out">I'm Justin Kim.</h2>
      </div>
      <div className="ani-container">
        <h3 className="typed-out-two">Full Stack Web Developer</h3>
      </div>
      <div className="flex-container appear">
        <img src={Me} alt="im justin" className="profile-pic"></img>
        <p className="profile-content ">
          Full-stack developer living in Tokyo who likes to make stuff with
          his computer. My current focus is on delivering elegant and scaleable
          websites via Ruby on Rails. I'm fluent in English and I can speak business level Japanese.
          Please keep scrolling to see some of my projects and get in touch with me!
        </p>
      </div>
    </section>
  );
}

export default App;
