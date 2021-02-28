import React from "react";
import { useDispatch } from "react-redux";
import { isFavourite } from "../../redux/actions";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./TableData.css";

export const TableData = ({ users }) => {
  const dispatch = useDispatch();

  const onHandleClick = (id) => {
    dispatch(isFavourite(id));
  };

  return (
    <table className="container ">
      <TransitionGroup component="tbody" appear className="table-body">
        {users.map((user) => (
          <CSSTransition key={user.id} timeout={1000} classNames="transition2s">
            <tr className="table-row">
              <td className="table-col">
                <img
                  src={`/images/${user.image}.svg`}
                  alt={user.image}
                  className="data-img"
                />
              </td>
              <td className="table-col">
                <span>{user.id}</span>
              </td>
              <td className="table-col">
                <span>{user.name}</span>
              </td>
              <td className="table-col">
                <span>{`${user.age} лет`}</span>
              </td>
              <td className="table-col">
                <span>{user.phone}</span>
              </td>
              <td className="table-col">
                <button
                  className={user.favourite ? `btn fav` : "btn"}
                  onClick={() => onHandleClick(user.id)}
                >
                  {user.favourite ? "✓" : "𐄂"}
                </button>
              </td>
            </tr>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </table>
  );
};
