import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesNote = technologies.map(note => <span key={note}>{note}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesNote}</div>
    </div>
  );
}

export default ProjectItem;
