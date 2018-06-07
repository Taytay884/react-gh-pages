import React from "react";
import MovePreview from "../MovePreview/MovePreview";
// import './css/MoveList.css';

const MoveList = props => {
  const moves = props.moves.map(move => (
    <MovePreview key={move._id} move={move} />
  ));
  return (
    <section className="MoveList">
      <ul>{moves}</ul>
    </section>
  );
};

export default MoveList;
