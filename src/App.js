import React, { useEffect } from "react";
import { TableData } from "./components/table/TableData";
import "./App.css";
import { CardView } from "./components/view/CardView";
import { ChangeView } from "./components/view/ChangeView";
import { Search } from "./components/search/Search";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult, getUsers, getView } from "./redux/users-selectors";
import { fetchUsers } from "./redux/actions";
import { ChangeTheme } from "./components/theme/ChangeTheme";

export const App = () => {
  const dispatch = useDispatch();

  const users = useSelector(getUsers);
  const view = useSelector(getView);
  const searchResult = useSelector(getSearchResult);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="head-switchers">
        <Search searchResult={searchResult} />
        <ChangeView />
        <ChangeTheme />
      </div>

      {view === "table" ? (
        <TableData users={searchResult.length ? searchResult : users} />
      ) : (
        <CardView users={searchResult.length ? searchResult : users} />
      )}
    </div>
  );
};
