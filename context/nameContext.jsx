import React, {  createContext, useContext } from "react";

//Number One
export const NameContext = createContext({
  name: "Name not provided",
});

//Number Two
export const NameContextProvider = ({children}) =>{
  return (
    <NameContext.Provider value={{name: "Desmond Agbesi"}} >
      {children}
    </NameContext.Provider>
  )
}

export const useNameContext = () => useContext(NameContext);
