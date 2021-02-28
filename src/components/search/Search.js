import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/actions";
import "./Search.css";

export const Search = () => {
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(search(e.target.value));
      e.target.value = "";
    }
  };
  return (
    <label>
      Поиск:
      <input
        type="text"
        onKeyPress={handleKeyPress}
        className="search-input"
        placeholder="Enter firstName or lastName"
      />
    </label>
  );
};
