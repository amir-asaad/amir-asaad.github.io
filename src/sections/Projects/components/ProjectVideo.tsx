import React from 'react';

interface Props {
  videoSrc: string;
}

const ProjectVideo: React.FC<Props> = (props) => {
  return (
    <video
      autoPlay
      loop
      muted
    >
      <source
        src={props.videoSrc}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default ProjectVideo;
