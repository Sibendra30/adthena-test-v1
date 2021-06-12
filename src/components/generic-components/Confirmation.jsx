import React from 'react';

function Confirmation({
  headingText, contentText, yesBtnText = 'Yes', yesHandler, noBtnText = 'No', noHandler
}) {
  return (
    <div>
      <h5>{headingText}</h5>
      <div className="confirmation-body">{contentText}</div>
      <div className="btn-wrapper">
        <button className="btn btn-primary" onClick={yesHandler}>{yesBtnText}</button>
        <button className="btn btn-secondary" onClick={noHandler}>{noBtnText}</button>
      </div>
    </div>
  );
}

export default Confirmation;
