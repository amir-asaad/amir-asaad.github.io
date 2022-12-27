import React from 'react';

import '../styles/link.css';

interface Props {
  text: string;
  linkUrl: string;
  imageSrc: string;
}

const Link: React.FC<Props> = (props) => {
  return (
    <a
      className="link | d-flex px-4 align-items-center flex-wrap justify-content-center"
      href={props.linkUrl}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={props.imageSrc}
        alt={props.text}
      />
      <p>{props.text}</p>
    </a>
  );
};

export default Link;
