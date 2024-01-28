import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import "./HtmlEditor.css";
import { Editor } from "@monaco-editor/react";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";
function HtmlEditor({code, onChange}) {
  const[isExpand,setIsExpand] = useState(false)

  const Expand = ()=>{
    setIsExpand(!isExpand);
  }
  return (
    <div>
      <div className="html-container">
        <div className="expand">
        <label className="html-label">
          <FontAwesomeIcon className="html-icon" icon={faHtml5} />
          HTML
        </label>
         <FontAwesomeIcon onClick={Expand}  style={{color:"white"}} icon={faUpRightAndDownLeftFromCenter} />
          </div>
          {!isExpand && (
              <Editor
              height="400px"
              width="100%"
              defaultLanguage="html"
              value={code}
              theme="vs-dark"
              onChange={onChange}
            />

          ) }
      
      </div>
    </div>
  );
}

export default HtmlEditor;
