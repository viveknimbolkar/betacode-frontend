import React from 'react'
import "./Sandbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Sandbox({codeToRender}) {
  return (
    <div className="output">
        <label>
          <FontAwesomeIcon className="icon" icon={faPlay} />
          Output
        </label>
        <iframe className='iframe' srcDoc={codeToRender} height={"400px"} width={"100%"}></iframe>
      </div>
  )
}

export default Sandbox
