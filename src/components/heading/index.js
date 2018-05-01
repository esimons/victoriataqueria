import React from "react";
import PropTypes from "prop-types";

import "./_index.css";

const Heading = ({ className, level, children }) => {
  const HeadingLevel = `h${level}`;
  return (
    <HeadingLevel className={`Heading__h${level} ${className}`}>
      {children}
    </HeadingLevel>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
  children: PropTypes.node
};

Heading.defaultProps = {
  level: "1"
};

export default Heading;
