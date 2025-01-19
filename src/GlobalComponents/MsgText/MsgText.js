import React from "react";

function MsgText() {
  return (
    <>
      <div className="scroll-mrq">
        <div className="scroll-text" onMouseOver={(e) => e.target.style.animationPlayState = 'paused'} onMouseOut={(e) => e.target.style.animationPlayState = 'running'}>
          Welcome to Lucknow Zoo..
        </div>
      </div>
    </>
  );
}

export default MsgText;
