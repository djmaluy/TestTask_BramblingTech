import {
  START_FETCHING,
  FETCHING_FAIL,
  FETCHING_SUCCESS,
  IS_FAVOURITE,
  VIEW,
  SEARCH,
} from "./actionTypes";

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch({ type: START_FETCHING });
    const response = await fetch("/api/data.json");
    if (!response.ok) throw new Error("Some error");

    const users = await response.json();
    if (!users.length) throw new Error("no data");

    dispatch({ type: FETCHING_SUCCESS, users });
  } catch (error) {
    dispatch({ type: FETCHING_FAIL, error: error.message });
  }
};

export const isFavourite = (id) => (dispatch, getState) => {
  const users = getState().users.map((user) => {
    if (user.id === id) {
      user.favourite = !user.favourite;
    }
    return user;
  });
  dispatch({ type: IS_FAVOURITE, users });
};

export const changeView = (view) => (dispatch) =>
  dispatch({ type: VIEW, view });

export const search = (str) => (dispatch, getState) => {
  const user = getState().users.filter((user) => {
    const substrs = user.name.split(" ");
    return substrs.find((substr) => substr.toLowerCase() === str.toLowerCase());
  });
  if (!user.length) return;
  dispatch({ type: SEARCH, user });
};
