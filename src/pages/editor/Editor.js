import React, { useState } from "react";
import "./Editor.css";
import CssEditor from "../../components/editor/CssEditor";
import JsEditor from "../../components/editor/JsEditor";
import HtmlEditor from "../../components/editor/HtmlEditor";
import Sandbox from "../../components/editor/Sandbox";

function Editor({}) {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCSSCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  return (
    <>
      <div className="left">
        <HtmlEditor code={htmlCode} onChange={(e) => setHtmlCode(e)} />
        <CssEditor code={cssCode} onChange={(e) => setCSSCode(e)} />
        <JsEditor code={jsCode} onChange={(e) => setJsCode(e)} />
      </div>
      <Sandbox
        codeToRender={`<style>${cssCode}</style> <body>${htmlCode}</body> <script>${jsCode}</script>`}
      />
    </>
  );
}

export default Editor;
