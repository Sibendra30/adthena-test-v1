import React, { useState } from 'react';

function DetailedConfirmation({
  headingText,
  contentText,
  deleteBtnTxt = 'Delete All',
  deleteAllHandler,
  cancelBtnText = 'Cancel',
  cancelHandler,
  detailedView,
  confirmInstr = 'Confirm Instr'
}) {
  const [enableDelete, setEnableDelete] = useState(false);
  const [textValue, setTextValue] = useState('');
  const onTextChange = (e) => {
    setTextValue(e.target.value);
    if (e.target.value === 'Delete') {
      setEnableDelete(true);
    }
    if (enableDelete && e.target.value !== 'Delete') {
      setEnableDelete(false);
    }
  };
  console.log(enableDelete);
  return (
    <div>
      <h5>{headingText}</h5>
      <div className="dtl-confirmation-body">{contentText}</div>
      <div className="confirmation-details">{detailedView}</div>
      <div className="confirmation-instr">{confirmInstr}</div>
      <input type="text" value={textValue} onChange={onTextChange} />
      <div className="btn-wrapper">
        <button className="btn btn-primary" disabled={enableDelete ? '' : 'disabled'} onClick={deleteAllHandler}>{deleteBtnTxt}</button>
        <button className="btn btn-secondary" onClick={cancelHandler}>{cancelBtnText}</button>
      </div>
    </div>
  );
}

export default DetailedConfirmation;
