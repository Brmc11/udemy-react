import React from 'react';
import ReactModal from 'react-modal';

const OptionModal = (props) => (
  <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelected}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>

    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button"
      onClick={props.handleClearSelected}>
      Lets do it!
    </button>
  </ReactModal>
);

export default OptionModal;
