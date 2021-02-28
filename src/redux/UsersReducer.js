import {
  START_FETCHING,
  FETCHING_SUCCESS,
  FETCHING_FAIL,
  IS_FAVOURITE,
  VIEW,
  SEARCH,
} from "./actionTypes";

const initialState = {
  users: [],
  view: "table",
  searchResult: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        users: action.users,
      };
    case FETCHING_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case IS_FAVOURITE:
      return {
        ...state,
        users: action.users,
      };
    case VIEW:
      return {
        ...state,
        view: action.view,
      };
    case SEARCH:
      return {
        ...state,
        searchResult: action.user,
      };
    default:
      return state;
  }
};
