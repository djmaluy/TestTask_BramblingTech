import React from "react";
import { isFavourite } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./CardView.css";

export const CardView = ({ users }) => {
  const dispatch = useDispatch();

  const onHandleClick = (id) => {
    dispatch(isFavourite(id));
  };
  return (
    <div className="wrapper">
      {users.map((user) => {
        return (
          <div className="cards" key={user.id}>
            <div>
              <div className="card-items">
                <div>
                  <img
                    src={`/images/${user.image}.svg`}
                    alt={user.image}
                    className="avatar"
                  />
                  <span>{user.name}</span>
                </div>
                <button
                  className={user.favourite ? `btn fav` : "btn"}
                  onClick={() => onHandleClick(user.id)}
                >
                  {user.favourite ? "✓" : "𐄂"}
                </button>
              </div>
              <div className="card-body">
                <span>{user.age} лет</span>
              </div>
              <div className="card-body">
                <span>{user.phone}</span>
              </div>
              <div className="card-body">
                <span>{user.phrase}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
