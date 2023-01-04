import './intro/App.css';
import Me from './intro/me.JPG'
import './index.css';

function App() {
  return (
    <section class="profile flex" id="profile-header">
      <div class="ani-container">
        <h2 class="typed-out">I'm Justin Kim.</h2>
      </div>
      <div class="ani-container">
        <h3 class="typed-out-two">Full Stack Web Developer</h3>
      </div>
      <div class="flex-container appear">
        <img src={Me} alt="picture-of-justin" class="profile-pic"></img>
        <p class="profile-content ">
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
