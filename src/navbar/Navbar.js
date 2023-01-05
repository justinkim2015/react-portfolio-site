import './navbar.css';
import Favicon from './favicon.jpg'
import MyLink from '../components/MyLink'

function Navbar() {
  const mobileLinks = () => {
    return (
      <div class="container">
        <input type="checkbox" id="hamburger-input" class="burger-shower" />
        <label id="hamburger-menu" htmlFor="hamburger-input" class="padding">
          <nav id="dropdown-menu">
            <ul class="links">
            <MyLink dest='/' content='About' />
            <MyLink dest='/skills' content='Skills' />
            <MyLink dest='/projects' content='Projects' />
            <MyLink dest='/contact' content='Contact' />
            </ul>
          </nav>
        </label>
      </div>
    )
  }

  const desktopLinks = () => {
    return(
      <div class="desktop-container flex">
        <img src={Favicon} alt="logo" class="logo"></img>
        <ul class="links">
          <MyLink dest='/' content='About' />
          <MyLink dest='/skills' content='Skills' />
          <MyLink dest='/projects' content='Projects' />
          <MyLink dest='/contact' content='Contact' />
        </ul>
      </div>
    )
  }
  
  return (
  <nav class="navbar sticky flex">
    {mobileLinks()}
    {desktopLinks()}
  </nav>
  );
}

export default Navbar;
