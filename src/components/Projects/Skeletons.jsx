import React from "react";
import ContentLoader from "react-content-loader";
import "./Projects.css";

const Skeletons = props => (
  <ContentLoader
    speed={2}
    viewBox="0 0 460 315"
    height={315}
    width={460}
    {...props}
    backgroundColor="#27292E"
    foregroundColor="#2A2D32"
    className="skeletons"
  >
    <rect x="16" y="17" rx="10" ry="10" width="460" height="315" />
  </ContentLoader>
);

export default Skeletons;
