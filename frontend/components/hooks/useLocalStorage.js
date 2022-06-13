import React, { useState } from "react";

const useLocalStorage = (key, value) => {
  const [state, setState] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  });
  const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return state, setStoredState;
};

export default useLocalStorage;
