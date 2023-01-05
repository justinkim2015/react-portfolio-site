import './navbar.css';
import Favicon from './favicon.jpg'
import MyLink from '../components/MyLink'

function Navbar() {
  const mobileLinks = () => {
    return (
      <div className="container">
        <input type="checkbox" id="hamburger-input" className="burger-shower" />
        <label id="hamburger-menu" htmlFor="hamburger-input" className="padding">
          <nav id="dropdown-menu">
            <ul className="links">
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
      <div className="desktop-container flex">
        <img src={Favicon} alt="logo" className="logo"></img>
        <ul className="links">
          <MyLink dest='/' content='About' />
          <MyLink dest='/skills' content='Skills' />
          <MyLink dest='/projects' content='Projects' />
          <MyLink dest='/contact' content='Contact' />
        </ul>
      </div>
    )
  }
  
  return (
  <nav className="navbar sticky flex">
    {mobileLinks()}
    {desktopLinks()}
  </nav>
  );
}

export default Navbar;
