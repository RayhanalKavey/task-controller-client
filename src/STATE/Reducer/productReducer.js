import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../actionTypes/actionTypes";

export const initialState = {
  loading: false,
  data: [],
  error: false,
};
export const taskReducer = (state, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
      };
    // break;
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    // break;

    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    // break;
    default:
      return state;
    // break;
  }
};
