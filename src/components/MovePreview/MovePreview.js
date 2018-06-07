import React from "react";
import moment from "moment";
import "./MovePreview.css";

const MovePreview = props => {
  const move = props.move;

  return (
    <li className="MovePreview">
      <div>
        <h3 className="to">
          {move.to} - <span className="amount">{move.amount}$</span>
        </h3>

        <div className="at">{moment(move.at).format("LLLL")}</div>
      </div>
    </li>
  );
};

export default MovePreview;
