import React, { useEffect } from "react";
import { TableData } from "./components/table/TableData";
import "./App.css";
import { CardView } from "./components/view/CardView";
import { ChangeView } from "./components/view/ChangeView";
import { Search } from "./components/search/Search";
import { useSelector, useDispatch } from "react-redux";
import {
  getSearchResult,
  getUsers,
  getView,
  getLoading,
  getError,
} from "./redux/users-selectors";
import { fetchUsers } from "./redux/actions";
import { SwitchTheme } from "./components/theme/SwitchTheme";

export const App = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const view = useSelector(getView);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);
  const searchResult = useSelector(getSearchResult);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="container">
      <div className="head-switchers">
        <Search searchResult={searchResult} />
        <ChangeView />
        <SwitchTheme />
      </div>
      {loading ? (
        <div className="downloading">Загрузка...</div>
      ) : error ? (
        alert(error)
      ) : (
        <>
          {view === "table" ? (
            <TableData users={searchResult.length ? searchResult : users} />
          ) : (
            <CardView users={searchResult.length ? searchResult : users} />
          )}
        </>
      )}
    </div>
  );
};
