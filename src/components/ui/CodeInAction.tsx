import React from "react";
import "./CodeInAction.css";

interface CodeInActionProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaAlt?: string;
}

const CodeInAction: React.FC<CodeInActionProps> = ({
  title,
  description,
  mediaSrc,
  mediaAlt = "Feature demonstration",
}) => {
  const isVideo = mediaSrc.endsWith(".mp4");

  return (
    <div className="card-wrapper">
      <div className="card">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <div className="media-wrapper">
          {isVideo ? (
            <video src={mediaSrc} controls preload="metadata" className="media" />
          ) : (
            <img src={mediaSrc} alt={mediaAlt} className="media" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeInAction;
