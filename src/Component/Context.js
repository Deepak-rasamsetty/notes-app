import { createContext, useContext } from "react";

export const themes = {
  darkTheme: {
    mode: "dark",
    backgroundColor: "#0D2F56",
    textColor: "#D3D7DA",
    componenetBackgroundColor: "#496374",
    componentHeaderBackgroundColor: "#216390",
  },
  lightTheme: {
    mode: "light",
    backgroundColor: "white",
    textColor: "black",
    componenetBackgroundColor: "white",
    componentHeaderBackgroundColor: "white",
  },
};

export const customContext = createContext();
export const useCustomContext=()=> useContext(customContext);
export const CustomContextProvider=({ value, children})=>{
   return (<customContext.Provider value={value}>
    {children}
   </customContext.Provider>);
};
 export const GetContextValue=(key)=>{
  var ctx= useCustomContext();
  return ctx[key];
 }
