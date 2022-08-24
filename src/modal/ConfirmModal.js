import { useContext, useEffect, useRef } from "react";
import "./ConfirmModal.css";
import { UserSelectionContext } from "../App";

const ConfirmModal = (props) => {
  const modalRef = useRef();
  const { setShowModal } = useContext(UserSelectionContext);

  useEffect(() => {}, [setShowModal]);

  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <div ref={modalRef} className="confirmModal">
      <div className="confirmModalTitle">Confirm</div>
      <div className="confirmModalMessage">
        Are you sure want to submit your position?
      </div>
      <div className="confirmModalButtons">
        <button className="btn btn-danger" onClick={handleCancelClick}>
          Cancel
        </button>
        <button className="btn btn-primary">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
