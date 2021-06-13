import React, { useState } from 'react';

import DataLoader from '@components/generic-components/DataLoader';
import Confirmation from '@components/generic-components/Confirmation';
import Modal from '@components/generic-components/Modal';
import DetailedConfirmation from '@components/generic-components/DetailedConfirmation';

const getDetailedConfirmationView = () => (
  <ul>
    <li>January 2020</li>
    <li>February 2020</li>
    <li>March 2020</li>
    <li>April 2020</li>
    <li>May 2020</li>
    <li>June 2020</li>
    <li>July 2020</li>
    <li>August 2020</li>
    <li>September 2020</li>
    <li>October 2020</li>
  </ul>
);

const TaskTwo = () => {
  const [showDataLoader, setShowDataLoader] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDtlConfirm, setShowDtlConfirm] = useState(false);
  const toggleHandler = (modalType) => {
    if (modalType === 'data-loader') {
      setShowDataLoader(true);
      setShowConfirm(false);
      setShowDtlConfirm(false);
    } else if (modalType === 'confirm-modal') {
      setShowDataLoader(false);
      setShowConfirm(true);
      setShowDtlConfirm(false);
    } else if (modalType === 'dtl-confirm-modal') {
      setShowDataLoader(false);
      setShowConfirm(false);
      setShowDtlConfirm(true);
    }
  };

  const closeIconHandler = () => {
    setShowDataLoader(false);
    setShowConfirm(false);
    setShowDtlConfirm(false);
  };

  return (
    <div>
      <div className="demo-btn-group">
        <button className="btn btn-primary" onClick={() => toggleHandler('data-loader')}>Show Data Loader</button>
        <button className="btn btn-primary" onClick={() => toggleHandler('confirm-modal')}>Show Confirmation Modal</button>
        <button className="btn btn-primary" onClick={() => toggleHandler('dtl-confirm-modal')}>Show History Confirmation Modal</button>
      </div>
      { showDataLoader && (
      <Modal show={showDataLoader} closeModelHandler={closeIconHandler}>
        <DataLoader textValue="Data is loading" />
      </Modal>
      )}
      {showConfirm && (
      <Modal show={showConfirm} closeModelHandler={closeIconHandler}>
        <Confirmation
          headingText="Are you sure you want to delete all your files?"
          contentText="This action cannot be undone"
        />
      </Modal>
      )}
      {showDtlConfirm && (
      <Modal show={showDtlConfirm} closeModelHandler={closeIconHandler}>
        <DetailedConfirmation
          headingText="Are you sure you want to delete this report and history?"
              // eslint-disable-next-line max-len
          contentText={['If you delete the ', <strong key="ex1">Executive metrics</strong>, ' report, you will also delete the associated history:']}
          confirmInstr={['Please type the word \'Delete\' to remove the ', <strong key="ex2">Executive metrics</strong>, ' report and its associated history:']}
          detailedView={getDetailedConfirmationView()}
        />
      </Modal>
      )}
    </div>
  );
};

export default TaskTwo;
