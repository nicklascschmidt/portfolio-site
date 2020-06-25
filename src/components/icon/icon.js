import React from "react";

const IconLink = ({ hrefLink, classNameProp, title, children }) => {
  return (
    <a
      className={classNameProp}
      href={hrefLink}
      title={title}
      target='_blank'
      rel="noopener noreferrer"
    >
      { children }
    </a>
  );
}

export default IconLink;


