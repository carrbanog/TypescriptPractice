import React, { useState } from "react";
import "./css/MoveListToggle.css";
import type { Move } from "../types/PoekmonType";

interface MoveListToggleProps {
  moves: Move[];
}

const MoveListToggle = ({ moves }: MoveListToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  // console.log(moves);

  return (
    <div className="move-section">
      <div className="move-section" onClick={handleToggle}>
        기술 {isOpen ? "접기 ▲" : "펼치기 ▼"}
      </div>
      {isOpen && (
        <ul className="move-list">
          {moves.map((e, index) => (
            <li key={index}>{e.move.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoveListToggle;
