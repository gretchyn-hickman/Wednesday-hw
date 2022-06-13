import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (theValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", theValue);
  return [darkMode, setDarkMode];
};
export default useDarkMode;
