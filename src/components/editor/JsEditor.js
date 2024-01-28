import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import "./JsEditor.css"
import { Editor } from "@monaco-editor/react";
function JsEditor({code,onChange}) {
  return (
    <div className="js-container">
      <label className="js-label">
        <FontAwesomeIcon className="js-icon" icon={faHtml5} />
        Javascript
      </label>
      <Editor
          height="400px"
          width="100%"
          defaultLanguage="javascript"
          value={code}
          theme="vs-dark"
          onChange={onChange}
        />
    </div>
  );
}

export default JsEditor;
