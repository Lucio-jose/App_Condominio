import React, { createContext } from "react";
import { root } from "../Styles/root";

const Context = createContext();

function ColorsProvider({ children }) {
  return <Context.Provider value={{ root }}>{children}</Context.Provider>;
}

export { Context, ColorsProvider };
