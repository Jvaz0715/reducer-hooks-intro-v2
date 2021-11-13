import React from "react";
import Parent from "./components/Parent/Parent";
import Child from "./components/Parent/Child";
import Child2 from "./components/Parent/Child2";
import Child3 from "./components/Parent/Child3";
import './App.css';

function App() {
  return (
    <div className="App">
      {/* the children used in other files are whatever you pass down in between the component tags */}
      <Parent>
        <h1>Good Morning Class</h1>
        <div>Hello Back</div>
      </Parent>

      <Parent>
        <Child />
        <Child2 />
        <Child3 />
      </Parent>
    </div>
  );
}

export default App;
