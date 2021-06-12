import React, { useState } from 'react';
import styled from 'styled-components';

const ModalDiv = styled.div`
  display: display;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ModalWrapper = styled.div`
  width: 70%;
  margin: auto;
  background-color: #ffffff;
  text-align: left;
  padding: 5px;
  border-radius: 10px;
  border: red 1px solid;
  max-width: 600px;
`;

const CloseIcon = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
}`;

function Modal(props) {
  const {
    modalId,
    children,
    show = false,
    closeModelHandler
  } = props;
  const [showHideModal, setShowHideModal] = useState(show);
  const onCLoseIconCLick = () => {
    if (closeModelHandler) { closeModelHandler(modalId); }
    setShowHideModal(false);
  };
  return (
    <ModalDiv>
      { show && showHideModal
        ? (
          <ModalWrapper className="modal-wrapper">
            <CloseIcon onClick={onCLoseIconCLick}>&times;</CloseIcon>
            {children}
          </ModalWrapper>
        ) : ''}
    </ModalDiv>
  );
}

export default Modal;
