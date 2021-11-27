import "@fontsource/poppins/300.css"; // light
import "@fontsource/poppins/400.css"; // regular
import "@fontsource/poppins/500.css"; // medium
import "@fontsource/poppins/600.css"; // semi-bold
import "@fontsource/poppins/700.css"; // bold
import "./src/styles/global.css"; // global styles

import React from "react";
import { ThemeProvider } from "styled-components";
import variables from "./src/styles/variables";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={variables}>{element}</ThemeProvider>;
};
