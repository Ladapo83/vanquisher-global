import "./NavBar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const NavBar = ({ openMenu, toggleMenu }) => {
  return (
    <div className="navbar-section">
      <div className="logo-wrapper">
        <img className="logo" src="./images/udulogo.png" alt="" />
        <div className="logo-name">
          <h2>VANQUISHER</h2>
          <p>GLOBAL PROPERTIES</p>
        </div>
      </div>
      <div className="navbar-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div className="toggle-icon" onClick={toggleMenu}>
          {openMenu ? <IoClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
