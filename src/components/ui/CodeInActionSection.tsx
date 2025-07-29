import React from "react";
import CodeInAction from "./CodeInAction";
import { features } from "../../data/features";
import "./CodeInActionSection.css";

const CodeInActionSection = () => {
  return (
    <section id="code-in-action" className="code-section">
      <div className="code-container">
        <h2 className="code-title">Code in Action</h2>
        <div className="code-grid">
          {features.map((feature, index) => (
            <CodeInAction
              key={index}
              title={feature.title}
              description={feature.description}
              mediaSrc={feature.mediaSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeInActionSection;
