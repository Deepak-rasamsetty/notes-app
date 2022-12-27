import "./App.css";
import React, { useEffect, useReducer } from "react";
import SubApp from "./Component/SubApp";
import { CustomContextProvider, themes, notes } from "./Component/Context";
import { useState } from "react";
import { globalReducer } from "./Component/GlobalReducer";

function App() {
  const initialState = {
    mode: "light",
    isAdmin: false,
  };
  const [globalState, dispatch] = useReducer(globalReducer, initialState);
  const [noteListUpdated, setNoteListUpdated] = useState(false);

  
  let theme =
    globalState.mode === "light" ? themes.lightTheme : themes.darkTheme;
  useEffect(() => {
    document.body.style.backgroundColor = theme.backgroundColor;
  }, [globalState.mode]);
  const changeTheme = () => {
    dispatch({ type: "TOGGLE THEME" });
  };
  const toggleAdminAccess = () => {
    dispatch({ type: "TOGGLE ADMIN ACCESS" });
  };
  console.log("App is rendered");
  return (
    <CustomContextProvider
      value={{
        theme: theme,
        mode: globalState.mode,
        changeTheme: changeTheme,
        isAdmin: globalState.isAdmin,
        toggleAdminAccess: toggleAdminAccess,
        noteListUpdated: noteListUpdated,
        setNoteListUpdated: setNoteListUpdated,
      }}
    >
      <SubApp />
    </CustomContextProvider>
  );
}

export default App;
