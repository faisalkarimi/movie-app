import React, { createContext, useReducer } from "react";
import paginationReducer from "./paginationReducer";

const initialState = {
  currentPage: 1,
};
export const PaginationContext = createContext(initialState);

export const PaginationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paginationReducer, initialState);
  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
};
