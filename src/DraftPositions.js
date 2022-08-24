import React from "react";
import styled from "styled-components";
import Cards from "./Cards";

const DraftPositionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 20px;
  width: 80vw;
  height: 30vh;
  margin-top: 30px;
  margin-bottom: 10px;
  background: white;
  opacity: 0.8;
`;

function DraftPositions() {
  return (
    <DraftPositionContainer>
      <Cards />
    </DraftPositionContainer>
  );
}

export default DraftPositions;
