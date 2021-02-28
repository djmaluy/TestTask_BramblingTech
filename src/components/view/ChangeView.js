import React from "react";
import { useDispatch } from "react-redux";
import { changeView } from "../../redux/actions";

import "./CardView.css";

export const ChangeView = () => {
  const dispatch = useDispatch();

  const handleClick = (view) => {
    dispatch(changeView(view));
  };
  return (
    <div className="buttons-view">
      <button onClick={() => handleClick("table")}>Таблица</button>
      <button onClick={() => handleClick("preview")}>Превью</button>
    </div>
  );
};
