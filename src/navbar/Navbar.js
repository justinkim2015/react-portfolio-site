import './navbar.css';
import Favicon from './favicon.jpg'

function Navbar() {
  return (
  <nav class="navbar sticky flex">
    <div class="container">
      <input type="checkbox" id="hamburger-input" class="burger-shower" />
      <label id="hamburger-menu" for="hamburger-input" class="padding">
        <nav id="dropdown-menu">
          <ul class="links">
            <li><a href="#profile-header">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects-header">Projects</a></li>
            <li><a href="#contact-header">Contact</a></li>
          </ul>
        </nav>
      </label>
    </div>
    <div class="desktop-container flex">
      <img src={Favicon} alt="logo" class="logo"></img>
      <ul class="links">
        <li><a href="#profile-header">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects-header">Projects</a></li>
        <li><a href="#contact-header">Contact</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
