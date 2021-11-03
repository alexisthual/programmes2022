import React from "react";

import "src/styles/global.scss";
import { AppContextProvider } from "src/context/AppContext";

export const wrapRootElement = ({ element }) => (
  <AppContextProvider>{element}</AppContextProvider>
);
