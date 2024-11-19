import { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { RiContactsBookFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  function OpenSidebar() {
    setIsHovered(false);
  }
  function CloseSidebar() {
    setIsHovered(true);
  }
  return (
    <div
      className="sidebar-container"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered ? <BigSideBar /> : <SmallSidebar />}
    </div>
  );
}

function SmallSidebar() {
  return (
    <div className="small-sidebar-container">
      <div>
        <Link to="">
          <RiContactsBookFill style={{ color: " #14204a" }} />
        </Link>
      </div>
      <div>
        <Link to="">
          <IoMdSettings style={{ color: " #14204a" }} />
        </Link>
      </div>
      <div>
        <Link to="">
          <IoIosHelpCircle style={{ color: " #14204a" }} />
        </Link>
      </div>
    </div>
  );
}

function BigSideBar() {
  return (
    <div className="big-sidebar-container">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <NavLink
          to=""
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <RiContactsBookFill style={{ color: " #14204a" }} />
          <span>Contacts</span>
        </NavLink>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <NavLink
          to=""
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IoMdSettings style={{ color: " #14204a" }} />
          <span>Settings</span>
        </NavLink>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <NavLink
          to=""
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IoIosHelpCircle style={{ color: " #14204a" }} />
          <span>Help</span>
        </NavLink>
      </div>
    </div>
  );
}
