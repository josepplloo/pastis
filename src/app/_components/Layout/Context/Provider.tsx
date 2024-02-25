"use client";
import { useReducer } from "react";
import {
  reducer as layoutReducer,
  INITIAL_STATE,
} from "./reducer";
import { Context as LayoutContext } from "./index";

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [layoutState, layoutDispatch] = useReducer(
    layoutReducer,
    INITIAL_STATE,
  );
  
  return (
    <LayoutContext.Provider
      value={{ state: layoutState, dispatch: layoutDispatch }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
