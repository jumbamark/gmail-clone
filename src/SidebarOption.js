import React from "react";
import "./SidebarOption.css";

function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;

// inside of sidebarOption: If the className was selected then sidebar option is gonna have some stuff
// If you pass in the selected prop then I'm gonna add in active (BEM naming convention- if you modify the class - modifier)
