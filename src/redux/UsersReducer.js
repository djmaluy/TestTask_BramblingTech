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
  loading: false,
  view: "table",
  searchResult: [],
};

export const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case FETCHING_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
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
