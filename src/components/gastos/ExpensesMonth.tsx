
import React, { useContext } from "react";
import ListContext from "../../context/UseContext";

export default function ExpensesMonth (){

  const { list } = useContext(ListContext);

  return (
    <ul style={{display: 'flex', flexDirection: 'column', width: '90vw', height: '100vh', padding:'0', margin:'0'}}>
      {list.map ((gasto: any, index: any ) =>( <li key = {index} >{gasto}</li>))}
    </ul>
  );
}