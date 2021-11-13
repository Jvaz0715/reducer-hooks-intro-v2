import React from "react";
import Parent from "./Parent";
import Child from "./Child";
import Child2 from "./Child2";
import Child3 from "./Child3";
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
