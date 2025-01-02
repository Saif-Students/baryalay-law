import { useState } from "react";
import {  NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Importing the cross icon
import {logo} from "../../assets"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div id="navbar" className="bg-white sticky top-0 left-0   text-primary-color py-4 px-6 md:px-16 flex items-center justify-between z-50 ">
      {/* logo */}
      {/* <h2 className="text-[24px] md:text-[35px]">Baryalay.Law</h2> */}
      <img className="w-[200px]"  src={logo} alt="logo" />

      {/* Menu Icon (for mobile view) */}
      <div className="md:hidden z-20">
        {menuOpen ? (
          <FiX
            size={30}
            onClick={() => setMenuOpen(false)} // Close menu when clicked
            className="text-primary-color cursor-pointer"
          />
        ) : (
          <FiMenu
            size={30}
            onClick={() => setMenuOpen(true)} // Open menu when clicked
            className="text-primary-color cursor-pointer"
          />
        )}
      </div>

      {/* right - nav links */}
      <div
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 text-[16px] absolute md:static top-[40px] left-0 w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 transition-all duration-300 ease-in-out z-10 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        } md:opacity-100 md:translate-y-0`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          About Us
        </NavLink>
        <NavLink
          to="/practice-area"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          Practice Areas and Industries
        </NavLink>
        <NavLink
          to="/news-and-insights"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          News And Insights
        </NavLink>
        <NavLink
          to="/partner-profile"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          Our People
        </NavLink>
        <NavLink
          to="/client"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          Our Clients
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-accent-color" : "text-primary-color"
          }
          onClick={handleLinkClick} // Close menu when clicked
        >
          Contact Us
        </NavLink>
   
      </div>
    </div>
  );
}

export default Navbar;
