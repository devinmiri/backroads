import Logo from "../assets/images/logo.svg";

import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={Logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" childClass="nav-link" />

        <SocialLinks parentClass="nav-icons" childClass="nav-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
