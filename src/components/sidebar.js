import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (e) => {
    console.log("In handle Click e = ", e.target.textContent);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div
          style={{
            marginLeft: "150px",
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1 style={{ color: "white" }}>My Shift</h1>
          </div>
          <div>
            <AiIcons.AiOutlineInfoCircle
              style={{
                color: "white",
                fontSize: "1.5rem",
                margin: "0 0.5rem ",
              }}
            />
            <FaIcons.FaSignOutAlt
              style={{
                color: "white",
                fontSize: "1.5rem",
                margin: "0 0.5rem ",
              }}
            />
          </div>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName} onClick={handleClick}>
              <Link to={item.path}>
                {item.icon} <span className="title">{item.title} </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
