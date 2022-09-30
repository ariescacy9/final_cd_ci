import React, { useContext, useState } from "react";
import ListContext from "../../context/UseContext";

export default function AddExpenses() {

  const { addList } = useContext(ListContext);
  const [newItem, setNewItem] = useState("");
  //document.querySelector('#spend').focus();

  function submit(e) {
    e.preventDefault ();
    addList(newItem);
    setNewItem('');
  }  
  return (
    <form onSubmit = {(e) => submit(e)} style={{gap: '20px'}}>
      <input 
        type = "number"
        id = "spend" 
        placeholder="ingrese gastos"
        value={newItem}
        onChange = {(e)=> setNewItem(e.target.value)}
        style={{padding: '20px'}}
      />
      <button type="submit" style={{padding: '20px', margin: '10px'}}> Agregar gasto </button>
  </form>
  );
}