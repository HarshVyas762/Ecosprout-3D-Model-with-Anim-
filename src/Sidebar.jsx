import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll"; // Import Link and Element from react-scroll
import "./Sidebar.css";
import logo from './img/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className='col-lg-12 col-md-12 col-sm-12' style={{textAlign: 'left', paddingLeft:'20px',paddingTop:'37px'}}><img className='logo' src={logo} alt='' /></div>
      <ul className="sidebar-links">
        <li>
          <ScrollLink
            to="sec1"
            smooth={true}
            offset={100} // Adjust this offset to fine-tune the scroll position
            duration={500} // You can adjust the scroll duration
            onClick={closeSidebar}
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="sec2"
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeSidebar}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="sec3"
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeSidebar}
          >
            Blog
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="sec4"
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeSidebar}
          >
            Endeavours
          </ScrollLink>
        </li>
        <li>
        <ScrollLink
            to="sec5"
            smooth={true}
            offset={100}
            duration={500}
            onClick={closeSidebar}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
