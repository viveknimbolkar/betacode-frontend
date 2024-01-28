import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, } from "@fortawesome/free-brands-svg-icons";
import "./CssEditor.css"
import { Editor } from "@monaco-editor/react";
function CssEditor({code, onChange}) {
  return (
    <div className="css-container">
      <label className="css-label">
        <FontAwesomeIcon className="css-icon" icon={faCss3} />
        Css
      </label>
      <Editor
          height="400px"
          width="100%"
          defaultLanguage="css"
          value={code}
          theme="vs-dark"
          onChange={onChange}
        />
    </div>
  );
}

export default CssEditor;
