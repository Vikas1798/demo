import React from "react";
import Home from "./CompA";
import './App.css';
 const App = () =>{
   const [count, setCount] = React.useState(0);
 
  return (
    <>
    <div className="App">
    <div className="heading">
     <h1> Demo app count {count}</h1>
     <br />
    <Home />
    <br/>
      <button  className="button" onClick={()=> setCount(count + 1)}> click to inc </button><br />
   
    </div>
    </div>
    </>

  );
};
export default App;

