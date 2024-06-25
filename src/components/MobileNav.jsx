import "./MobileNav.css";
import { RxHamburgerMenu } from "react-icons/rx";
const MobileNav = ({ openMenu, toggleMenu }) => {
  //   const [isNavbarShowing, setsIsNavbarShowing] = useState(true);

  //   function handeleClick() {
  //     setsIsNavbarShowing(!isNavbarShowing);
  //   }
  return (
    <div
      className={openMenu ? "mobile-nav-section active" : "mobile-nav-section "}
    >
      <div className="mobile-navlinks">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
