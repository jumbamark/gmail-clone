import React from "react";
import "./Section.css";

function Section({Icon, title, color, selected}) {
  return (
    //   If it is selected we are gonna apply a css modifier
    <div
      className={`section ${selected && "section-selected"}`}
      style={{
        borderBottom: `1px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
