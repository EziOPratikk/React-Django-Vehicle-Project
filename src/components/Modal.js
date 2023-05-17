import { useState } from "react";

import Overlay from "./Overlay";
import Backdrop from "./Backdrop";

function Modal(props) {
 const [ isModelOpen, setIsModelOpen ] = useState(false);

  function clickHandler() {
    setIsModelOpen(true);
  }

  function closeOverlayHandler() {
    setIsModelOpen(false)
  }

  return (
    <div className="card">
      <h2>{props.modalTitle}</h2>
      <div className="btn-div">
        <button className="btn" onClick={clickHandler}>
          Click
        </button>
      </div>
      { isModelOpen ? <Overlay onClick={closeOverlayHandler}/> : null}
      { isModelOpen ? <Backdrop onClick={closeOverlayHandler}/> : null }
    </div>
  );
}

export default Modal;
