import React from "react";
// import components
import Menu from "./Menu";

const Base = ({
  title = "My title",
  description = "My description",
  className = "text-dark p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron text-dark text-center mt-5">
          <h2 className="">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        {/* Base functionality */}
        <div className={className}>{children}</div>
        {/* Base functionality ends */}
      </div>
      
    </div>
  );
};

export default Base;
