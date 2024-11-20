import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-icons">
        <div className="icon yoga"></div>
        <div className="icon swimming"></div>
        <div className="icon cycling"></div>
        <div className="icon weightlifting"></div>
      </div>
      <div className="sidebar-footer">Copyright SportSee 2020</div>
    </aside>
  );
};

export default Sidebar;
