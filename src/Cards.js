import React, { useContext } from "react";
import styled from "styled-components";
import { UserSelectionContext } from "./App";

const positions = [
  { name: "1st", value: 1, selected: false },
  { name: "2nd", value: 2, selected: false },
  { name: "3rd", value: 3, selected: true },
  { name: "4th", value: 4, selected: false },
  { name: "5th", value: 5, selected: false },
  { name: "6th", value: 6, selected: true },
  { name: "7th", value: 7, selected: false },
  { name: "8th", value: 8, selected: false },
  { name: "9th", value: 9, selected: false },
  { name: "10th", value: 10, selected: false },
];

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  margin: 10px;
  gap: 10px;
`;

const CardButton = styled.button`
  border: 2px solid #0d6efd;
  background: transparent;
  border-radius: 25px;
  font-size: calc(10px + 2vmin);
  color: black;
  width: 10%;
  height: 100%;
`;

const selectedCard = {
  background: "white",
  color: "green",
  fontWeight: "600",
  border: "4px dashed #0d6efd",
};

const notAvailable = {
  border: "2px solid red",
  background: "white",
  color: "red"
};

function Cards() {
  const { userSelection, setUserSelection } = useContext(UserSelectionContext);

  const handleCardSelection = (positionValue) => {
    const currCardElement = document.getElementById("card" + positionValue);
    if (!positions.find((pos) => pos.value === positionValue).selected) {
      setUserSelection(positionValue);
    }

    if (positions.find((pos) => pos.value === positionValue).selected) {
      currCardElement.classList.add("disabledClickAnimation");

      setTimeout(() => {
        currCardElement.classList.remove("disabledClickAnimation");
      }, "550");
    }
  };

  return (
    <CardsContainer>
      {positions.map((position, i) => {
        return (
          <CardButton
            id={"card" + position.value}
            style={{
              ...(position.value === userSelection && selectedCard),
              ...(position.selected && notAvailable),
            }}
            key={i}
            onClick={() => handleCardSelection(position.value)}
          >
            {position.name}
          </CardButton>
        );
      })}
    </CardsContainer>
  );
}

export default Cards;
