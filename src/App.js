import React from "react";
import Item1 from "./components/Item1";
import './App.css'; 

import "./style.css";

function App() {
  return (
    <div className = "box" >
    <Item1 text = "Resource 1"/>  
    <Item1 text = "Resource 2"/> 
    <Item1 text = "Resource 3"/>
    <Item1 text = "Resource 4"/> 
    <Item1 text = "Resource 5"/> 
    <Item1 text = "Resource 6"/> 
    <Item1 text = "Resource 7"/> 
    <Item1 text = "Resource 8"/> 
     </div>
  );
};

export default App;
