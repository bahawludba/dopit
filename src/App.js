import { createContext, useEffect, useState } from "react";
import "./App.css";
import DraftPositions from "./DraftPositions";
import MainTitle from "./MainTitle";
import ConfirmModal from "./modal/ConfirmModal";
import Submission from "./Submission";

export const UserSelectionContext = createContext("");

function App() {
  const [userSelection, setUserSelection] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const blurElements = document.getElementById("blurElements");

  useEffect(() => {
    if (blurElements) {
      if (showModal) {
        blurElements.classList.add("contentBlur");
      } else {
        blurElements.classList.remove("contentBlur");
      }
    }
  });

  return (
    <div id="App" className="App">
      <UserSelectionContext.Provider
        value={{ userSelection, setUserSelection, showModal, setShowModal }}
      >
        <div id="blurElements">
          {" "}
          <MainTitle id="mainTitle" />
          <DraftPositions id="draftPositions" />
          <Submission id="submission" />
        </div>

        {showModal && <ConfirmModal />}
      </UserSelectionContext.Provider>
    </div>
  );
}

export default App;
