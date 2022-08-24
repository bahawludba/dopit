import { UserSelectionContext } from "./App";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 75vw;
  height: 10vh;
`;

function Submission() {
  const { userSelection, showModal, setShowModal } =
    useContext(UserSelectionContext);

  useEffect(() => {}, [userSelection, showModal]);

  const handleOnSubmit = () => {
    setShowModal(true);
  };

  return (
    <ButtonContainer>
      <Button
        id="submit-button"
        className="btn btn-primary"
        disabled={!userSelection}
        onClick={handleOnSubmit}
      >
        SUBMIT
      </Button>
    </ButtonContainer>
  );
}

export default Submission;
