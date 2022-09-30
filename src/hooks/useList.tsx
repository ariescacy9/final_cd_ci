import React, { useState} from "react";
import ListContext from "../context/UseContext";

interface props {
  children: JSX.Element
}

const initialSpend = [0];

export default function ContextProvider({children}: props) {

  const [spend, setSpend] = useState(initialSpend);
  const [list, setList] = useState([0]);

  function addList(newItem:any) { 
    setList([...list, newItem]);
  }
  const data = { spend, setSpend, list, addList };
  return(
    <ListContext.Provider value={data}>
      {children}
    </ListContext.Provider>
  );
}