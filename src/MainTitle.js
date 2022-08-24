import React from "react";
import styled from "styled-components";


const TitleContainer = styled.div`
  font-size: calc(10px + 2vmin);
  width: auto;
  margin: 5px;
`;

const DraftPositionTItle = styled.div`
  fontsize: 30px;
  width: auto;
  margin: 10px;
`;

function MainTitle() {
  return (
    <div>
      <TitleContainer>WELCOME INSERTUSERNAME!</TitleContainer>
      <DraftPositionTItle>DRAFT POSITIONS</DraftPositionTItle>
    </div>
  );
}

export default MainTitle;
