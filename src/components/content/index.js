import React from "react";

import "./_index.css";

const Content = ({ className, children }) => {
  return <div className={`Content ${className}`}>{children}</div>;
};

export default Content;
