import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../../STATE/actionTypes/actionTypes";
import { initialState, taskReducer } from "../../STATE/Reducer/productReducer";

const TASK_CONTEXT = createContext();

const TaskProvider = ({ children }) => {
  const [refetching, setRefetching] = useState(false);
  const [state, dispatch] = useReducer(taskReducer, initialState);
  /// Fetching tasks data
  useEffect(() => {
    setRefetching(false);
    dispatch({ type: FETCHING_START });
    fetch(`${process.env.REACT_APP_api_url}/tasks`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCHING_SUCCESS, payload: data }))
      .catch((error) => {
        dispatch({ type: FETCHING_ERROR });
      });
  }, [refetching]);

  const value = { state, dispatch, refetching, setRefetching };
  return (
    <TASK_CONTEXT.Provider value={value}>{children}</TASK_CONTEXT.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TASK_CONTEXT);
  return context;
};

export default TaskProvider;
